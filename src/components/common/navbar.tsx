"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { ThemeToggle } from "./theme-toggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const navLinks = [
  {
    label: "Questions",
    href: "/questions",
  },
  {
    label: "Ask",
    href: "#",
    disabled: true,
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Q&A
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) =>
              link.disabled ? (
                <span
                  key={link.label}
                  className="cursor-not-allowed text-sm text-muted-foreground"
                >
                  {link.label}
                  <span className="ml-1 text-xs">(Soon)</span>
                </span>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <ThemeToggle />

          <Button>
            <Link href="/login">Login</Link>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" />}
            className="inline-flex md:hidden"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>

          <SheetContent side="right">
            <div className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) =>
                link.disabled ? (
                  <div key={link.label}>
                    <p className="font-medium">{link.label}</p>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ),
              )}

              <div className="flex items-center justify-between border-t pt-4">
                <span className="text-sm">Theme</span>
                <ThemeToggle />
              </div>

              <Button className="mt-2">
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
