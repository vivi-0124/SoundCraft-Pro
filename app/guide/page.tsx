"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GuidePage() {
  const guides = [
    {
      title: "ご利用の流れ",
      steps: [
        "お問い合わせフォームまたはお電話にて機材の空き状況を確認",
        "ご希望の機材と日程をご予約",
        "レンタル料金のお支払い",
        "機材のお受け取りまたは配送",
        "ご利用後の返却"
      ]
    },
    {
      title: "必要書類",
      items: [
        "身分証明書（運転免許証、パスポートなど）",
        "会社の場合：会社の登記簿謄本",
        "初回利用の場合：利用申込書の記入"
      ]
    },
    {
      title: "お支払い方法",
      items: [
        "クレジットカード（VISA, Mastercard, JCB, American Express）",
        "銀行振込（前払い）",
        "現金（店頭支払いのみ）"
      ]
    },
    {
      title: "キャンセルポリシー",
      items: [
        "7日前まで：無料",
        "6日前〜3日前：レンタル料金の30%",
        "2日前〜前日：レンタル料金の50%",
        "当日：レンタル料金の100%"
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
          <h1 className="text-4xl font-bold mb-8 text-center">ご利用ガイド</h1>
          <div className="space-y-12">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-6">{guide.title}</h2>
                <ul className="space-y-4">
                  {(guide.steps || guide.items).map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
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
              ご不明な点がございましたら、お気軽にお問い合わせください。
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