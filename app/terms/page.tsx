"use client";

import { motion } from "framer-motion";
import { ArrowRight, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  const sections = [
    {
      title: "第1条（適用）",
      content: "本規約は、当社が提供するすべてのサービスの利用に関し適用されます。本サービスをご利用いただくお客様は、本規約に同意したものとみなします。"
    },
    {
      title: "第2条（サービス内容）",
      content: "当社は以下のサービスを提供します：",
      items: [
        "音響機材のレンタル",
        "音響システムの設計・施工",
        "技術サポート",
        "メンテナンスサービス",
        "その他、当社が定めるサービス"
      ]
    },
    {
      title: "第3条（利用料金）",
      content: "本サービスの利用料金は、当社が別途定める料金表に従うものとします。料金の支払い方法および支払い期限については、個別の契約において定めるものとします。"
    },
    {
      title: "第4条（禁止事項）",
      content: "お客様は本サービスの利用にあたり、以下の行為を行ってはいけません：",
      items: [
        "当社の許可なく機材を第三者に転貸すること",
        "機材の改造または分解",
        "契約時の用途以外での使用",
        "法令または公序良俗に反する使用",
        "当社または第三者の権利を侵害する行為"
      ]
    },
    {
      title: "第5条（保証）",
      content: "当社は、提供する機材が正常に機能することを保証します。ただし、以下の場合は保証の対象外とします：",
      items: [
        "お客様の故意または過失による損傷",
        "不適切な使用による故障",
        "天災等の不可抗力による損害",
        "通常の使用による劣化"
      ]
    },
    {
      title: "第6条（免責事項）",
      content: "当社は、お客様が本サービスを利用することにより生じた損害について、当社の故意または重大な過失による場合を除き、一切の責任を負いません。"
    },
    {
      title: "第7条（規約の変更）",
      content: "当社は、必要と判断した場合には、お客様に通知することなく本規約を変更することができるものとします。変更後の規約は、当社ウェブサイトに掲載した時点で効力を生じるものとします。"
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
            <ScrollText className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold">利用規約</h1>
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
                  <ul className="list-decimal list-inside space-y-2">
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
              利用規約に関するお問い合わせは、下記よりご連絡ください。
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