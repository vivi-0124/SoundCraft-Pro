'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export function Footer({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn(
        'w-full border-t bg-slate-950 text-slate-50',
        'py-16 px-4 md:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl space-y-16">
        {/* メインフッターコンテンツ */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ブランドセクション */}
          <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 footer-brand-section">
            <Logo variant="white" className="logo" />
            <p className="text-slate-400">
              プロフェッショナルな音響ソリューションを提供し、<br className="hidden md:inline" />
              あらゆる音響ニーズにお応えします。
            </p>
            <div className="footer-social-icons">
              <a 
                href="https://twitter.com/soundcraftpro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://instagram.com/soundcraftpro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://youtube.com/soundcraftpro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* デスクトップメニュー */}
          <div className="hidden md:block space-y-4">
            <h3 className="text-lg font-semibold">メニュー</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white">ホーム</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white">会社概要</Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white">事業内容</Link>
              </li>
              <li>
                <Link href="/equipment" className="text-slate-400 hover:text-white">レンタル機材</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white">お問い合わせ</Link>
              </li>
            </ul>
          </div>

          {/* デスクトップサポート */}
          <div className="hidden md:block space-y-4">
            <h3 className="text-lg font-semibold">サポート</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white">よくある質問</Link>
              </li>
              <li>
                <Link href="/guide" className="text-slate-400 hover:text-white">ご利用ガイド</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-slate-400 hover:text-white">メンテナンス</Link>
              </li>
            </ul>
          </div>

          {/* デスクトップ会社情報 */}
          <div className="hidden md:block space-y-4">
            <h3 className="text-lg font-semibold">会社情報</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white">プライバシーポリシー</Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white">利用規約</Link>
              </li>
              <li>
                <Link href="/company" className="text-slate-400 hover:text-white">会社概要</Link>
              </li>
            </ul>
          </div>

          {/* モバイルアコーディオン */}
          <div className="col-span-2 md:hidden">
            <Accordion type="single" collapsible className="mobile-footer-accordion w-full space-y-2">
              <AccordionItem value="menu" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">メニュー</AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <ul>
                    <li><Link href="/" className="text-white/70 hover:text-white">ホーム</Link></li>
                    <li><Link href="/services" className="text-white/70 hover:text-white">サービス</Link></li>
                    <li><Link href="/works" className="text-white/70 hover:text-white">実績</Link></li>
                    <li><Link href="/equipment" className="text-white/70 hover:text-white">取扱機材</Link></li>
                    <li><Link href="/news" className="text-white/70 hover:text-white">ニュース</Link></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">サポート</AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <ul>
                    <li><Link href="/contact" className="text-white/70 hover:text-white">お問い合わせ</Link></li>
                    <li><Link href="/faq" className="text-white/70 hover:text-white">よくある質問</Link></li>
                    <li><Link href="/request" className="text-white/70 hover:text-white">資料請求</Link></li>
                    <li><Link href="/maintenance" className="text-white/70 hover:text-white">メンテナンス</Link></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="company" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">会社情報</AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <ul>
                    <li><Link href="/about" className="text-white/70 hover:text-white">会社概要</Link></li>
                    <li><Link href="/philosophy" className="text-white/70 hover:text-white">企業理念</Link></li>
                    <li><Link href="/history" className="text-white/70 hover:text-white">沿革</Link></li>
                    <li><Link href="/access" className="text-white/70 hover:text-white">アクセス</Link></li>
                    <li><Link href="/careers" className="text-white/70 hover:text-white">採用情報</Link></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400 footer-copyright">
              © 2024 SoundCraft Pro. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 