import Link from "next/link";
import Image from "next/image";

export default function WorshipPage() {
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
            信仰と礼拝
          </h1>
          <p className="text-xl text-gray-500">Faith & Worship</p>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-4">
              私たちの信じること
            </h2>
            <p className="text-gray-600">
              マリポサハウスは、聖書に基づく歴史的なキリスト教信仰に立っています。
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">1. 聖書</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                聖書は神の霊感によって書かれた、信仰と生活の唯一の規範です。
                旧約聖書と新約聖書は、神の救いの計画を明らかにし、
                私たちを真理へと導きます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">2. 三位一体の神</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                父、子、聖霊なる三位一体の神を信じます。
                神は万物の創造者であり、愛と正義に満ちた方です。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">3. イエス・キリスト</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                イエス・キリストは神の御子であり、処女マリアから生まれ、
                私たちの罪のために十字架で死に、三日目によみがえられました。
                キリストのみが救いの道であり、やがて再び来られます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">4. 救い</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                救いはキリストを信じる信仰によって与えられる神の恵みです。
                行いによってではなく、ただキリストの十字架の犠牲によって、
                私たちは罪から救われます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">5. 聖霊</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                聖霊は信じる者の内に住み、導き、力を与え、
                キリストの似姿へと変えてくださいます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm mb-2">毎週日曜日</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
              日曜礼拝
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              毎週日曜日、オンラインで共に集まり、神様を礼拝します。
              賛美、祈り、聖書のメッセージを通して、神様との交わりを深め、
              一週間の力を受けます。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">時間</h3>
              <p className="text-gray-600">10:00 - 12:00（オンライン）</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">内容</h3>
              <p className="text-gray-600">賛美・祈り・聖書メッセージ</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">対象</h3>
              <p className="text-gray-600">どなたでも歓迎</p>
            </div>
          </div>

        </div>
      </section>

      {/* Other Gatherings */}
      <section className="py-20 bg-gray-50" id="schedule">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-2">
              その他の集会
            </h2>
            <p className="text-gray-500">Regular Gatherings</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Shir ha-Shirim</h3>
              <p className="text-gray-500 text-sm mb-3">雅歌の学び</p>
              <p className="text-gray-600 text-sm">
                雅歌（ソロモンの歌）を通して、神様との親密な関係について学びます。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">祈祷会</h3>
              <p className="text-gray-500 text-sm mb-3">Prayer Meeting</p>
              <p className="text-gray-600 text-sm">
                共に祈り、神様の御心を求める時間。互いのために、
                教会のために、世界のために祈ります。
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">小グループ</h3>
              <p className="text-gray-500 text-sm mb-3">Small Groups</p>
              <p className="text-gray-600 text-sm">
                少人数で聖書を学び、分かち合い、祈り合う。
                深い交わりと成長の場です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discipleship */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm mb-2">弟子訓練</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
              マテタイ・マテテウシン
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-gray-600 leading-relaxed">
            <p>
              「マテタイ」（μαθηταί）はギリシャ語で「弟子たち」を意味します。
              「マテテウシン」は「弟子を作る」という動詞です。
            </p>
            <p>
              イエス・キリストは弟子たちに「すべての国民を弟子としなさい」と
              命じられました。弟子が弟子を生み出し、信仰が受け継がれていく —
              これが教会の本質です。
            </p>
            <p>
              マリポサハウスでは、互いに学び合い、成長し合い、
              キリストの弟子として歩む道を共に探求しています。
            </p>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 font-serif mb-6 text-center">
              弟子の特徴
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-1">み言葉に生きる</h4>
                <p className="text-gray-600 text-sm">聖書を学び、その教えに従って歩む</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-1">祈りの生活</h4>
                <p className="text-gray-600 text-sm">絶えず祈り、神との交わりを深める</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-1">互いに愛し合う</h4>
                <p className="text-gray-600 text-sm">キリストの愛を実践し、仕える</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-1">成長し続ける</h4>
                <p className="text-gray-600 text-sm">キリストの似姿へと変えられていく</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agape Love */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-2">
              アガペーの愛
            </h2>
            <p className="text-gray-500">Agape Love</p>
          </div>

          <blockquote className="text-center mb-12">
            <p className="text-xl text-gray-700 leading-relaxed italic mb-4">
              「わたしはあなたがたに新しい戒めを与えます。<br />
              互いに愛し合いなさい。<br />
              わたしがあなたがたを愛したように、<br />
              あなたがたも互いに愛し合いなさい。」
            </p>
            <cite className="text-gray-500 not-italic">— ヨハネ 13:34</cite>
          </blockquote>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              「アガペー」はギリシャ語で、神の無条件の愛を表す言葉です。
              見返りを求めず、相手の最善を願い、犠牲を払う愛。
              キリストが十字架で示されたのが、まさにこの愛です。
            </p>
            <p>
              私たちはまず、この神の愛を受け取ります。
              自分の力で愛するのではなく、神の愛が私たちの内から
              溢れ出していくのです。
            </p>
            <p>
              マリポサハウスは、このアガペーの愛を実践する共同体でありたいと
              願っています。互いを受け入れ、赦し合い、励まし合う —
              そのような愛の交わりの中で、共に成長していきます。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
            ぜひご参加ください
          </h2>
          <p className="text-gray-600 mb-8">
            初めての方も大歓迎です。お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary">
              私たちについて
            </Link>
            <Link href="/contact" className="btn-secondary">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
