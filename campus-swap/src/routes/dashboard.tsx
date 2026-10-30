import { createFileRoute } from "@tanstack/react-router";
import { Eye, MessageCircle, Package, Wallet } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { listings, myListings } from "@/lib/listings";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — CampusSwap" },
      { name: "description", content: "Track your listings, views, messages and earnings on CampusSwap." },
      { property: "og:title", content: "Dashboard — CampusSwap" },
      { property: "og:description", content: "Track your student marketplace listings." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const rows = myListings.map((m) => ({ ...m, item: listings.find((l) => l.id === m.id)! }));
  const earned = rows.filter((r) => r.status === "Sold").reduce((s, r) => s + r.item.price, 0);
  const stats = [
    { label: "Active listings", value: rows.filter((r) => r.status === "Active").length, icon: Package },
    { label: "Total views", value: rows.reduce((s, r) => s + r.views, 0), icon: Eye },
    { label: "Messages", value: rows.reduce((s, r) => s + r.messages, 0), icon: MessageCircle },
    { label: "Earned", value: `$${earned}`, icon: Wallet },
  ];
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Welcome back 👋</h1>
        <p className="mt-1 text-muted-foreground">Here's how your listings are doing.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-xl border bg-card p-5">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                {label}
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <p className="mt-2 font-display text-3xl font-bold">{value}</p>
            </div>
          ))}
        </div>
        <section className="mt-10 overflow-hidden rounded-xl border bg-card">
          <h2 className="border-b px-5 py-4 text-lg font-semibold">My listings</h2>
          <table className="w-full text-sm">
            <thead className="bg-muted text-left text-muted-foreground">
              <tr>
                <th className="px-5 py-3 font-medium">Item</th>
                <th className="px-5 py-3 font-medium">Price</th>
                <th className="hidden px-5 py-3 font-medium sm:table-cell">Views</th>
                <th className="hidden px-5 py-3 font-medium sm:table-cell">Messages</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="px-5 py-3 font-medium">{r.item.title}</td>
                  <td className="px-5 py-3">${r.item.price}</td>
                  <td className="hidden px-5 py-3 sm:table-cell">{r.views}</td>
                  <td className="hidden px-5 py-3 sm:table-cell">{r.messages}</td>
                  <td className="px-5 py-3">
                    <Badge variant={r.status === "Active" ? "default" : "secondary"}>{r.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
