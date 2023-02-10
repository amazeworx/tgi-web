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
        <div className="relative min-h-[400px] bg-tgi-darkblue flex flex-col justify-end">
          <div className="text-center pb-16 relative z-10">
            <h1 className="text-white text-5xl font-extrabold">Operation & Services</h1>
          </div>
          <Image
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay -z-0"
            src="/static/images/banner/page-banner-03.jpg"
            alt=""
            width={1920}
            height={400}
            priority
          ></Image>
        </div>
        <section id="overview" className="py-24 scroll-mt-24">
          <div className="container max-w-screen-xl px-8 mx-auto">
            <div className="flex">
              <div className="w-1/2 pr-24">
                <Image
                  className="rounded-[48px]"
                  src="/static/images/about-img-01.jpg"
                  alt=""
                  width={600}
                  height={720}
                  priority
                />
              </div>
              <div className="w-1/2 pt-12">
                {/* <h2 className="text-2xl font-bold bg-tgi-green text-white inline-block px-8 py-3 rounded-lg">
                  Overview
                </h2> */}
                <h2 className="text-4xl font-bold text-tgi-darkblue mb-8">Overview</h2>
                <div className="prose mt-8 text-justify">
                  <p>
                    In all aspects of our operation, TGI ensures the implementation of prudence. We
                    make sure the pursuit of profit does not cause any harm, be that to the people
                    or the environment.
                  </p>
                  <p>
                    Wherever we operate, we always take the necessary steps to protect the
                    environment and improve the populace socio-economic condition. We routinely
                    monitor the quality of the surroundings to safeguard the company against causing
                    any pollution, and we work together with a certified waste-management company in
                    the handling and disposal of our hazardous waste.
                  </p>
                  <p>
                    TGI will continue to uphold and expand corporate values for its stakeholders,
                    championing the interests of shareholders through its commitment as “the
                    Transporter of Choice” for natural gas, proved and demonstrated through the
                    reliability and upgrading of its pipelines and support facilities, with
                    periodic, and thorough maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gas-pipeline-system" className="py-24 scroll-mt-24 bg-slate-100">
          <div className="container px-8 max-w-screen-xl mx-auto">
            <div className="">
              {/* <h2 className="text-2xl font-bold bg-tgi-green text-white inline-block px-8 py-3 rounded-lg">
                Gas Pipeline System
              </h2> */}
              <h2 className="text-4xl font-bold text-tgi-darkblue mb-8">Gas Pipeline System</h2>
            </div>
            <div className="my-8">
              <Image
                className="rounded-[24px] border-4 border-solid border-tgi-amber"
                src="/static/images/operation/tgi-pipeline-system.jpg"
                alt=""
                width={1920}
                height={700}
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-bold text-base mb-1">Kantor Pusat</h4>
                <div>
                  Jl. Kebon Sirih Raya No. 1<br />
                  Jakarta 10340, Indonesia
                  <br />
                  P: +62 21 50852000
                  <br />
                  F: +62 21 3103757 / 3103545
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Gas Transportation Management (GTM)</h4>
                <div>
                  Gas Control Room (24 hours)
                  <br />
                  Jl. M.Y. Singedikane No. 94
                  <br />
                  Telanai Pura Jambi 36122, Indonesia
                  <br />
                  P: 0-800-1-250-000 (24 hours)
                  <br />
                  F: 0741-667 256
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Regional Office I Jambi</h4>
                <div>
                  Jl. M.Y. Singedikane No. 94
                  <br />
                  Telanai Pura Jambi 36122, Indonesia
                  <br />
                  P: 0741-668 420
                  <br />
                  F: 0741-668 429
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Regional Office II Belilas</h4>
                <div>
                  Jl. Lintas Timur-Belilas
                  <br />
                  Pangkalan Kasai Indragiri Hulu Riau, Indonesia
                  <br />
                  P: 0769-3200 000
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Regional Office III Pekanbaru</h4>
                <div>
                  Jl. Soekarno Hatta No. 174
                  <br />
                  Pekanbaru-Riau 28294, Indonesia
                  <br />
                  P: 0761-564 858
                  <br />
                  F: 0761-564 857
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Regional Office IV Batam</h4>
                <div>
                  Regional Office IV Batam Jl. Raya Ahmad Yani
                  <br />
                  Kel. Teluk Tering, Kec. Batam, Kota Batam – Kep. Riau
                  <br />
                  P: 0778-477555
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pipeline-information" className="py-24 scroll-mt-24 bg-white">
          <div className="container max-w-screen-xl px-8 mx-auto">
            <h2 className="text-4xl text-center font-bold text-tgi-darkblue mb-12">
              Pipeline Information
            </h2>
            <div className="grid grid-cols-2 gap-4 xl:gap-12 2xl:gap-24">
              <div className="bg-white rounded-2xl border-t-2 border-r-4 border-b-8 border-l-2 border-tgi-amber p-8">
                <h5 className="text-2xl text-tgi-green font-bold mb-4">Ruas Grissik - Duri</h5>
                <div className="prose">
                  <ul>
                    <li>Objek Vital Nasional</li>
                    <li>Panjang Pipa GD = 536 KM, diameter 28”</li>
                    <li>Kapasitas pipa = Free Flow 310 MMSCFD, Maksimum = 427 MMSCFD</li>
                    <li>2 Stasiun Kompresor (Sekernan & Belilas)</li>
                    <li>21 Sectional Valve (SV)</li>
                    <li>
                      5 Stasiun Meter Ultrasonic (Tempino, PGN Perawang, PLN Duri I dan PLN Duri II)
                    </li>
                    <li>
                      9 Stasiun Meter Orifis (Fuel Gas Sekernan, Fuel Gas Belilas, Seberida, Rengat,
                      Pertagas Koto Gasib)
                    </li>
                    <li>
                      10 Shippers (CPGL-CPI), PHEJM-CPI, PGN PKU, PGN DUDU, Pertamina DUDU, PLN
                      Sumatra, Pertagas BOB, Pertamina Jargas, PGN Jargas, EHK)
                    </li>
                    <li>Komunikasi VSAT dan Radio</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-t-2 border-r-4 border-b-8 border-l-2 border-tgi-amber p-8">
                <h5 className="text-2xl text-tgi-green font-bold mb-4">Ruas Grissik - Singapura</h5>
                <div className="prose">
                  <ul>
                    <li>Objek Vital Nasional</li>
                    <li>Panjang pipa GS = 468 KM, diameter 28”</li>
                    <li>Kapasitas pipa= Free Flow 401 MMSCFD, Maksimum 465 MMSCFD</li>
                    <li>1 Stasiun Kompresor Jabung</li>
                    <li>6 Sectional Valve (SV)</li>
                    <li>
                      6 Stasiun Meter Ultrasonic (Simpang Abadi, Fuel Gas Jabung, IDLP Panaran, PGN
                      Panaran, Pemping, PLNB Pemping)
                    </li>
                    <li>4 Shippers (SSSG, EHK, PLNB, PGN Batam)</li>
                    <li>Radar Pengawas jalur pipa bawah laut di stasiun Panaran, Batam</li>
                    <li>Komunikasi VSAT, Fiber Optik dan Radio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
