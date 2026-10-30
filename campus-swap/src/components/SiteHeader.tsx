import { Link } from "@tanstack/react-router";
import { Moon, Sun, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  const linkCls = "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground";
  return (
    <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          CampusSwap
        </Link>
        <nav className="ml-auto flex items-center gap-1">
          <Link to="/" className={linkCls} activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>Browse</Link>
          <Link to="/dashboard" className={linkCls} activeProps={{ className: "text-foreground" }}>Dashboard</Link>
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle dark mode">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </div>
    </header>
  );
}
