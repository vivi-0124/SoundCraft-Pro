"use client";

import { useState } from "react";
import { Search } from "lucide-react";
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

interface EquipmentSearchProps {
  onFilterChange: (value: string) => void;
}

// 予測入力候補のカテゴリー
const suggestions = {
  "機材カテゴリー": [
    "マイク・音声機器",
    "ミキサー・制御機器",
    "スピーカー・音響機器",
    "レコーディング機器",
    "スタジオ設備",
    "DJ・演出機器"
  ],
  "メーカー": [
    "Martin Audio",
    "d&b audiotechnik",
    "ROBE",
    "YAMAHA",
    "DiGiCo",
    "Avolites",
    "SHURE"
  ]
};

export function EquipmentSearch({ onFilterChange }: EquipmentSearchProps) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (value: string) => {
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="機材を検索..."
              className="pl-10"
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
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
                      onSelect={(value) => {
                        handleFilterChange(value);
                        setOpen(false);
                      }}
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