"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// 検索候補のカテゴリー
const suggestions = {
  "サービス": [
    "音響システム設計",
    "機材レンタル",
    "技術サポート",
    "メンテナンス",
  ],
  "機材": [
    "マイク・音声機器",
    "ミキサー・制御機器",
    "スピーカー・音響機器",
    "レコーディング機器",
    "スタジオ設備",
    "DJ・演出機器"
  ],
  "会社情報": [
    "会社概要",
    "お問い合わせ",
    "採用情報",
    "アクセス"
  ]
};

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSelect = (currentValue: string) => {
    setValue(currentValue);
    setOpen(false);

    // カテゴリーに基づいてルーティング
    switch (currentValue) {
      case "音響システム設計":
      case "機材レンタル":
      case "技術サポート":
        router.push("/services");
        break;
      case "マイク・音声機器":
      case "ミキサー・制御機器":
      case "スピーカー・音響機器":
      case "レコーディング機器":
      case "スタジオ設備":
      case "DJ・演出機器":
        router.push("/equipment");
        break;
      case "会社概要":
        router.push("/company");
        break;
      case "お問い合わせ":
        router.push("/contact");
        break;
      default:
        // デフォルトの検索処理
        break;
    }
  };

  return (
    <div className="relative w-full max-w-sm">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="サイト内を検索..."
              className="pl-9 h-9"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onClick={() => setOpen(true)}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0" align="start">
          <Command>
            <CommandInput placeholder="検索キーワードを入力..." />
            <CommandList>
              <CommandEmpty>見つかりませんでした。</CommandEmpty>
              {Object.entries(suggestions).map(([category, items]) => (
                <CommandGroup key={category} heading={category}>
                  {items.map((item) => (
                    <CommandItem
                      key={item}
                      onSelect={() => handleSelect(item)}
                    >
                      {item}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
} 