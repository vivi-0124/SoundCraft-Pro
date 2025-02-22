"use client";

import { useRef, useState, useCallback } from "react";
import { Search, Building2, Headphones, Wrench, X } from "lucide-react";
import Link from "next/link";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SearchItem {
  title: string;
  description: string;
  href: string;
}

interface SearchSuggestions {
  [key: string]: SearchItem[];
}

// 検索候補のカテゴリー
const suggestions: SearchSuggestions = {
  "サービス": [
    { title: "音響システム設計", description: "最適な音響空間を実現するプロフェッショナルな設計サービス", href: "/services" },
    { title: "機材レンタル", description: "高品質な音響機材を必要な期間だけレンタル", href: "/services" },
    { title: "技術サポート", description: "24時間体制での専門的な技術サポート", href: "/services" },
    { title: "メンテナンス", description: "定期的な点検と迅速な修理対応", href: "/services" },
  ],
  "機材": [
    { title: "マイク・音声機器", description: "プロフェッショナルな音声収録・処理機器", href: "/equipment" },
    { title: "ミキサー・制御機器", description: "高度な音声制御を可能にする機器", href: "/equipment" },
    { title: "スピーカー・音響機器", description: "高品質な音響再生システム", href: "/equipment" },
    { title: "レコーディング機器", description: "プロ仕様のレコーディング機材", href: "/equipment" },
    { title: "スタジオ設備", description: "プロフェッショナルなスタジオ機材", href: "/equipment" },
    { title: "DJ・演出機器", description: "イベント演出用の専門機材", href: "/equipment" }
  ],
  "会社情報": [
    { title: "会社概要", description: "SoundCraft Proの企業情報", href: "/company" },
    { title: "お問い合わせ", description: "ご質問・ご相談はこちら", href: "/contact" },
    { title: "採用情報", description: "音響のプロフェッショナルを目指す方へ", href: "/careers" },
    { title: "アクセス", description: "所在地・アクセス方法", href: "/access" }
  ]
};

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpenChange = useCallback((newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setValue("");
    }
  }, []);

  const getIcon = useCallback((category: string) => {
    switch (category) {
      case "サービス":
        return <Wrench className="mr-2 h-4 w-4" />;
      case "機材":
        return <Headphones className="mr-2 h-4 w-4" />;
      case "会社情報":
        return <Building2 className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  }, []);

  const handleSelect = useCallback((href: string, title: string) => {
    setValue(title);
    setOpen(false);
    window.location.href = href;
  }, []);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
        >
          <Search className="h-5 w-5" />
          <span className="sr-only">検索を開く</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 [&>button]:hidden top-0 translate-y-0 rounded-t-none border-t-0">
        <Command>
          <div className="flex items-center border-b p-4">
            <CommandInput
              ref={inputRef}
              placeholder="検索キーワードを入力..."
              value={value}
              onValueChange={setValue}
              className="flex h-9 w-full rounded-md bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 ml-2 flex-shrink-0"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">閉じる</span>
            </Button>
          </div>
          <CommandList>
            <CommandEmpty>
              <div className="flex flex-col items-center justify-center py-6 text-sm text-muted-foreground">
                <Search className="h-8 w-8 mb-2 opacity-50" />
                <p>検索結果が見つかりませんでした。</p>
              </div>
            </CommandEmpty>
            {Object.entries(suggestions).map(([category, items]) => (
              <CommandGroup key={category} heading={category}>
                {items
                  .filter(item =>
                    value === "" ||
                    item.title.toLowerCase().includes(value.toLowerCase()) ||
                    item.description.toLowerCase().includes(value.toLowerCase())
                  )
                  .map((item) => (
                    <CommandItem
                      key={item.title}
                      onSelect={() => handleSelect(item.href, item.title)}
                      className="flex items-center px-4 py-2"
                    >
                      {getIcon(category)}
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
} 