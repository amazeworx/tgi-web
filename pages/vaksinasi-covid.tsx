import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Transgasindo</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="min-h-[300px] bg-tgi-darkblue flex flex-col pb-44">
          <div className="text-center pt-48 pb-16 max-w-xl mx-auto">
            <div className="text-white text-center text-xl mb-6">NEWS</div>
            <h1 className="text-white text-5xl font-extrabold leading-tight">
              Vaksinasi Covid - 19 Regional Office 1 Jambi
            </h1>
            <div className="text-white text-center text-xl mt-6">Kamis, 18 Maret 2021</div>
          </div>
        </div>
        <div className="container max-w-screen-lg mx-auto -mt-48">
          <Image
            className="mx-auto rounded-3xl"
            src="/static/images/news-img-01.jpg"
            alt="TGI Logo"
            width={960}
            height={540}
            priority
          />
        </div>
        <div className="bg-white pt-12 pb-24">
          <div className="container max-w-prose mx-auto">
            <div className="prose">
              <p>
                Pada hari Kamis, 18 Maret 2021 bertempat di kantor TGI wilayah Jambi,
                diselenggarakan vaksinasi bagi pegawai TGI wilayah Jambi, pelaksanaan vaksinasi ini
                merupakan rangkaian dari program Vaksinasi Nasional Covid-19 bagi 181,5 juta
                penduduk Indonesia dengan target pelaksanaan selama 1 tahun. TGI kantor wilayah
                Jambi ditunjuk menjadi salah satu Perusahaan yang ada di Jambi dalam mengambil
                bagian turut menyukseskan kegiatan vaksinasi Nasional.
              </p>
            </div>
          </div>
        </div>
        <section className="py-24 bg-slate-100">
          <div className="container max-w-screen-xl px-6 mx-auto">
            <div className="mb-8">
              <h3 className="text-4xl text-tgi-darkblue font-black">Berita Lainnya</h3>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <a
                href="#"
                className="block rounded-3xl bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300"
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
              </a>
              <a
                href="#"
                className="block rounded-3xl bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300"
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
              </a>
              <a
                href="#"
                className="block rounded-3xl bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300"
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
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
