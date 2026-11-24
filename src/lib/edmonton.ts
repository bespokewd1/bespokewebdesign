export const EDMONTON_TIME_ZONE = "America/Edmonton";

export function edmontonTime(date: Date) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: EDMONTON_TIME_ZONE, hour: "numeric", minute: "2-digit", timeZoneName: "short" }).format(date);
}

export function weatherCondition(symbol: string) {
  if (symbol.includes("thunder")) return "Thunderstorms";
  if (symbol.includes("snow") || symbol.includes("sleet")) return "Snow";
  if (symbol.includes("rain")) return "Rain";
  if (symbol.includes("fog")) return "Fog";
  if (symbol.includes("partlycloudy")) return "Partly cloudy";
  if (symbol.includes("fair")) return "Mostly clear";
  if (symbol.includes("clearsky")) return "Clear";
  return "Cloudy";
}