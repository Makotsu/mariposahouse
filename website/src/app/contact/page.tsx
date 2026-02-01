"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("お問い合わせありがとうございます。担当者より折り返しご連絡いたします。");
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/butterfly.png"
            alt="Mariposa"
            width={120}
            height={120}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-500">Contact Us</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-serif mb-4">
                メッセージを送る
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                ご質問、ご相談、祈りのリクエストなど、
                お気軽にお問い合わせください。
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors text-sm"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors text-sm"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    件名
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors text-sm"
                  >
                    <option value="">選択してください</option>
                    <option value="visit">礼拝に参加したい</option>
                    <option value="question">質問・相談</option>
                    <option value="prayer">祈りのリクエスト</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors resize-none text-sm"
                    placeholder="お問い合わせ内容をご記入ください..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  送信する
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-serif mb-6">
                連絡先情報
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">メール</h3>
                  <p className="text-gray-600 text-sm">info@mariposahouse.church</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">礼拝時間</h3>
                  <p className="text-gray-600 text-sm">毎週日曜日 10:00 - 12:00（オンライン）</p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white border border-gray-200 rounded-lg p-6" id="access">
                <h3 className="font-bold text-gray-900 mb-4">アクセス</h3>
                <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center mb-4">
                  <span className="text-gray-500 text-sm">地図はお問い合わせ後にご案内します</span>
                </div>
                <p className="text-gray-600 text-sm">
                  詳しい場所については、お問い合わせフォームよりご連絡ください。
                  折り返し詳細な案内をお送りします。
                </p>
              </div>

              {/* Scripture */}
              <blockquote className="mt-8 border-l-2 border-gray-200 pl-4">
                <p className="text-gray-600 italic text-sm">
                  「求めなさい。そうすれば与えられます。
                  探しなさい。そうすれば見つかります。
                  たたきなさい。そうすれば開かれます。」
                </p>
                <cite className="text-gray-500 text-sm not-italic mt-2 block">— マタイ 7:7</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
