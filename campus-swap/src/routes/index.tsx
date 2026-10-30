import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SiteHeader } from "@/components/SiteHeader";
import { ListingCard } from "@/components/ListingCard";
import { categories, listings, type Category } from "@/lib/listings";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CampusSwap — Student Marketplace" },
      { name: "description", content: "Buy and sell textbooks, electronics, furniture and services with students on your campus." },
      { property: "og:title", content: "CampusSwap — Student Marketplace" },
      { property: "og:description", content: "Buy and sell with students on your campus." },
    ],
  }),
  component: Index,
});

function Index() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category | "All">("All");
  const results = useMemo(
    () => listings.filter((l) => (cat === "All" || l.category === cat) && l.title.toLowerCase().includes(q.toLowerCase())),
    [q, cat],
  );
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <section className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Your campus, <span className="text-primary">for sale.</span>
          </h1>
          <p className="mt-2 text-muted-foreground">Textbooks, gadgets, dorm gear and skills — from students nearby.</p>
        </section>
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative md:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search listings…" className="pl-9" />
          </div>
          <div className="flex flex-wrap gap-2">
            {(["All", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${cat === c ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        {results.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((l) => <ListingCard key={l.id} item={l} />)}
          </div>
        ) : (
          <p className="py-20 text-center text-muted-foreground">No listings match your search.</p>
        )}
      </main>
    </div>
  );
}
