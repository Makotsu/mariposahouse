import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
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
            私たちについて
          </h1>
          <p className="text-xl text-gray-500">About Mariposa House</p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
            ようこそ、マリポサハウスへ
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            マリポサハウスへお越しいただきありがとうございます。<br />
            私たちは、あなたとの出会いを心から歓迎します。<br />
            教会が初めての方、久しぶりの方、どんな背景をお持ちの方でも、<br />
            ありのままのあなたでお越しください。
          </p>
        </div>
      </section>

      {/* Meaning of Mariposa */}
      <section className="py-20 bg-white" id="meaning">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-8 text-center">
            「マリポサ」の意味
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            <p>
              「マリポサ」はスペイン語で<strong className="text-gray-900">蝶</strong>を意味します。
            </p>
            <p>
              蝶は幼虫から蛹を経て、美しい翅を持つ成虫へと変容する生き物です。
              この驚くべき変態は、私たちがキリストにあって「新しく造られる」過程を
              象徴しています。
            </p>
            <p>
              古い自分を後にし、神の愛の中で成長し、やがてキリストの似姿へと
              変えられていく — これが私たちマリポサハウスのビジョンです。
            </p>
          </div>

          <blockquote className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-gray-700 italic leading-relaxed">
              「私たちはみな、覆いを取り除かれた顔に、鏡のように主の栄光を映しながら、
              栄光から栄光へと、主と同じかたちに変えられていきます。」
            </p>
            <cite className="text-gray-500 mt-2 block not-italic">— 2コリント 3:18</cite>
          </blockquote>
        </div>
      </section>

      {/* Core Scripture */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-12 text-center">
            私たちの中心聖句
          </h2>

          <div className="space-y-8">
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">ガラテヤ 2:20</h3>
              <p className="text-gray-600 leading-relaxed italic mb-2">
                「私はキリストとともに十字架につけられました。
                もはや私が生きているのではなく、キリストが私のうちに生きておられるのです。」
              </p>
              <p className="text-gray-400 text-sm">
                I have been crucified with Christ. It is no longer I who live,
                but Christ who lives in me.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">2コリント 5:17</h3>
              <p className="text-gray-600 leading-relaxed italic mb-2">
                「ですから、だれでもキリストのうちにあるなら、その人は新しく造られた者です。
                古いものは過ぎ去って、見よ、すべてが新しくなりました。」
              </p>
              <p className="text-gray-400 text-sm">
                Therefore, if anyone is in Christ, he is a new creation.
                The old has passed away; behold, the new has come.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">エペソ 2:10</h3>
              <p className="text-gray-600 leading-relaxed italic mb-2">
                「実に、私たちは神の作品であって、良い行いをするために
                キリスト・イエスにあって造られたのです。」
              </p>
              <p className="text-gray-400 text-sm">
                For we are his workmanship, created in Christ Jesus for good works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-6">
            お会いできることを楽しみにしています
          </h2>
          <p className="text-gray-600 mb-8">
            ご質問やご不明な点がありましたら、お気軽にお問い合わせください。
          </p>
          <Link href="/contact" className="btn-primary">
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
