import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Annual Reports</title>
        <meta name="description" content="Procurement" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="relative min-h-[300px] bg-tgi-darkblue flex flex-col justify-end">
          <div className="text-center pb-16 relative z-10">
            <h1 className="text-white text-5xl font-extrabold">Annual Reports</h1>
          </div>
          <Image
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay -z-0"
            src="/static/images/banner/banner-lelang.jpg"
            alt=""
            width={1920}
            height={1280}
            priority
          ></Image>
        </div>
        <section className="pt-12 pb-24 scroll-mt-24">
          <div className="container px-8 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-4 gap-6">
              <Link
                href="#"
                className="block rounded-2xl bg-slate-100 hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-solid border-slate-200 overflow-hidden"
              >
                <div className="rounded-2xl">
                  <Image
                    className="rounded-t-2xl"
                    src="/static/images/annual-reports/2021.jpg"
                    alt=""
                    width={600}
                    height={849}
                    priority
                  />
                </div>
                <div className="p-6 border-t border-solid border-slate-200">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Annual Report 2021
                  </h4>
                </div>
              </Link>
              <Link
                href="#"
                className="block rounded-2xl bg-slate-100 hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-solid border-slate-200 overflow-hidden"
              >
                <div className="rounded-2xl">
                  <Image
                    className="rounded-t-2xl"
                    src="/static/images/annual-reports/2020.jpg"
                    alt=""
                    width={600}
                    height={849}
                    priority
                  />
                </div>
                <div className="p-6 border-t border-solid border-slate-200">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Annual Report 2020
                  </h4>
                </div>
              </Link>
              <Link
                href="#"
                className="block rounded-2xl bg-slate-100 hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-solid border-slate-200 overflow-hidden"
              >
                <div className="rounded-2xl">
                  <Image
                    className="rounded-t-2xl"
                    src="/static/images/annual-reports/2019.jpg"
                    alt=""
                    width={600}
                    height={849}
                    priority
                  />
                </div>
                <div className="p-6 border-t border-solid border-slate-200">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Annual Report 2019
                  </h4>
                </div>
              </Link>
              <Link
                href="#"
                className="block rounded-2xl bg-slate-100 hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-solid border-slate-200 overflow-hidden"
              >
                <div className="rounded-2xl">
                  <Image
                    className="rounded-t-2xl"
                    src="/static/images/annual-reports/2018.jpg"
                    alt=""
                    width={600}
                    height={849}
                    priority
                  />
                </div>
                <div className="p-6 border-t border-solid border-slate-200">
                  <h4 className="text-slate-700 font-semibold text-lg leading-tight">
                    Annual Report 2018
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
