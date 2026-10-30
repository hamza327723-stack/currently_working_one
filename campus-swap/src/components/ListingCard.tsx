import { BookOpen, Laptop, Sofa, Wrench, MapPin } from "lucide-react";
import type { Listing } from "@/lib/listings";
import { Badge } from "@/components/ui/badge";

const meta = {
  Textbooks: { icon: BookOpen, tile: "bg-tile-1" },
  Electronics: { icon: Laptop, tile: "bg-tile-3" },
  Furniture: { icon: Sofa, tile: "bg-tile-2" },
  Services: { icon: Wrench, tile: "bg-tile-4" },
};

export function ListingCard({ item }: { item: Listing }) {
  const { icon: Icon, tile } = meta[item.category];
  return (
    <article className="group overflow-hidden rounded-xl border bg-card transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className={`grid h-36 place-items-center ${tile}`}>
        <Icon className="h-12 w-12 text-foreground/70 transition group-hover:scale-110" />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{item.category}</Badge>
          <span className="font-display text-lg font-bold text-primary">${item.price}</span>
        </div>
        <h3 className="line-clamp-2 font-semibold leading-snug">{item.title}</h3>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{item.campus}</span>
          <span>{item.condition}</span>
        </div>
        <p className="text-xs text-muted-foreground">
          {item.seller} · {item.postedDaysAgo === 0 ? "today" : `${item.postedDaysAgo}d ago`}
        </p>
      </div>
    </article>
  );
}
