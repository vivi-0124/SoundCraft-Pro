"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useState, Suspense } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EquipmentSearch } from "@/components/equipment-search";
import { Equipment, equipments } from "@/lib/equipment";

export default function EquipmentPage() {
  const [filter, setFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState<Equipment | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // ローディングシミュレーション
  useState(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  });

  const filteredEquipments = equipments.filter(item =>
    filter === "" ||
    item.label.toLowerCase().includes(filter.toLowerCase()) ||
    item.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">機材</Badge>
          <h1 className="text-4xl font-bold mb-4">取扱機材</h1>
          <p className="text-lg text-muted-foreground mb-8">
            世界最高峰の音響機材を取り揃えています
          </p>

          <EquipmentSearch onFilterChange={setFilter} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={<EquipmentSkeleton />}>
            {filteredEquipments.map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="relative h-[300px] rounded-lg overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    {isLoading ? (
                      <Skeleton className="h-full w-full" />
                    ) : (
                      <>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <p className="text-lg font-semibold mb-2">{item.label}</p>
                            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                              詳しく見る
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>{item.label}</DialogTitle>
                    <DialogDescription>{item.description}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">主な特徴</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>高品質な音響性能</li>
                        <li>プロフェッショナル仕様</li>
                        <li>信頼性の高い動作</li>
                        <li>豊富な機能</li>
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function EquipmentSkeleton() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="relative h-[300px] rounded-lg overflow-hidden">
          <Skeleton className="h-full w-full" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      ))}
    </>
  );
}