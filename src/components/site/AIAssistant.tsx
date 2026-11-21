import { createElement, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Minus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ASSISTANT_AGENT_ID, ASSISTANT_LANGUAGE } from "@/lib/assistant";
import appCss from "@/styles.css?url";

const WIDGET_SCRIPT = "https://unpkg.com/@elevenlabs/convai-widget-embed@0.27.1";

export function AIAssistant() {
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const widgetRef = useRef<HTMLElement | null>(null);
  const [header, setHeader] = useState<HTMLElement | null>(null);
  const [opened, setOpened] = useState(false);
  const [bubble, setBubble] = useState(false);
  const bubbleDismissed = useRef(false);

  useEffect(() => {
    if (opened || bubbleDismissed.current) return;
    const timer = setTimeout(() => setBubble(true), 4000);
    return () => clearTimeout(timer);
  }, [opened]);

  const dismissBubble = () => {
    setBubble(false);
    bubbleDismissed.current = true;
  };

  const openFromBubble = () => {
    dismissBubble();
    const widget = widgetRef.current;
    if (!widget) return;
    widget.removeAttribute("data-minimized");
    setOpened(true);
    requestAnimationFrame(() => widget.dispatchEvent(new CustomEvent("elevenlabs-agent:expand", { detail: { action: "expand" } })));
  };

  const minimize = () => {
    const widget = widgetRef.current;
    widget?.setAttribute("data-minimized", "true");
    widget?.dispatchEvent(new CustomEvent("elevenlabs-agent:expand", { detail: { action: "collapse" } }));
  };

  useEffect(() => {
    // The older embed registers the same element but has no text-chat UI.
    // Reload only during an in-place upgrade if it is already registered.
    const legacy = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
    if (legacy) {
      legacy.remove();
      window.location.reload();
      return;
    }
    let script = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SCRIPT}"]`);
    const onError = () => setFailed(true);
    if (!script) {
      script = document.createElement("script");
      script.src = WIDGET_SCRIPT;
      script.async = true;
      script.addEventListener("error", onError);
      document.body.appendChild(script);
    } else {
      script.addEventListener("error", onError);
    }
    // Keep the single script alive across client-side navigation.
    return () => script?.removeEventListener("error", onError);
  }, []);

  useEffect(() => {
    let disposed = false;
    let observer: MutationObserver | undefined;
    const widget = widgetRef.current;
    if (!widget) return;
    const onClick = (event: Event) => {
      const opensGlobe = event.composedPath().some(target => target instanceof HTMLElement && (target.getAttribute("aria-label") === "Open chat" || target.classList.contains("bespoke-chat-trigger") && widget.hasAttribute("data-minimized")));
      if (opensGlobe) {
        if (widget.hasAttribute("data-minimized")) event.stopPropagation();
        widget.removeAttribute("data-minimized");
        setOpened(true);
        requestAnimationFrame(() => widget.dispatchEvent(new CustomEvent("elevenlabs-agent:expand", { detail: { action: "expand" } })));
      }
    };
    widget.addEventListener("click", onClick, true);
    void customElements.whenDefined("elevenlabs-convai").then(() => {
      if (disposed || !widget.shadowRoot) return;
      // The native Dismiss control minimizes the initial toolbar to its real
      // animated avatar; keep this adapter paired with the pinned embed version.
      const root = widget.shadowRoot;
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = appCss;
      root.appendChild(stylesheet);
      let initialized = false;
      const adaptPanel = () => {
        const dismiss = root.querySelector<HTMLButtonElement>('button[aria-label="Dismiss"]');
        if (dismiss && !initialized) {
          initialized = true;
          dismiss.click();
          setReady(true);
        }
        const sheet = root.querySelector<HTMLElement>(".sheet");
        if (!sheet) return;
        sheet.classList.add("bespoke-chat-sheet");
        const trigger = sheet.parentElement?.querySelector<HTMLElement>(".rounded-compact-sheet");
        trigger?.classList.add("bespoke-chat-trigger");
        if (trigger && widget.hasAttribute("data-minimized")) {
          trigger.setAttribute("role", "button");
          trigger.setAttribute("aria-label", "Reopen conversation");
          trigger.tabIndex = 0;
          trigger.onkeydown = event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); trigger.click(); } };
        } else if (trigger) {
          trigger.removeAttribute("role");
          trigger.removeAttribute("aria-label");
          trigger.removeAttribute("tabindex");
          trigger.onkeydown = null;
        }
        let headerNode = sheet.querySelector<HTMLElement>(".bespoke-chat-header-mount");
        if (!headerNode) {
          headerNode = document.createElement("div");
          headerNode.className = "bespoke-chat-header-mount";
          sheet.prepend(headerNode);
        }
        setHeader(headerNode);
        const scroll = sheet.querySelector<HTMLElement>(".overflow-y-auto");
        if (!scroll) return;
        scroll.classList.add("bespoke-chat-scroll");
        // Leave the provider's greeting and conversation messages untouched.
        // ElevenLabs loads the current agent greeting for each new conversation.
      };
      observer = new MutationObserver(adaptPanel);
      observer.observe(root, { childList: true, subtree: true });
      adaptPanel();
    });
    return () => {
      disposed = true;
      observer?.disconnect();
      widget.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <aside className="bespoke-assistant" aria-label="Talk to Casey - Bespoke AI Assistant">
      {failed && <p role="alert" className="rounded border bg-surface p-4 text-sm text-navy">The assistant couldn’t load. Please refresh to try again.</p>}
      {bubble && !opened && <div className="casey-bubble" role="status">
        <button type="button" className="casey-bubble-body" onClick={openFromBubble}>👋 Have questions about our services? Talk or chat with Casey, our AI assistant.</button>
        <button type="button" className="casey-bubble-close" aria-label="Dismiss message" onClick={dismissBubble}><X className="size-3.5" /></button>
      </div>}
      {header && createPortal(<div className="bespoke-chat-header">
        <div className="bespoke-chat-title-row"><strong>Talk to Casey - Bespoke AI Assistant</strong><Button variant="ghost" size="icon" title="Minimize conversation" aria-label="Minimize conversation" onClick={minimize}><Minus /></Button></div>
        <p className="bespoke-chat-language">English</p>
      </div>, header)}
      {createElement("elevenlabs-convai", {
          ref: widgetRef,
          class: ready ? "is-ready" : "",
          "agent-id": ASSISTANT_AGENT_ID,
          language: ASSISTANT_LANGUAGE,
          variant: "compact",
          placement: "bottom",
          "show-avatar-when-collapsed": "true",
          "text-input": "true",
          transcript: "true",
          dismissible: "true",
          "mobile-fullscreen": "false",
          "action-text": "Talk to Casey - Bespoke AI Assistant",
          "show-resize-button": "false",
          "text-contents": JSON.stringify({ main_label: "Talk to Casey - Bespoke AI Assistant", start_chat: "Chat with us", input_placeholder: "Type your question here...", input_placeholder_text_only: "Type your question here...", input_placeholder_new_conversation: "Type your question here...", send_message: "Send", start_call: "Start a voice call", end_call: "End call" }),
      })}
    </aside>
  );
}