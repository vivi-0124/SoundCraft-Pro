"use client";

import { motion } from "framer-motion";
import { Building2, Star, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

// 実績データ
const events = [
  {
    title: "サマーロックフェスティバル2023",
    date: "2023年8月",
    venue: "○○スタジアム",
    description: "3日間で10万人を動員した大規模野外フェスティバル。メインステージのPA機材一式を担当。",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&h=800&q=80"
  },
  {
    title: "クラシックコンサートシリーズ",
    date: "2023年4月-12月",
    venue: "△△ホール",
    description: "年間を通じて開催される定期演奏会のサウンドシステムを提供。繊細な音の表現を実現。",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&h=800&q=80"
  },
  {
    title: "企業プレゼンテーション",
    date: "2024年1月",
    venue: "□□カンファレンスセンター",
    description: "大手IT企業の新製品発表会。300人規模のプレゼンテーション用音響システムを構築。",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&h=800&q=80"
  }
];

// 施工事例
const installations = [
  {
    title: "ライブハウス音響システム更新",
    location: "渋谷区",
    description: "最新のラインアレイスピーカーシステムを導入し、音響空間を一新。",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=800&q=80"
  },
  {
    title: "多目的ホール音響設備",
    location: "横浜市",
    description: "500席のホールに可変音響システムを設置。様々なイベントに対応可能。",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&h=800&q=80"
  },
  {
    title: "スタジオ制作",
    location: "新宿区",
    description: "プロフェッショナル向けレコーディングスタジオの設計・施工。",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800&q=80"
  }
];

// お客様の声
const reviews = [
  {
    name: "山田様",
    company: "イベント制作会社",
    comment: "急な機材の追加にも柔軟に対応していただき、とても助かりました。音質も素晴らしく、観客からも好評でした。",
    rating: 5
  },
  {
    name: "佐藤様",
    company: "音楽プロダクション",
    comment: "プロフェッショナルな知識と技術で、理想的な音響空間を作り上げていただきました。継続的にお願いしたいと思います。",
    rating: 5
  },
  {
    name: "田中様",
    company: "劇場運営",
    comment: "丁寧な打ち合わせから施工まで、安心してお任せできました。メンテナンスも定期的に行っていただき、安定した音響環境を維持できています。",
    rating: 5
  }
];

// 対応可能会場
const venues = [
  {
    name: "○○アリーナ",
    capacity: "最大20,000人",
    features: ["大規模コンサート", "スポーツイベント", "展示会"],
    location: "東京都"
  },
  {
    name: "△△ホール",
    capacity: "最大5,000人",
    features: ["クラシックコンサート", "演劇", "講演会"],
    location: "神奈川県"
  },
  {
    name: "□□スタジアム",
    capacity: "最大50,000人",
    features: ["野外フェス", "スポーツイベント"],
    location: "千葉県"
  },
  {
    name: "××シアター",
    capacity: "最大1,000人",
    features: ["ミュージカル", "演劇", "コンサート"],
    location: "東京都"
  }
];

export default function WorksPage() {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12 text-center">実績紹介</h1>

          {/* イベント実績 */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <Calendar className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-semibold">イベント実績</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-2">{event.date}</p>
                    <p className="text-muted-foreground mb-4">{event.venue}</p>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 施工事例 */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <Building2 className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-semibold">施工事例</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {installations.map((installation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={installation.image}
                      alt={installation.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{installation.title}</h3>
                    <p className="text-muted-foreground mb-4">{installation.location}</p>
                    <p className="text-sm">{installation.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* お客様の声 */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <Star className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-semibold">お客様の声</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm mb-4 italic">"{review.comment}"</p>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold">{review.name}</p>
                    <p>{review.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 対応可能会場 */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-semibold">対応可能会場</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {venues.map((venue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
                  <p className="text-muted-foreground mb-2">{venue.location}</p>
                  <p className="text-muted-foreground mb-4">{venue.capacity}</p>
                  <div className="flex flex-wrap gap-2">
                    {venue.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
} 