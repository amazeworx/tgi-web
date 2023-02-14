import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>News</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="relative min-h-[400px] bg-tgi-darkblue flex flex-col justify-end">
          <div className="text-center pb-16 relative z-10">
            <h1 className="text-white text-5xl font-extrabold">News</h1>
          </div>
          <Image
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay -z-0"
            src="/static/images/banner/page-banner-02.jpg"
            alt=""
            width={1920}
            height={400}
            priority
          ></Image>
        </div>

        <section id="our-business" className="py-24 scroll-mt-24">
          <div className="container px-8 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-3 gap-8">
              <Link
                href="/vaksinasi-covid"
                className="block rounded-3xl bg-slate-100 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-3xl">
                  <Image
                    className="rounded-3xl"
                    src="/static/images/news-img-01.jpg"
                    alt=""
                    width={960}
                    height={540}
                    priority
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Vaksinasi Covid -19 Regional Office 1 Jambi
                  </h4>
                  <div className="text-slate-500 text-sm mt-2">18 Maret 2021</div>
                </div>
              </Link>
              <Link
                href="/vaksinasi-covid"
                className="block rounded-3xl bg-slate-100 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-3xl">
                  <Image
                    className="rounded-3xl"
                    src="/static/images/news-img-03.jpg"
                    alt=""
                    width={960}
                    height={540}
                    priority
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Simbolis Penyerahan Klaim Asuransi KP 233
                  </h4>
                  <div className="text-slate-500 text-sm mt-2">2 Maret 2021</div>
                </div>
              </Link>
              <Link
                href="/vaksinasi-covid"
                className="block rounded-3xl bg-slate-100 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-3xl">
                  <Image
                    className="rounded-3xl"
                    src="/static/images/news-img-02.jpg"
                    alt=""
                    width={960}
                    height={540}
                    priority
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Business Gathering 2021 - Evolving with TGI business in the New Normal
                  </h4>
                  <div className="text-slate-500 text-sm mt-2">01 Maret 2021</div>
                </div>
              </Link>
              <Link
                href="/vaksinasi-covid"
                className="block rounded-3xl bg-slate-100 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-3xl">
                  <Image
                    className="rounded-3xl"
                    src="/static/images/news-img-03.jpg"
                    alt=""
                    width={960}
                    height={540}
                    priority
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Simbolis Penyerahan Klaim Asuransi KP 233
                  </h4>
                  <div className="text-slate-500 text-sm mt-2">2 Maret 2021</div>
                </div>
              </Link>
              <Link
                href="/vaksinasi-covid"
                className="block rounded-3xl bg-slate-100 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-3xl">
                  <Image
                    className="rounded-3xl"
                    src="/static/images/news-img-01.jpg"
                    alt=""
                    width={960}
                    height={540}
                    priority
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Vaksinasi Covid -19 Regional Office 1 Jambi
                  </h4>
                  <div className="text-slate-500 text-sm mt-2">18 Maret 2021</div>
                </div>
              </Link>
              <Link
                href="/vaksinasi-covid"
                className="block rounded-3xl bg-slate-100 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-3xl">
                  <Image
                    className="rounded-3xl"
                    src="/static/images/news-img-03.jpg"
                    alt=""
                    width={960}
                    height={540}
                    priority
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Simbolis Penyerahan Klaim Asuransi KP 233
                  </h4>
                  <div className="text-slate-500 text-sm mt-2">2 Maret 2021</div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
