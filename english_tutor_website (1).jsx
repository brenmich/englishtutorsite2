import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";

const translations = {
  en: {
    title: "Welcome to Michelle Smith's English Tutor!",
    description: "Practice conversational English online in a fun and interactive way.",
    start: "Start a Conversation",
  },
  ar: {
    title: "مرحبًا بك في مدرسة ميشيل سميث لتعليم اللغة الإنجليزية!",
    description: "تدرب على اللغة الإنجليزية المحكية بطريقة ممتعة وتفاعلية.",
    start: "ابدأ المحادثة",
  },
  tr: {
    title: "Michelle Smith'in İngilizce Öğretmeni Sitesine Hoşgeldiniz!",
    description: "Eğlenceli ve etkileşimli bir şekilde konuşma İngilizcesi pratiği yapın.",
    start: "Konuşmaya Başla",
  },
  pt: {
    title: "Bem-vindo ao site da tutora de inglês Michelle Smith!",
    description: "Pratique inglês conversacional de forma divertida e interativa.",
    start: "Começar Conversa",
  },
  ja: {
    title: "ミシェル・スミスの英語チューターへようこそ！",
    description: "楽しくインタラクティブに会話英語を練習しましょう。",
    start: "会話を始める",
  },
  zh: {
    title: "欢迎来到Michelle Smith的英语辅导网站！",
    description: "以有趣和互动的方式练习英语会话。",
    start: "开始对话",
  },
};

export default function EnglishTutorSite() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 flex flex-col items-center justify-center p-4">
      <motion.div
        className="max-w-xl w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="rounded-2xl shadow-xl p-6 bg-white">
          <CardContent>
            <div className="text-center">
              <MessageSquareText className="mx-auto text-blue-500 mb-4" size={48} />
              <h1 className="text-2xl font-bold mb-2">{t.title}</h1>
              <p className="text-gray-600 mb-6">{t.description}</p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-2 rounded-full">
                {t.start}
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6 text-center">
          <Globe className="inline-block mr-2 text-gray-500" />
          <select
            className="p-2 border rounded-xl shadow-sm"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
            <option value="tr">Türkçe</option>
            <option value="pt">Português</option>
            <option value="ja">日本語</option>
            <option value="zh">中文</option>
          </select>
        </div>
      </motion.div>
    </div>
  );
}
