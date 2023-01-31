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
        <div className="min-h-[300px] bg-tgi-darkblue flex flex-col justify-end">
          <div className="text-center pb-16">
            <h1 className="text-white text-5xl font-extrabold">About Us</h1>
          </div>
        </div>
        <section id="our-business" className="py-24 scroll-mt-24">
          <div className="container px-6 max-w-screen-xl mx-auto">
            <div className="flex">
              <div className="w-1/2">
                <h2 className="text-5xl font-extrabold text-tgi-darkblue mb-8">Our Business</h2>
                <div className="prose">
                  <p>
                    PT Transportasi Gas Indonesia (TGI), selanjutnya disebut “TGI” didirikan pada
                    tahun 2002 sebagai perusahaan patungan antara PT Perusahaan Gas Negara Tbk,
                    Transasia Pipeline Pvt. Ltd (“Transasia”) dan Yayasan Kesejahteraan Pegawai dan
                    Pensiunan PGN (“YKPP PGN”) dengan proporsi saham masing-masing sebesar 59,87%,
                    40% dan 0,13%.
                  </p>
                  <p>
                    Sebagai pemilik dan pengelola jaringan pipa gas bumi di Indonesia dengan total
                    jaringan pipa lebih dari 1.000 km, TGI menjalankan bisnis dengan fokus pada
                    transportasi gas bumi untuk pasar domestik yaitu Sumatra dan Batam serta untuk
                    pasar internasional seperti Singapura.
                  </p>
                  <p>
                    Demi konsistensi dalam memberikan nilai-nilai terbaik, TGI menetapkan landasan
                    filosofi usaha yaitu “Menghubungkan Energi untuk Sinergi”. Kata “Menghubungkan”
                    menjadi representasi dari hubungan baik yang tercipta dan terjaga dengan adanya
                    transportasi pipa gas serta dalam hubungan antar pribadi. Kata “Energi”
                    merepresentasikan sumber daya alam, kekuatan mental dan spritual. Sementara kata
                    “Sinergi” merepresentasikan keyakinan TGI sebagai entitas untuk terus bertumbuh
                    secara berkelanjutan melalui sinergi yang terjalin dengan positif.
                  </p>
                  <p>
                    TGI telah membuktikan reputasi yang kuat melalui layanan yang handal dalam
                    perjalanan usaha selama 2 dekade. Pengalaman TGI didukung dengan aset sumber
                    daya manusia dengan kapabilitas dan profesionalitas berkelas dunia, yang
                    menggerakkan TGI dalam meningkatkan kinerjanya dari tahun ke tahun. TGI
                    senantiasa menjunjung prinsip kehati-hatian dan tanggung jawab terhadap
                    pelestarian lingkungan. Prinsip tersebut menjadi fondasi kuat yang menopang
                    langkah TGI dalam terus melaju memberikan layanan andal dan terpercaya.
                  </p>
                  <p>
                    Kualitas SDM yang mumpuni menjadi kunci TGI dalam mewujudkan komitmen besar
                    untuk beroperasi tanpa henti (zero-downtime). Keberhasilan TGI melakukan
                    reparasi pipa 28 inci di lepas pantai tanpa menghentikan pasokan gas ke
                    Singapura merupakan bukti keandalan dan kualitas kerja TGI dalam memberikan
                    pelayanan terbaik. Keberhasilan tersebut juga menjadi pembuktian komitmen TGI
                    yang tinggi terhadap para pemangku kepentingan, yaitu Indonesia dan Singapura,
                    yang sangat bergantung pada jaringan pipa gas sebagai sumber utama pasokan gas.
                  </p>
                </div>
              </div>
              <div className="w-1/2 pl-24">
                <Image
                  className="rounded-[48px]"
                  src="/static/images/about-img-01.jpg"
                  alt=""
                  width={600}
                  height={720}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="vision-mission" className="py-24 bg-slate-100 scroll-mt-24">
          <div className="container max-w-screen-xl px-6 mx-auto">
            <h2 className="text-5xl font-extrabold text-tgi-darkblue mb-8">Vision & Mission</h2>
            <div className="grid grid-cols-2 gap-24">
              <div className="bg-white rounded-3xl border-t-2 border-r-4 border-b-8 border-l-2 border-tgi-darkblue p-8">
                <h5 className="text-2xl text-tgi-darkblue font-bold mb-4">Visi</h5>
                <div className="prose prose-xl">
                  Untuk menjadi “Transporter Pilihan” gas alam yang melayani pelanggan di pasar
                  domestik Sumatra dan Batam, serta pasar ekspor Singapura dan Malaysia.
                </div>
              </div>
              <div className="bg-white rounded-3xl border-t-2 border-r-4 border-b-8 border-l-2 border-tgi-darkblue p-8">
                <h5 className="text-2xl text-tgi-darkblue font-bold mb-4">Misi</h5>
                <div className="prose">
                  <ul>
                    <li>Untuk meningkatkan pemanfaatan gas alam di Indonesia.</li>
                    <li>
                      Untuk memastikan pengiriman gas alam yang aman dan andal kepada pelanggan
                      untuk kepentingan pemegang saham, karyawan, dan masyarakat dimana kami
                      beroperasi.
                    </li>
                    <li>
                      Untuk mengadopsi praktik bisnis yang transparan dan etis di semua bidang
                      kegiatan kami.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="shareholders" className="py-24 bg-white scroll-mt-24">
          <div className="container max-w-screen-xl px-6 mx-auto">
            <h2 className="text-5xl font-extrabold text-tgi-darkblue mb-8">Shareholders</h2>
            <Image
              className=""
              src="/static/images/about-img-02.jpg"
              alt=""
              width={1221}
              height={442}
              priority
            />
            <div className="grid grid-cols-3 gap-x-8 mt-16">
              <div className="text-center max-w-[280px] mx-auto">
                <div className="inline-flex items-baseline gap-x-3">
                  <span className="text-[48px] text-tgi-darkblue font-bold">59.87</span>
                  <span className="text-slate-400 text-[32px]">%</span>
                </div>
                <div className="text-tgi-green font-medium">PT Perusahaan Gas Negara Tbk</div>
                <div className="text-slate-400 font-medium">812,400 lembar shares</div>
              </div>
              <div className="text-center max-w-[280px] mx-auto">
                <div className="inline-flex items-baseline gap-x-3">
                  <span className="text-[48px] text-tgi-darkblue font-bold">40.00</span>
                  <span className="text-slate-400 text-[32px]">%</span>
                </div>
                <div className="text-tgi-green font-medium">
                  Transasia Pipeline Company PVT. LTD. (TRANSASIA)
                </div>
                <div className="text-slate-400 font-medium">542,746 lembar shares</div>
              </div>
              <div className="text-center max-w-[280px] mx-auto">
                <div className="inline-flex items-baseline gap-x-3">
                  <span className="text-[48px] text-tgi-darkblue font-bold">0.13</span>
                  <span className="text-slate-400 text-[32px]">%</span>
                </div>
                <div className="text-tgi-green font-medium">
                  Yayasan Kesejahteraan Pegawai dan Pensiunan Gas Negara (YKPP PGN)
                </div>
                <div className="text-slate-400 font-medium">1,718 lembar shares</div>
              </div>
            </div>
          </div>
        </section>

        <section id="top-management" className="py-24 bg-slate-100 scroll-mt-24">
          <div className="container max-w-screen-xl px-6 mx-auto">
            <h2 className="text-5xl font-extrabold text-tgi-darkblue text-center mb-8">
              Top Management
            </h2>
            <div className="mt-16">
              <h3 className="text-3xl text-tgi-green text-center font-bold mb-8">Directors</h3>
              <div className="px-28">
                <div className="grid grid-cols-4 gap-x-10">
                  <Link
                    href="#"
                    className="block bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-1 transition duration-300"
                  >
                    <div className="aspect-w-6 aspect-h-5">
                      <Image
                        className="h-full w-full object-cover"
                        src="/static/images/team/anak.jpg"
                        alt=""
                        width={226}
                        height={190}
                        priority
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-tgi-darkblue leading-tight font-semibold mb-2">
                        Anak Agung Putu Bagus Putra Tinggal
                      </h4>
                      <div className="text-slate-500 text-sm">President Director</div>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="block bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-1 transition duration-300"
                  >
                    <div className="aspect-w-6 aspect-h-5">
                      <Image
                        className="h-full w-full object-cover"
                        src="/static/images/team/sahat.jpg"
                        alt=""
                        width={226}
                        height={190}
                        priority
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-tgi-darkblue leading-tight font-semibold mb-2">
                        Sahat Parlindungan Simarmata
                      </h4>
                      <div className="text-slate-500 text-sm">
                        Director of Finance and Administration
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="block bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-1 transition duration-300"
                  >
                    <div className="aspect-w-6 aspect-h-5">
                      <Image
                        className="h-full w-full object-cover"
                        src="/static/images/team/razif.jpg"
                        alt=""
                        width={226}
                        height={190}
                        priority
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-tgi-darkblue leading-tight font-semibold mb-2">
                        Razif bin Mat Saat
                      </h4>
                      <div className="text-slate-500 text-sm">Director of Operations</div>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="block bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-1 transition duration-300"
                  >
                    <div className="aspect-w-6 aspect-h-5">
                      <Image
                        className="h-full w-full object-cover"
                        src="/static/images/team/vinolia.jpg"
                        alt=""
                        width={226}
                        height={190}
                        priority
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-tgi-darkblue leading-tight font-semibold mb-2">
                        Vinolia Suriyanto
                      </h4>
                      <div className="text-slate-500 text-sm">Director of Business Development</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <h3 className="text-3xl text-tgi-green text-center font-bold mb-8">Commisioners</h3>
              <div className="px-0">
                <div className="grid grid-cols-5 gap-x-10">
                  <Link
                    href="#"
                    className="block bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-1 transition duration-300"
                  >
                    <div className="aspect-w-6 aspect-h-5">
                      <Image
                        className="h-full w-full object-cover"
                        src="/static/images/team/redy.jpg"
                        alt=""
                        width={226}
                        height={190}
                        priority
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-tgi-darkblue leading-tight font-semibold mb-2">
                        Redy Ferryanto
                      </h4>
                      <div className="text-slate-500 text-sm">President Commisioner</div>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="block bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-1 transition duration-300"
                  >
                    <div className="aspect-w-6 aspect-h-5">
                      <Image
                        className="h-full w-full object-cover"
                        src="/static/images/team/blank.jpg"
                        alt=""
                        width={226}
                        height={190}
                        priority
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-tgi-darkblue leading-tight font-semibold mb-2">
                        Yuzaini MD Yusuf
                      </h4>
                      <div className="text-slate-500 text-sm">Vice President Commissioner</div>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="block bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-1 transition duration-300"
                  >
                    <div className="aspect-w-6 aspect-h-5">
                      <Image
                        className="h-full w-full object-cover"
                        src="/static/images/team/arudji.jpg"
                        alt=""
                        width={226}
                        height={190}
                        priority
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-tgi-darkblue leading-tight font-semibold mb-2">
                        Arudji Wahyono
                      </h4>
                      <div className="text-slate-500 text-sm">Commisioner</div>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="block bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-1 transition duration-300"
                  >
                    <div className="aspect-w-6 aspect-h-5">
                      <Image
                        className="h-full w-full object-cover"
                        src="/static/images/team/arifin.jpg"
                        alt=""
                        width={226}
                        height={190}
                        priority
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-tgi-darkblue leading-tight font-semibold mb-2">
                        Arifin Rudiyanto
                      </h4>
                      <div className="text-slate-500 text-sm">Commisioner</div>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="block bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-1 transition duration-300"
                  >
                    <div className="aspect-w-6 aspect-h-5">
                      <Image
                        className="h-full w-full object-cover"
                        src="/static/images/team/blank.jpg"
                        alt=""
                        width={226}
                        height={190}
                        priority
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-tgi-darkblue leading-tight font-semibold mb-2">
                        Ronald Gunawan
                      </h4>
                      <div className="text-slate-500 text-sm">Commisioner</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="corporate-identity" className="py-24 bg-white scroll-mt-24">
          <div className="container max-w-screen-xl px-6 mx-auto">
            <div className="flex">
              <div className="w-1/3">
                <Image
                  className="mx-auto"
                  src="/static/images/logo-tgi.svg"
                  alt="TGI Logo"
                  width={288}
                  height={399}
                  priority
                />
              </div>
              <div className="w-2/3 pl-20">
                <h2 className="text-5xl font-extrabold text-tgi-darkblue text-left mb-8">
                  Corporate Identity
                </h2>
                <div className="prose">
                  <p>Logo Transgasindo terbagi atas:</p>
                  <p>
                    Lidah api gas berwarna biru yang membentuk huruf T, G, dan I atau TGI
                    (kependekan dari Transportasi Gas Indonesia) memiliki arti dinamis, inovatif
                    serta kemurnian inti api yang tidak pernah padam.
                  </p>
                  <p>
                    Lingkaran hijau, dapat diartikan sebagai bola dunia yang lingkungannya tetap
                    terjaga dan merupakan wujud kepedulian serta bertekad melestarikan lingkungan
                    yang bersih dengan menyalurkan energi yang ramah lingkungan dengan sistem
                    transportasi perpipaan yang handal.
                  </p>
                  <p>
                    Penyebutan Transgasindo juga dapat disebutkan singkatannya saja yaitu TGI,
                    keduanya tidak ada perbedaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="corporate-identity" className="py-24 bg-white scroll-mt-24">
          <div className="container max-w-screen-xl px-6 mx-auto">
            <h2 className="text-5xl font-extrabold text-tgi-darkblue text-left mb-8">
              Corporate Culture
            </h2>
            <h3 className="text-3xl text-tgi-green text-left font-bold mb-8">ConNECT</h3>
            <div className="flex">
              <div className="w-1/3">
                <div className="prose max-w-none">
                  <p>
                    ConNECT merupakan pengintegrasian core values AKHLAK ke dalam budaya dan tata
                    nilai TGI, merupakan kristalisasi dari value, believe dan sikap tingkah laku
                    sehari-hari yang diikrarkan menjadi komitmen bersama.
                  </p>
                </div>
              </div>
              <div className="w-2/3 pl-20">
                <div className="prose max-w-none">
                  <p>
                    ConNECT juga merupakan penyempurnaan dari budaya Perseroan sebelumnya, sebagai
                    upaya memberikan semangat yang terbarukan kepada seluruh insan TGI, untuk
                    bersinergi dan berkolaborasi sehingga tujuan perusahaan dapat dicapai bersama
                    dengan gerak yang sama, irama yang sama, dan semangat yang sama.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-6 mx-auto mt-16">
            <div className="">
              <Image
                className="mx-auto"
                src="/static/images/about-img-03.jpg"
                alt="TGI Logo"
                width={1440}
                height={752}
                priority
              />

              <Image
                className="mx-auto mt-16"
                src="/static/images/about-img-04.png"
                alt="TGI Logo"
                width={1224}
                height={536}
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
