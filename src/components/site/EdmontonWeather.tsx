import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Cloud, CloudRain, Snowflake, Sun, Clock } from "lucide-react";
import { getEdmontonWeather } from "@/lib/weather.functions";
import { edmontonTime, weatherCondition } from "@/lib/edmonton";

export function EdmontonWeather() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => setTime(edmontonTime(new Date()));
    tick();
    const timer = window.setInterval(tick, 30000);
    const observer = new IntersectionObserver(entries => { if (entries.some(entry => entry.isIntersecting)) { setVisible(true); observer.disconnect(); } }, { rootMargin: "200px" });
    if (ref.current) observer.observe(ref.current);
    return () => { window.clearInterval(timer); observer.disconnect(); };
  }, []);
  const { data, isPending } = useQuery({ queryKey: ["edmonton-weather"], queryFn: () => getEdmontonWeather(), enabled: visible, staleTime: 600000, refetchInterval: visible ? 600000 : false, retry: false });
  const condition = data ? weatherCondition(data.symbol) : null;
  const WeatherIcon = condition === "Snow" ? Snowflake : condition === "Rain" ? CloudRain : condition === "Clear" || condition === "Mostly clear" ? Sun : Cloud;
  return <div ref={ref} className="edmonton-weather" aria-label="Edmonton weather and local time">
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <div><p className="text-sm font-semibold text-navy-foreground">Edmonton, Canada</p><p className="mt-1 flex items-center gap-2 text-xs"><Clock className="size-3.5" aria-hidden="true" /><span className="tabular-nums">{time ?? "Local time"}</span></p></div>
      <div className="flex items-center gap-3" title={data ? `Current-hour forecast · ${data.forecastAt}` : undefined}><WeatherIcon className="size-7 text-hero-accent" aria-hidden="true" /><div><p className="text-xl font-semibold text-navy-foreground tabular-nums">{data ? `${Math.round(data.temperature)}°C` : "—"}</p><p className="text-xs">{condition ?? (isPending ? "Loading weather…" : "Weather unavailable")}</p></div></div>
    </div>
    <a href="https://www.met.no/en" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-[10px] text-navy-muted underline underline-offset-2">Weather forecast · MET Norway</a>
  </div>;
}