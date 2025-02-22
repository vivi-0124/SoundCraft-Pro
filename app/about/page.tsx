"use client";

import { motion } from "framer-motion";
import { Building2, Trophy, Users2, Target } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">会社概要</h1>
            <p className="text-lg text-muted-foreground mb-12">
              SoundCraft Proは、20年以上の実績を持つ音響機器のプロフェッショナル集団です。
              最新の技術と豊富な経験を活かし、お客様のニーズに最適なソリューションを提供します。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">企業情報</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium">社名</dt>
                  <dd className="text-muted-foreground">株式会社 SoundCraft Pro</dd>
                </div>
                <div>
                  <dt className="font-medium">設立</dt>
                  <dd className="text-muted-foreground">2003年4月</dd>
                </div>
                <div>
                  <dt className="font-medium">資本金</dt>
                  <dd className="text-muted-foreground">5,000万円</dd>
                </div>
                <div>
                  <dt className="font-medium">従業員数</dt>
                  <dd className="text-muted-foreground">120名</dd>
                </div>
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">所在地</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium">本社</dt>
                  <dd className="text-muted-foreground">
                    〒100-0001<br />
                    東京都千代田区丸の内1-1-1<br />
                    丸の内センタービル15F
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">営業所</dt>
                  <dd className="text-muted-foreground">
                    大阪、名古屋、福岡、札幌
                  </dd>
                </div>
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">企業理念</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "信頼性",
                description: "確かな技術力と実績で、安心できるサービスを提供",
              },
              {
                icon: Trophy,
                title: "品質",
                description: "最高品質の機材と専門的なノウハウを提供",
              },
              {
                icon: Users2,
                title: "チームワーク",
                description: "専門スタッフの連携で、完璧なサポートを実現",
              },
              {
                icon: Target,
                title: "革新",
                description: "最新技術の導入で、常に進化し続けるサービス",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <value.icon className="mx-auto h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}