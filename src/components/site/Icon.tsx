import {
  Palette, Monitor, MapPin, Share2, Search, Wrench, Droplet, Zap, HardHat, Hammer, Truck, Store,
} from "lucide-react";
import type { IconName } from "@/content/site";

const MAP = {
  palette: Palette, monitor: Monitor, map: MapPin, share: Share2, search: Search, wrench: Wrench,
  droplet: Droplet, zap: Zap, hardhat: HardHat, hammer: Hammer, truck: Truck, store: Store,
};

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const C = MAP[name];
  return <C className={className} aria-hidden="true" />;
}

export function IconBadge({ name }: { name: IconName }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-accent">
      <Icon name={name} />
    </span>
  );
}
