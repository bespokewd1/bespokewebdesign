import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const forecastSchema = z.object({ properties: z.object({ timeseries: z.array(z.object({
  time: z.string(),
  data: z.object({
    instant: z.object({ details: z.object({ air_temperature: z.number() }) }),
    next_1_hours: z.object({ summary: z.object({ symbol_code: z.string() }) }).optional(),
    next_6_hours: z.object({ summary: z.object({ symbol_code: z.string() }) }).optional(),
  }),
})) }) });

type Weather = { temperature: number; symbol: string; forecastAt: string };
let cached: { weather: Weather; expires: number } | undefined;

// Public, fixed-location weather only: no user input or credentials.
export const getEdmontonWeather = createServerFn({ method: "GET" }).handler(async (): Promise<Weather | null> => {
  if (cached && cached.expires > Date.now()) return cached.weather;
  try {
    const response = await fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=53.546&lon=-113.494", {
      headers: { "User-Agent": "BespokeWebDesign/1.0 https://bespokewebdesign.lovable.app" },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) { console.error("Edmonton weather:", response.status, await response.text()); return null; }
    const forecast = forecastSchema.parse(await response.json());
    const now = Date.now();
    const nearest = forecast.properties.timeseries.reduce<typeof forecast.properties.timeseries[number] | undefined>((best, row) => !best || Math.abs(Date.parse(row.time) - now) < Math.abs(Date.parse(best.time) - now) ? row : best, undefined);
    if (!nearest || Math.abs(Date.parse(nearest.time) - now) > 2 * 60 * 60 * 1000) return null;
    const weather = { temperature: nearest.data.instant.details.air_temperature, symbol: nearest.data.next_1_hours?.summary.symbol_code ?? nearest.data.next_6_hours?.summary.symbol_code ?? "cloudy", forecastAt: nearest.time };
    cached = { weather, expires: now + 10 * 60 * 1000 };
    return weather;
  } catch (error) { console.error("Edmonton weather unavailable", error); return null; }
});