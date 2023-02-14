import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="relative min-h-[400px] bg-tgi-darkblue flex flex-col justify-end">
          <div className="text-center pb-16 relative z-10">
            <h1 className="text-white text-5xl font-extrabold">Contact Us</h1>
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
              <div className="block rounded-3xl bg-slate-100 transition duration-300">
                <div className="aspect-w-16 aspect-h-9 rounded-3xl">
                  <div className="w-full h-full bg-slate-200 rounded-t-3xl"></div>
                  {/* <Image
                    className="rounded-t-3xl"
                    src="/static/images/news-img-01.jpg"
                    alt=""
                    width={960}
                    height={540}
                    priority
                  /> */}
                </div>
                <div className="p-6">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Head Office Jakarta
                  </h4>
                  <div className="text-slate-700 text-sm mt-2">
                    Jalan Kebon Sirih Raya No. 1, Jakarta 10340, Indonesia
                    <br />
                    P : +62 21 508 52000
                    <br />
                    F : +62 21 310 3757 / 3545
                    <br />E : public.relations@tgi.co.id
                  </div>
                </div>
              </div>
              <div className="block rounded-3xl bg-slate-100 transition duration-300">
                <div className="aspect-w-16 aspect-h-9 rounded-3xl">
                  <div className="w-full h-full bg-slate-200 rounded-t-3xl"></div>
                  {/* <Image
                    className="rounded-t-3xl"
                    src="/static/images/news-img-01.jpg"
                    alt=""
                    width={960}
                    height={540}
                    priority
                  /> */}
                </div>
                <div className="p-6">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Regional Office I. Jambi Office
                  </h4>
                  <div className="text-slate-700 text-sm mt-2">
                    Jl . M.Y. Singedikane No 94, Telanai Pura
                    <br />
                    Jambi 36122, Indonesia
                    <br />
                    Phone : +62 741.668.420
                    <br />
                    Fax. : +62 741.668.429
                    <br />
                  </div>
                </div>
              </div>
              <div className="block rounded-3xl bg-slate-100 transition duration-300">
                <div className="aspect-w-16 aspect-h-9 rounded-3xl">
                  <div className="w-full h-full bg-slate-200 rounded-t-3xl"></div>
                  {/* <Image
                    className="rounded-t-3xl"
                    src="/static/images/news-img-01.jpg"
                    alt=""
                    width={960}
                    height={540}
                    priority
                  /> */}
                </div>
                <div className="p-6">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Gas Transportation Management (GTM)/Gas Control Room (24 hours)
                  </h4>
                  <div className="text-slate-700 text-sm mt-2">
                    Jalan M.Y.Singedikane No.94 Telanai Pura Jambi 36122 Indonesia
                    <br />
                    Phone : +62 741.668.420
                    <br />
                    +62 741.667.257 (24 hours)
                    <br />
                    0-800-1-250-000 (emergency call)
                    <br />
                    Fax. : +62 741.667.256
                  </div>
                </div>
              </div>
              <div className="block rounded-3xl bg-slate-100 transition duration-300">
                <div className="aspect-w-16 aspect-h-9 rounded-3xl">
                  <div className="w-full h-full bg-slate-200 rounded-t-3xl"></div>
                  {/* <Image
                    className="rounded-t-3xl"
                    src="/static/images/news-img-01.jpg"
                    alt=""
                    width={960}
                    height={540}
                    priority
                  /> */}
                </div>
                <div className="p-6">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Regional Office II. Belilas Office
                  </h4>
                  <div className="text-slate-700 text-sm mt-2">
                    Belilas Gas Booster Station (BOSTON)
                    <br />
                    Jalan Lintas Timur Sumatera Belilas Pangkalan Kasal Indragiri Hulu Riau
                    Indonesia
                    <br />
                    Phone : +62 741.665.09
                    <br />
                    Fax. : +62 741.669.4874
                  </div>
                </div>
              </div>
              <div className="block rounded-3xl bg-slate-100 transition duration-300">
                <div className="aspect-w-16 aspect-h-9 rounded-3xl">
                  <div className="w-full h-full bg-slate-200 rounded-t-3xl"></div>
                  {/* <Image
                    className="rounded-t-3xl"
                    src="/static/images/news-img-01.jpg"
                    alt=""
                    width={960}
                    height={540}
                    priority
                  /> */}
                </div>
                <div className="p-6">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Regional Office III. Pekanbaru Office
                  </h4>
                  <div className="text-slate-700 text-sm mt-2">
                    Jl Soekarno Hatta no. 174, Pekanbaru-Riau 28294, Indonesia
                    <br />
                    Phone : +62 761.564.858
                    <br />
                    Fax. : +62 761.564.857
                  </div>
                </div>
              </div>
              <div className="block rounded-3xl bg-slate-100 transition duration-300">
                <div className="aspect-w-16 aspect-h-9 rounded-3xl">
                  <div className="w-full h-full bg-slate-200 rounded-t-3xl"></div>
                  {/* <Image
                    className="rounded-t-3xl"
                    src="/static/images/news-img-01.jpg"
                    alt=""
                    width={960}
                    height={540}
                    priority
                  /> */}
                </div>
                <div className="p-6">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Regional Office IV. Batam Office
                  </h4>
                  <div className="text-slate-700 text-sm mt-2">
                    Jalan Jenderal Ahmad Yani
                    <br />
                    (Jalan Raya Batam Center)
                    <br />
                    Kel. Teluk Tering, Kec. Batam Kota Batam - Kep.Riau, Indonesia
                    <br />
                    Phone : +62 778.477.555
                    <br />
                    Fax. : +62 778.477.522
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
