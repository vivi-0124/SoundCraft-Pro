"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CompanyPage() {
  const companyInfo = [
    {
      label: "会社名",
      value: "SoundCraft Pro株式会社"
    },
    {
      label: "設立",
      value: "2010年4月"
    },
    {
      label: "資本金",
      value: "1億円"
    },
    {
      label: "代表取締役",
      value: "山田 太郎"
    },
    {
      label: "従業員数",
      value: "50名（2024年1月現在）"
    },
    {
      label: "事業内容",
      items: [
        "音響機材のレンタル事業",
        "音響システムの設計・施工",
        "音響機器の販売",
        "イベント・コンサートの音響サポート",
        "技術コンサルティング"
      ]
    },
    {
      label: "所在地",
      value: "〒100-0001 東京都千代田区丸の内1-1-1",
      items: [
        "TEL: 03-1234-5678",
        "FAX: 03-1234-5679",
        "Email: info@soundcraftpro.jp"
      ]
    },
    {
      label: "取引銀行",
      items: [
        "○○銀行 本店",
        "△△銀行 丸の内支店",
        "□□信託銀行 東京支店"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-8">
            <Building2 className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold">会社概要</h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-[300px] rounded-lg overflow-hidden mb-12"
          >
            <Image
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3"
              alt="会社外観"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <p className="text-white text-2xl font-bold">
                Sound Quality, Professional Service
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {companyInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-lg"
              >
                <h2 className="text-xl font-semibold mb-3">{info.label}</h2>
                {info.value && (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
                {info.items && (
                  <ul className="list-disc list-inside space-y-2">
                    {info.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-muted-foreground mb-6">
              当社へのお問い合わせは、下記よりご連絡ください。
            </p>
            <Button asChild size="lg">
              <a href="/contact">
                お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 