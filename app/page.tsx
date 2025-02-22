"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, Users, Wrench, Music, Mic2, Headphones, Phone, ArrowUp, ExternalLink, Search, ArrowDown, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/Logo";
import { useState, useEffect, Suspense } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Equipment {
  src: string;
  alt: string;
  label: string;
  description: string;
}

const equipments: Equipment[] = [
  {
    src: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625",
    alt: "プロフェッショナルマイク",
    label: "マイク・音声機器",
    description: "プロフェッショナルなマイクと音声機器"
  },
  {
    src: "https://images.unsplash.com/photo-1558583055-d7ac93557a3b",
    alt: "ミキシングコンソール",
    label: "ミキサー・制御機器",
    description: "ミキサーと制御機器の専門ソリューション"
  },
  {
    src: "https://images.unsplash.com/photo-1615671524827-c1fe3e6b7333",
    alt: "スピーカーシステム",
    label: "スピーカー・音響機器",
    description: "スピーカーと音響機器の高性能システム"
  },
  {
    src: "https://images.unsplash.com/photo-1520166012956-add9ba0835c9",
    alt: "レコーディング機器",
    label: "レコーディング機器",
    description: "高品質なレコーディング機器"
  },
  {
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    alt: "スタジオ機材",
    label: "スタジオ設備",
    description: "スタジオ設備の専門ソリューション"
  },
  {
    src: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d",
    alt: "DJ機器",
    label: "DJ・演出機器",
    description: "DJと演出機器の専門ソリューション"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// メーカー情報の配列を定義
const makers = [
  { name: "Martin Audio", image: "/makers/martin-audio.png", description: "Martin Audioは世界最高峰の音響機器メーカーです" },
  { name: "d&b audiotechnik", image: "/makers/db.png", description: "d&b audiotechnikは専門的な音響ソリューションを提供" },
  { name: "ROBE", image: "/makers/robe.png", description: "ROBEは世界最高峰の音響機器メーカーです" },
  { name: "YAMAHA", image: "/makers/yamaha.png", description: "YAMAHAは音楽機器の専門メーカーです" },
  { name: "DiGiCo", image: "/makers/digico.png", description: "DiGiCoは専門的な音響ソリューションを提供" },
  { name: "Avolites", image: "/makers/avolites.png", description: "Avolitesは世界最高峰の音響ソリューションを提供" },
  { name: "Martin", image: "/makers/martin.png", description: "Martinは世界最高峰の音響機器メーカーです" },
  { name: "SHURE", image: "/makers/shure.png", description: "SHUREは専門的な音声機器を提供" }
];

const services = [
  {
    icon: <Users className="h-12 w-12 mb-4 text-primary" />,
    title: "オペレーター派遣",
    description: "熟練したオペレーターを必要な場所に派遣します。イベントや公演の成功をサポートします。",
    features: ["経験豊富なスタッフ", "24時間対応可能", "柔軟なスケジュール調整"]
  },
  {
    icon: <Wrench className="h-12 w-12 mb-4 text-primary" />,
    title: "メンテナンス",
    description: "定期的な点検と迅速な修理対応で、機材の最適なコンディションを維持します。",
    features: ["定期点検プラン", "緊急修理対応", "予防保守管理"]
  },
  {
    icon: <Music className="h-12 w-12 mb-4 text-primary" />,
    title: "音響システム設計",
    description: "空間特性を考慮した最適な音響システムを設計。理想的な音環境を実現します。",
    features: ["音場シミュレーション", "アコースティック設計", "システム構築"]
  },
  {
    icon: <Mic2 className="h-12 w-12 mb-4 text-primary" />,
    title: "機材レンタル",
    description: "最新の音響機材を必要な期間だけレンタル。コスト効率の良い運用を実現します。",
    features: ["最新機材", "柔軟なレンタル期間", "メンテナンス付き"]
  },
  {
    icon: <Headphones className="h-12 w-12 mb-4 text-primary" />,
    title: "技術サポート",
    description: "24時間体制で専門的な技術サポートを提供。あらゆる課題に迅速に対応します。",
    features: ["24時間対応", "専門スタッフ配置", "リモートサポート"]
  },
  {
    icon: <Volume2 className="h-12 w-12 mb-4 text-primary" />,
    title: "音響コンサルティング",
    description: "プロフェッショナルな音響アドバイスで、最適な音響環境を実現します。",
    features: ["現場調査", "改善提案", "音響設計"]
  }
];

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState<Equipment | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [displayedMakers, setDisplayedMakers] = useState<typeof makers>([]);

  // 予測入力候補のカテゴリー
  const suggestions = {
    "機材カテゴリー": [
      "マイク・音声機器",
      "ミキサー・制御機器",
      "スピーカー・音響機器",
      "レコーディング機器",
      "スタジオ設備",
      "DJ・演出機器"
    ],
    "メーカー": [
      "Martin Audio",
      "d&b audiotechnik",
      "ROBE",
      "YAMAHA",
      "DiGiCo",
      "Avolites",
      "SHURE"
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ランダムなメーカーを選択する関数
  const getRandomMakers = () => {
    const shuffled = [...makers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  // 5秒ごとにメーカーをランダムに更新
  useEffect(() => {
    setDisplayedMakers(getRandomMakers());
    const interval = setInterval(() => {
      setDisplayedMakers(getRandomMakers());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="overflow-hidden"
    >
      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full w-12 h-12 bg-white dark:bg-slate-800 text-primary shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 border-2 border-primary"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* レーザービームエフェクト */}
        <motion.div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`laser-${i}`}
              className="absolute h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0"
              style={{
                left: '50%',
                top: '50%',
                width: '200%',
                transformOrigin: 'left center',
                rotate: `${(i * 360) / 20}deg`,
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleX: [1, 1.2, 1],
                scaleY: [1, 2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>

        {/* ダイナミックビジョンエフェクト */}
        <motion.div className="absolute inset-0 z-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`vision-${i}`}
              className="absolute bg-gradient-to-r from-primary/20 to-primary/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '2px',
                height: '2px',
                filter: 'blur(1px)',
              }}
              animate={{
                scale: [1, 30, 1],
                opacity: [0, 0.5, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* ビートリングエフェクト */}
        <motion.div className="absolute inset-0 z-15">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`beat-${i}`}
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
              animate={{
                scale: [1, 2],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>

        {/* サウンドウェーブマトリックス */}
        <motion.div className="absolute inset-0 z-25">
          <div className="grid grid-cols-12 h-full">
            {[...Array(144)].map((_, i) => (
              <motion.div
                key={`matrix-${i}`}
                className="relative"
                animate={{
                  backgroundColor: [
                    "rgba(255,255,255,0.05)",
                    "rgba(255,255,255,0.1)",
                    "rgba(255,255,255,0.05)",
                  ],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* エネルギーフィールド */}
        <motion.div
          className="absolute inset-0 z-30"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)",
              "radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* メインコンテンツ */}
        <div className="relative z-40 container mx-auto px-4">
          <motion.div
            className="text-center flex flex-col items-center justify-center min-h-screen"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* ロゴアニメーション */}
            <motion.div
              className="mb-12 relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.8
              }}
            >
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full filter blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <Logo variant="white" className="inline-block scale-150 relative" />
            </motion.div>

            {/* タイトルアニメーション */}
            <motion.h1
              className="text-4xl font-bold mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.2)",
                    "0 0 40px rgba(255,255,255,0.4)",
                    "0 0 20px rgba(255,255,255,0.2)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Sound
              </motion.span>{" "}
              <motion.span
                className="inline-block text-white"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.2)",
                    "0 0 40px rgba(255,255,255,0.4)",
                    "0 0 20px rgba(255,255,255,0.2)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              >
                Evolution
              </motion.span>
            </motion.h1>

            {/* サブタイトルアニメーション */}
            <motion.p
              className="text-xl text-white/80 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.span
                animate={{
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                次世代の音響体験を創造する
              </motion.span>
            </motion.p>

            {/* CTAボタン */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[280px] sm:max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto min-w-0 sm:min-w-[200px] bg-white hover:bg-white/90 text-black font-bold"
              >
                <Link href="/contact">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-0 sm:min-w-[200px] border-2 border-white text-white hover:bg-white/10 font-bold"
              >
                <Link href="/services">
                  サービス詳細
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* スクロールインジケーター */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="flex flex-col items-center text-white/60">
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
            <motion.span 
              className="text-sm mt-2"
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Scroll
            </motion.span>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-3xl font-bold mb-6">SoundCraft Proについて</h2>
              <p className="text-lg text-muted-foreground mb-6">
                2010年の設立以来、私たちは最高品質の音響ソリューションを提供し続けてきました。
                プロフェッショナルな機材と熟練したスタッフによって、あらゆる音響ニーズにお応えします。
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline">
                  <Link href="/about">
                    詳しく見る
                    <ArrowRight className="ml-2 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 relative h-[400px] w-full rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04"
                alt="音響スタジオ"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">サービス</Badge>
            <h2 className="text-3xl font-bold mb-4">サービス内容</h2>
            <p className="text-lg text-muted-foreground">
              あらゆる音響ニーズに対応する幅広いサービスを提供しています
            </p>
          </motion.div>
          {/* サービス内容のデスクトップビュー */}
          <div className="hidden md:block">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={24}
              slidesPerView={3}
              loop={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              className="services-swiper !pt-4 !pb-12"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="h-full">
                  <Card className="h-full flex flex-col group relative overflow-hidden bg-card hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader className="text-center relative">
                      <div className="mx-auto transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl mt-2">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4 relative">
                      <p className="text-muted-foreground">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, i) => (
                          <Badge key={i} variant="outline" className="bg-background/50 hover:bg-background/80 transition-colors duration-200">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-6 flex justify-center relative">
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-primary/10 transition-colors duration-200"
                        asChild
                      >
                        <Link href={`/services#${service.title.toLowerCase()}`}>
                          詳細を見る
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="md:hidden">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              className="services-swiper !pt-4 !pb-12"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="h-full">
                  <Card className="h-full flex flex-col group relative overflow-hidden bg-card hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader className="text-center relative">
                      <div className="mx-auto transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl mt-2">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4 relative">
                      <p className="text-muted-foreground">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, i) => (
                          <Badge key={i} variant="outline" className="bg-background/50 hover:bg-background/80 transition-colors duration-200">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-6 flex justify-center relative">
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-primary/10 transition-colors duration-200"
                        asChild
                      >
                        <Link href={`/services#${service.title.toLowerCase()}`}>
                          詳細を見る
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">実績紹介</h2>
            <p className="text-lg text-muted-foreground">
              数多くのイベントや施設で選ばれている実績があります
            </p>
          </motion.div>
          {/* 実績紹介のデスクトップビュー */}
          <div className="hidden md:block">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={24}
              slidesPerView={3}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.works-pagination',
              }}
              className="works-swiper"
            >
              {[
                {
                  src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&h=800&q=80",
                  alt: "イベント実績",
                  title: "イベント実績",
                  description: "大規模フェスから企業イベントまで幅広い音響ニーズに対応"
                },
                {
                  src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=800&q=80",
                  alt: "施工実績",
                  title: "施工実績",
                  description: "ライブハウスからホールまで最適な音響空間を創造"
                },
                {
                  src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&h=800&q=80",
                  alt: "導入事例",
                  title: "導入事例",
                  description: "プロフェッショナルな音響システムの導入実績"
                },
                {
                  src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&h=800&q=80",
                  alt: "コンサート実績",
                  title: "コンサート実績",
                  description: "国内外のアーティストコンサートでの音響サポート実績"
                },
                {
                  src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&h=800&q=80",
                  alt: "劇場実績",
                  title: "劇場実績",
                  description: "全国の劇場・ホールでの音響システム導入実績"
                },
                {
                  src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&h=800&q=80",
                  alt: "スタジオ実績",
                  title: "スタジオ実績",
                  description: "プロフェッショナルスタジオの音響設計・施工実績"
                }
              ].map((work, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative h-64 rounded-lg overflow-hidden group"
                  >
                    <Image
                      src={work.src}
                      alt={work.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                      <h3 className="text-white text-xl font-bold">{work.title}</h3>
                      <p className="text-white text-sm px-6 text-center">
                        {work.description}
                      </p>
                      <Button asChild variant="outline" className="text-white border-white">
                        <Link href="/works">
                          詳しく見る
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              <div className="works-pagination"></div>
            </Swiper>
          </div>
          <div className="md:hidden">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.works-pagination',
              }}
              className="works-swiper"
            >
              {[
                {
                  src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
                  alt: "イベント実績",
                  title: "イベント実績",
                  description: "大規模フェスから企業イベントまで幅広い音響ニーズに対応"
                },
                {
                  src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
                  alt: "施工実績",
                  title: "施工実績",
                  description: "ライブハウスからホールまで最適な音響空間を創造"
                },
                {
                  src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
                  alt: "導入事例",
                  title: "導入事例",
                  description: "プロフェッショナルな音響システムの導入実績"
                },
                {
                  src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
                  alt: "コンサート実績",
                  title: "コンサート実績",
                  description: "国内外のアーティストコンサートでの音響サポート実績"
                },
                {
                  src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
                  alt: "劇場実績",
                  title: "劇場実績",
                  description: "全国の劇場・ホールでの音響システム導入実績"
                },
                {
                  src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec",
                  alt: "スタジオ実績",
                  title: "スタジオ実績",
                  description: "プロフェッショナルスタジオの音響設計・施工実績"
                }
              ].map((work, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={work.src}
                      alt={work.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                        <p className="text-sm mb-4">{work.description}</p>
                        <Button asChild variant="outline" className="text-white border-white">
                          <Link href="/works">
                            詳しく見る
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              <div className="works-pagination"></div>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Equipment Section with Filter */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">機材</Badge>
            <h2 className="text-3xl font-bold mb-4">取扱機材</h2>
            <p className="text-lg text-muted-foreground mb-8">
              世界最高峰の音響機材を取り揃えています
            </p>
            
            {/* Filter Input with Suggestions */}
            <div className="max-w-md mx-auto mb-8">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="機材を検索..."
                      className="pl-10"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      onClick={() => setOpen(true)}
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0" align="start">
                  <Command>
                    <CommandInput placeholder="検索キーワードを入力..." />
                    <CommandList>
                      <CommandEmpty>見つかりませんでした。</CommandEmpty>
                      {Object.entries(suggestions).map(([category, items]) => (
                        <CommandGroup key={category} heading={category}>
                          {items.map((item) => (
                            <CommandItem
                              key={item}
                              onSelect={(value) => {
                                setFilter(value);
                                setOpen(false);
                              }}
                            >
                              {item}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      ))}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </motion.div>

          <div className="relative">
            <Suspense fallback={<EquipmentSkeleton />}>
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="equipment-swiper"
              >
                {equipments
                  .filter(item => 
                    filter === "" || 
                    item.label.toLowerCase().includes(filter.toLowerCase()) ||
                    item.description.toLowerCase().includes(filter.toLowerCase())
                  )
                  .map((item, index) => (
                    <SwiperSlide key={index}>
                      <Dialog>
                        <DialogTrigger asChild>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative h-[300px] rounded-lg overflow-hidden group cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                          >
                            {isLoading ? (
                              <Skeleton className="h-full w-full" />
                            ) : (
                              <>
                                <Image
                                  src={item.src}
                                  alt={item.alt}
                                  fill
                                  className="object-cover transition-transform group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <p className="text-lg font-semibold mb-2">{item.label}</p>
                                    <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                                      詳しく見る
                                      <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </>
                            )}
                          </motion.div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px]">
                          <DialogHeader>
                            <DialogTitle>{item.label}</DialogTitle>
                            <DialogDescription>{item.description}</DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <div className="relative h-[300px] rounded-lg overflow-hidden">
                              <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="mt-4">
                              <h4 className="font-semibold mb-2">主な特徴</h4>
                              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>高品質な音響性能</li>
                                <li>プロフェッショナル仕様</li>
                                <li>信頼性の高い動作</li>
                                <li>豊富な機能</li>
                              </ul>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </SwiperSlide>
                  ))}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
              </Swiper>
            </Suspense>
          </div>
        </div>
      </section>

      {/* 取扱メーカー & お取引先 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">パートナー</Badge>
            <h2 className="text-3xl font-bold mb-4">取扱メーカー</h2>
            <p className="text-lg text-muted-foreground mb-12">
              世界最高峰の音響機器メーカーと提携
            </p>
            <div className="hidden md:grid md:grid-cols-5 gap-8">
              {makers.map((maker, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 rounded-lg bg-card hover:bg-accent transition-colors cursor-pointer"
                    >
                      <div className="relative w-full h-12">
                        <Image
                          src={`https://placehold.co/200x100/png?text=${maker.name}`}
                          alt={maker.name}
                          fill
                          className="object-contain filter grayscale hover:grayscale-0 transition-all"
                          unoptimized
                        />
                      </div>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div>
                        <h4 className="text-sm font-semibold">{maker.name}</h4>
                        <p className="text-sm text-muted-foreground">{maker.description}</p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-4">
                {displayedMakers.map((maker, index) => (
                  <motion.div
                    key={maker.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 rounded-lg bg-card"
                  >
                    <div className="relative w-full h-12">
                      <Image
                        src={`https://placehold.co/200x100/png?text=${maker.name}`}
                        alt={maker.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-center">{maker.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <Separator className="my-8" />
          
          {/* お取引先セクション... */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Phone className="h-12 w-12 mx-auto mb-4 text-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              お問い合わせ
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground mb-8"
            >
              ご質問やご相談がございましたら、お気軽にお問い合わせください。
              専門スタッフが丁寧にご対応させていただきます。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  お問い合わせはこちら
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

// スケルトンコンポーネント
function EquipmentSkeleton() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="relative h-[300px] rounded-lg overflow-hidden">
          <Skeleton className="h-full w-full" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      ))}
    </>
  );
}