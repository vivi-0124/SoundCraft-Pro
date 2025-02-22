"use client";

import { useRef, useState, useCallback } from "react";
import { Search, X, Mic2, Sliders, Speaker, Radio, Music, Headphones } from "lucide-react";
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

interface EquipmentItem {
  title: string;
  description: string;
  category: string;
  href: string;
}

// 機材の検索候補
const equipments: EquipmentItem[] = [
  // マイク・音声機器
  { 
    title: "Shure SM58",
    description: "世界標準のダイナミックマイク",
    category: "マイク・音声機器",
    href: "/equipment#mic"
  },
  { 
    title: "Neumann U87",
    description: "スタジオ定番のコンデンサーマイク",
    category: "マイク・音声機器",
    href: "/equipment#mic"
  },
  // ミキサー・制御機器
  { 
    title: "YAMAHA CL5",
    description: "プロフェッショナルデジタルミキサー",
    category: "ミキサー・制御機器",
    href: "/equipment#mixer"
  },
  { 
    title: "DiGiCo SD7",
    description: "ハイエンドデジタルミキシングコンソール",
    category: "ミキサー・制御機器",
    href: "/equipment#mixer"
  },
  // スピーカー・音響機器
  { 
    title: "d&b audiotechnik Y-Series",
    description: "ラインアレイスピーカーシステム",
    category: "スピーカー・音響機器",
    href: "/equipment#speaker"
  },
  { 
    title: "Martin Audio MLA",
    description: "マルチセルラーラウドスピーカーアレイ",
    category: "スピーカー・音響機器",
    href: "/equipment#speaker"
  },
  // レコーディング機器
  { 
    title: "Pro Tools HDX",
    description: "プロフェッショナルレコーディングシステム",
    category: "レコーディング機器",
    href: "/equipment#recording"
  },
  { 
    title: "Universal Audio Apollo",
    description: "高品質オーディオインターフェース",
    category: "レコーディング機器",
    href: "/equipment#recording"
  },
  // DJ・演出機器
  { 
    title: "Pioneer DJ CDJ-3000",
    description: "プロフェッショナルDJプレーヤー",
    category: "DJ・演出機器",
    href: "/equipment#dj"
  },
  { 
    title: "DENON DJ SC6000",
    description: "最新鋭のメディアプレーヤー",
    category: "DJ・演出機器",
    href: "/equipment#dj"
  }
];

interface EquipmentSearchProps {
  onFilterChange?: (value: string) => void;
}

export function EquipmentSearch({ onFilterChange }: EquipmentSearchProps) {
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
      onFilterChange?.(""); // フィルターをリセット
    }
  }, [onFilterChange]);

  const handleValueChange = useCallback((newValue: string) => {
    setValue(newValue);
    onFilterChange?.(newValue); // フィルター値を更新
  }, [onFilterChange]);

  const getIcon = useCallback((category: string) => {
    switch (category) {
      case "マイク・音声機器":
        return <Mic2 className="mr-2 h-4 w-4" />;
      case "ミキサー・制御機器":
        return <Sliders className="mr-2 h-4 w-4" />;
      case "スピーカー・音響機器":
        return <Speaker className="mr-2 h-4 w-4" />;
      case "レコーディング機器":
        return <Radio className="mr-2 h-4 w-4" />;
      case "DJ・演出機器":
        return <Music className="mr-2 h-4 w-4" />;
      default:
        return <Headphones className="mr-2 h-4 w-4" />;
    }
  }, []);

  const handleSelect = useCallback((href: string, title: string) => {
    setValue(title);
    setOpen(false);
    window.location.href = href;
  }, []);

  // カテゴリーでグループ化
  const groupedEquipments = equipments.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, EquipmentItem[]>);

  return (
    <div className="search-container max-w-[600px] mx-auto">
      <div className="relative flex items-center">
        <div className="relative w-full">
          <Button
            variant="outline"
            role="combobox"
            onClick={() => setOpen(true)}
            className="w-full justify-between h-12 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
              <span className="text-muted-foreground">機材を検索...</span>
            </div>
          </Button>
        </div>
      </div>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[600px] p-0 [&>button]:hidden top-0 translate-y-0 rounded-t-none border-t-0">
          <Command>
            <div className="flex items-center border-b p-4">
              <div className="flex-1 flex items-center">
                <CommandInput
                  ref={inputRef}
                  placeholder="機材を検索..."
                  value={value}
                  onValueChange={handleValueChange}
                  className="flex h-9 w-full rounded-md bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
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
              {Object.entries(groupedEquipments).map(([category, items]) => (
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
    </div>
  );
} 