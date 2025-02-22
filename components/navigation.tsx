"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";
import { SiteSearch } from "@/components/site-search";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会社概要" },
  { href: "/services", label: "事業内容" },
  { href: "/works", label: "実績紹介" },
  { href: "/equipment", label: "レンタル機材" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Search className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-32">
                <div className="mt-8 px-4">
                  <SiteSearch />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Search className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-32">
                <div className="mt-8 px-4">
                  <SiteSearch />
                </div>
              </SheetContent>
            </Sheet>
            <Button
              variant="ghost"
              size="icon"
              className="flex h-9 w-9 items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-4 py-5 pb-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-2 text-base font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}