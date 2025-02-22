"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  const sections = [
    {
      title: "個人情報の取り扱いについて",
      content: "当社は、お客様の個人情報を適切に取り扱うことが重要な責務であると認識し、以下の方針に基づき個人情報の保護に努めます。"
    },
    {
      title: "収集する個人情報",
      content: "当社が収集する個人情報は以下の通りです：",
      items: [
        "氏名",
        "メールアドレス",
        "電話番号",
        "住所",
        "会社名（法人の場合）",
        "その他、サービス提供に必要な情報"
      ]
    },
    {
      title: "個人情報の利用目的",
      content: "収集した個人情報は、以下の目的で利用いたします：",
      items: [
        "サービスの提供および契約の履行",
        "お問い合わせへの対応",
        "新製品・サービスに関する情報のご提供",
        "アフターサービスの提供",
        "サービス品質向上のための調査・分析"
      ]
    },
    {
      title: "個人情報の管理",
      content: "当社は、お客様の個人情報を適切に管理し、以下を徹底します：",
      items: [
        "個人情報への不正アクセス防止のための措置",
        "個人情報の紛失、破壊、改ざん、漏洩の防止",
        "従業員への個人情報保護教育の実施",
        "個人情報保護マネジメントシステムの継続的な改善"
      ]
    },
    {
      title: "個人情報の第三者提供",
      content: "当社は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません：",
      items: [
        "お客様の同意がある場合",
        "法令に基づく場合",
        "人の生命、身体または財産の保護のために必要な場合",
        "公衆衛生の向上または児童の健全な育成の推進のために必要な場合"
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
            <Shield className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold">プライバシーポリシー</h1>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="text-muted-foreground mb-4">{section.content}</p>
                {section.items && (
                  <ul className="list-disc list-inside space-y-2">
                    {section.items.map((item, itemIndex) => (
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
              プライバシーポリシーに関するお問い合わせは、下記よりご連絡ください。
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