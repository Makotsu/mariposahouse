"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "ホーム", nameEn: "Home", href: "/" },
  { name: "私たちについて", nameEn: "About", href: "/about" },
  { name: "信仰と礼拝", nameEn: "Faith & Worship", href: "/worship" },
  { name: "お知らせ", nameEn: "News", href: "/news" },
  { name: "お問い合わせ", nameEn: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"ja" | "en">("ja");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/butterfly.png"
              alt="Mariposa"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-lg font-bold text-gray-900 font-serif">
              Mariposa House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                {lang === "ja" ? item.name : item.nameEn}
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="lang-toggle ml-2">
              <button
                onClick={() => setLang("ja")}
                className={lang === "ja" ? "active" : ""}
              >
                日本語
              </button>
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "active" : ""}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded hover:bg-gray-50 transition-colors"
            aria-label="メニューを開く"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded transition-colors text-sm"
                >
                  {lang === "ja" ? item.name : item.nameEn}
                </Link>
              ))}
              <div className="px-3 py-2">
                <div className="lang-toggle inline-flex">
                  <button
                    onClick={() => setLang("ja")}
                    className={lang === "ja" ? "active" : ""}
                  >
                    日本語
                  </button>
                  <button
                    onClick={() => setLang("en")}
                    className={lang === "en" ? "active" : ""}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
