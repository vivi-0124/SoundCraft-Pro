"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
  const faqs = [
    {
      question: "レンタル機材の予約はどのように行いますか？",
      answer: "お電話またはお問い合わせフォームからご予約いただけます。機材の在庫状況を確認の上、ご希望の日程で予約を承ります。"
    },
    {
      question: "キャンセル料はかかりますか？",
      answer: "ご利用日の7日前までのキャンセルは無料です。それ以降のキャンセルについては、規定のキャンセル料が発生いたします。"
    },
    {
      question: "機材の故障や不具合が発生した場合はどうすればよいですか？",
      answer: "24時間体制のサポートラインをご用意しております。技術スタッフが迅速に対応させていただきます。"
    },
    {
      question: "長期レンタルは可能ですか？",
      answer: "はい、可能です。長期レンタルの場合は特別料金をご用意しております。詳細はお問い合わせください。"
    },
    {
      question: "機材の配送・設置は行っていますか？",
      answer: "はい、配送・設置サービスを承っております。専門スタッフが適切に設置いたします。"
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
          <h1 className="text-4xl font-bold mb-8 text-center">よくある質問</h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
              その他のご質問がございましたら、お気軽にお問い合わせください。
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