"use client";

import { motion } from "framer-motion";
import { Music, Radio, Mic2, Speaker, HeadphonesIcon, Settings } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Music,
    title: "音響システム設計",
    description: "会場の特性を考慮した最適な音響システムの設計と構築",
  },
  {
    icon: Radio,
    title: "機材レンタル",
    description: "高品質な音響機器の短期・長期レンタルサービス",
  },
  {
    icon: Mic2,
    title: "イベント運営",
    description: "コンサート、展示会などの音響オペレーション",
  },
  {
    icon: Speaker,
    title: "設備導入",
    description: "商業施設、ホールへの音響設備の導入とメンテナンス",
  },
  {
    icon: HeadphonesIcon,
    title: "技術サポート",
    description: "24時間体制での技術サポートと緊急対応",
  },
  {
    icon: Settings,
    title: "コンサルティング",
    description: "音響に関する専門的なアドバイスと解決策の提案",
  },
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6">事業内容</h1>
            <p className="text-lg text-muted-foreground">
              プロフェッショナルな音響ソリューションで、
              あらゆるイベントや施設の音響ニーズにお応えします
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-lg"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">導入実績</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Concert Hall"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">東京国際フォーラム</h3>
                <p className="text-muted-foreground">
                  最新の音響システムを導入し、様々なイベントに対応可能な
                  多目的ホールとして生まれ変わりました。
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Stadium"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">大阪城ホール</h3>
                <p className="text-muted-foreground">
                  大規模コンサート対応の音響システムを設計・導入。
                  クリアな音質と均一な音圧分布を実現しました。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}