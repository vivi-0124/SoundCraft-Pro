import * as React from 'react';
import { cn } from '@/lib/utils';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import { Logo } from '@/components/Logo';

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
          <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 space-y-4">
            <Logo variant="white" />
            <p className="text-slate-400">
              プロフェッショナルな音響ソリューションを提供し、<br />
              あらゆる音響ニーズにお応えします。
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/soundcraftpro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://instagram.com/soundcraftpro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://youtube.com/soundcraftpro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white"
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* メインメニュー */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">メニュー</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-400 hover:text-white">ホーム</a>
              </li>
              <li>
                <a href="/about" className="text-slate-400 hover:text-white">会社概要</a>
              </li>
              <li>
                <a href="/services" className="text-slate-400 hover:text-white">事業内容</a>
              </li>
              <li>
                <a href="/equipment" className="text-slate-400 hover:text-white">レンタル機材</a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-white">お問い合わせ</a>
              </li>
            </ul>
          </div>

          {/* サポート */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">サポート</h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="text-slate-400 hover:text-white">よくある質問</a>
              </li>
              <li>
                <a href="/guide" className="text-slate-400 hover:text-white">ご利用ガイド</a>
              </li>
              <li>
                <a href="/maintenance" className="text-slate-400 hover:text-white">メンテナンス</a>
              </li>
            </ul>
          </div>

          {/* 会社情報 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">会社情報</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-slate-400 hover:text-white">プライバシーポリシー</a>
              </li>
              <li>
                <a href="/terms" className="text-slate-400 hover:text-white">利用規約</a>
              </li>
              <li>
                <a href="/company" className="text-slate-400 hover:text-white">会社概要</a>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2024 SoundCraft Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 