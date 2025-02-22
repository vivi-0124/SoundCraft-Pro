"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6">お問い合わせ</h1>
              <p className="text-lg text-muted-foreground">
                ご質問、ご相談などございましたら、お気軽にお問い合わせください
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Phone className="mx-auto h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">電話</h3>
                <p className="text-muted-foreground">03-1234-5678</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Mail className="mx-auto h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">メール</h3>
                <p className="text-muted-foreground">info@soundcraftpro.jp</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <MapPin className="mx-auto h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">所在地</h3>
                <p className="text-muted-foreground">東京都千代田区丸の内1-1-1</p>
              </motion.div>
            </div>

            <Card className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">お名前</Label>
                    <Input id="name" placeholder="山田 太郎" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">会社名</Label>
                    <Input id="company" placeholder="株式会社サンプル" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号</Label>
                    <Input id="phone" type="tel" placeholder="03-1234-5678" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">お問い合わせ内容</Label>
                  <Textarea
                    id="message"
                    placeholder="お問い合わせ内容をご記入ください"
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full">
                  送信する
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">営業時間</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">平日</h3>
                <p className="text-muted-foreground">9:00 - 18:00</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">土日祝</h3>
                <p className="text-muted-foreground">休業日</p>
                <p className="text-sm text-muted-foreground mt-2">
                  ※緊急の場合は24時間対応いたします
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}