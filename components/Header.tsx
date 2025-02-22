'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
      {...props}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/services"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            サービス
          </Link>
          <Link
            href="/works"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            実績
          </Link>
          <Link
            href="/equipment"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            機材
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            会社概要
          </Link>
          <Link
            href="/news"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            ニュース
          </Link>
          <Button asChild>
            <Link href="/contact">お問い合わせ</Link>
          </Button>
        </nav>

        {/* モバイルメニュー */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">メニューを開く</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/services"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                サービス
              </Link>
              <Link
                href="/works"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                実績
              </Link>
              <Link
                href="/equipment"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                機材
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                会社概要
              </Link>
              <Link
                href="/news"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                ニュース
              </Link>
              <Button asChild className="mt-4">
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
} 