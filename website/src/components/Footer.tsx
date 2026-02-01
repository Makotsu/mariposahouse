import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  about: [
    { name: "私たちについて", href: "/about" },
    { name: "ビジョン", href: "/about#vision" },
    { name: "牧師紹介", href: "/about#pastor" },
  ],
  worship: [
    { name: "信仰と礼拝", href: "/worship" },
    { name: "集会案内", href: "/worship#schedule" },
  ],
  connect: [
    { name: "私たちについて", href: "/about" },
    { name: "お問い合わせ", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/butterfly.png"
                alt="Mariposa"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="text-lg font-bold text-gray-900 font-serif">Mariposa House</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              蝶のように変容し、<br />
              キリストにあって<br />
              新しく造られる喜びを<br />
              分かち合う場所
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3 text-sm">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Worship Links */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3 text-sm">Worship</h3>
            <ul className="space-y-2">
              {footerLinks.worship.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3 text-sm">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Service Times */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-gray-900 text-sm font-medium">礼拝時間</p>
              <p className="text-gray-500 text-sm">毎週日曜日 10:00 - 12:00（オンライン）</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} Mariposa House Church
            </p>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-gray-600 text-xs transition-colors"
            >
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
