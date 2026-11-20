import { createElement, useEffect, useRef, useState } from "react";

const WIDGET_SCRIPT = "https://unpkg.com/@elevenlabs/convai-widget-embed@0.27.1";

export function AIAssistant() {
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const widgetRef = useRef<HTMLElement | null>(null);

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
      const opensGlobe = event.composedPath().some(target => target instanceof HTMLElement && target.getAttribute("aria-label") === "Open chat");
      if (opensGlobe) {
        requestAnimationFrame(() => widget.dispatchEvent(new CustomEvent("elevenlabs-agent:expand", { detail: { action: "expand" } })));
      }
    };
    widget.addEventListener("click", onClick, true);
    void customElements.whenDefined("elevenlabs-convai").then(() => {
      if (disposed || !widget.shadowRoot) return;
      // The native Dismiss control minimizes the initial toolbar to its real
      // animated avatar; keep this adapter paired with the pinned embed version.
      const minimizeInitially = () => {
        const dismiss = widget.shadowRoot?.querySelector<HTMLButtonElement>('button[aria-label="Dismiss"]');
        if (!dismiss) return;
        dismiss.click();
        setReady(true);
        observer?.disconnect();
      };
      observer = new MutationObserver(minimizeInitially);
      observer.observe(widget.shadowRoot, { childList: true, subtree: true });
      minimizeInitially();
    });
    return () => {
      disposed = true;
      observer?.disconnect();
      widget.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <aside className="bespoke-assistant" aria-label="Bespoke AI Assistant">
      {failed && <p role="alert" className="rounded border bg-surface p-4 text-sm text-navy">The assistant couldn’t load. Please refresh to try again.</p>}
      <span className="bespoke-assistant-label" hidden={!ready}>Bespoke AI Assistant</span>
      {createElement("elevenlabs-convai", {
          ref: widgetRef,
          class: ready ? "is-ready" : "",
          "agent-id": "agent_7901m7vtp3enfsn8b288jnamtafg",
          variant: "compact",
          placement: "bottom",
          "show-avatar-when-collapsed": "true",
          "text-input": "true",
          transcript: "true",
          dismissible: "true",
          "mobile-fullscreen": "false",
          "action-text": "Bespoke AI Assistant",
      })}
    </aside>
  );
}