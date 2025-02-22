"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wrench, Clock, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MaintenancePage() {
  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "定期メンテナンス",
      description: "機材の性能を最大限に発揮するため、定期的な点検とメンテナンスを実施します。音質の劣化や故障を未然に防ぎ、常に最高の状態を維持します。"
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "24時間緊急対応",
      description: "機材トラブルは24時間365日対応可能です。専門技術者が迅速に対応し、お客様の業務への影響を最小限に抑えます。"
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "保証サービス",
      description: "万が一の故障や不具合に備え、充実した保証サービスをご用意。修理や代替機材の手配など、安心のサポート体制を整えています。"
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "カスタマイズ対応",
      description: "お客様の使用環境や要望に合わせた機材のカスタマイズが可能です。最適な音響環境を実現するためのご提案をいたします。"
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
          <h1 className="text-4xl font-bold mb-8 text-center">メンテナンスサービス</h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            プロフェッショナルな技術者による確かな保守サービスで、<br />
            お客様の機材を最高の状態に保ちます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
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
              メンテナンスに関するご相談は、お気軽にお問い合わせください。
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