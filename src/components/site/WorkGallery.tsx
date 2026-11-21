import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export type GalleryItem = { src: string; alt: string; caption?: string };

/** Modern click-to-enlarge gallery used by the Our Work tabs. */
export function WorkGallery({ items, variant = "photo" }: { items: GalleryItem[]; variant?: "photo" | "logo" }) {
  const [open, setOpen] = useState<GalleryItem | null>(null);
  const logo = variant === "logo";
  return <>
    <ul className={`grid gap-5 ${logo ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {items.map(item => <li key={item.src}>
        <button type="button" onClick={() => setOpen(item)} aria-label={`Enlarge: ${item.alt}`}
          className="group relative block w-full overflow-hidden rounded-xl border bg-card text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <div className={`flex items-center justify-center overflow-hidden ${logo ? "aspect-square bg-background p-6" : "aspect-[4/5] bg-muted"}`}>
            <img src={item.src} alt={item.alt} loading="lazy" className={`h-full w-full transition duration-500 group-hover:scale-105 ${"object-contain"}`} />
          </div>
          {item.caption && <p className="border-t px-4 py-3 text-sm font-semibold text-navy">{item.caption}</p>}
        </button>
      </li>)}
    </ul>
    <Dialog open={!!open} onOpenChange={v => !v && setOpen(null)}>
      <DialogContent className="max-w-4xl p-3">
        <DialogTitle className="sr-only">{open?.alt}</DialogTitle>
        {open && <img src={open.src} alt={open.alt} className="max-h-[80vh] w-full rounded-lg object-contain" />}
        {open?.caption && <p className="px-2 pb-1 text-center font-semibold text-navy">{open.caption}</p>}
      </DialogContent>
    </Dialog>
  </>;
}
