import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
        <Swiper
          className="h-[85vh]"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Image
              className="absolute inset-0 h-full w-full object-cover z-auto"
              src="/static/images/home-slide-01.jpg"
              alt="Slide 01"
              width={1920}
              height={1000}
              priority
            />
            <div className="container max-w-screen-xl px-8 mx-auto h-full relative z-auto">
              <div className="flex w-1/2 h-full items-center">
                <div className="text-white pt-32">
                  <h2 className="font-black text-[52px] leading-[1.2em] mb-4">
                    Transporting natural gas through pipelines
                  </h2>
                  <p className="text-3xl">To both domestic and international market</p>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="btn btn-lg rounded-full bg-tgi-green px-10 hover:bg-green-500"
                    >
                      About Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <section className="py-24">
          <div className="container max-w-screen-xl px-6 mx-auto">
            <div className="flex">
              <div className="w-1/2 pr-16">
                <Image
                  className="rounded-3xl"
                  src="/static/images/home-img-01.jpg"
                  alt=""
                  width={800}
                  height={800}
                  priority
                />
              </div>
              <div className="w-1/2 pl-8 pt-4">
                <h3 className="text-base mb-8 relative pl-9">
                  <span className="inline-block bg-tgi-green w-5 h-1 rounded-full absolute top-2.5 left-0"></span>
                  OPERATION & SERVICES
                </h3>
                <h2 className="text-slate-600 text-4xl mb-8">
                  Committed as <br />
                  <span className="font-black text-tgi-darkblue">the Transporter of Choice</span>
                  <br />
                  for natural gas
                </h2>
                <div className="prose">
                  <p>
                    In all aspects of our operation, TGI ensures the implementation of prudence. We
                    make sure the pursuit of profit does not cause any harm, be that to the people
                    or the environment.
                  </p>
                  <p>
                    TGI will continue to uphold and expand corporate values for its stakeholders,
                    championing the interests of shareholders through its commitment as “the
                    Transporter of Choice” for natural gas, proved and demonstrated through the
                    reliability and upgrading of its pipelines and support facilities, with
                    periodic, and thorough maintenance.
                  </p>
                </div>
                <div className="flex gap-x-4 mt-8">
                  <a
                    href="#"
                    className="btn btn-lg px-8 py-2 h-[56px] min-h-[56px] rounded-full border-transparent bg-tgi-darkblue hover:bg-tgi-darkblue hover:brightness-125 hover:border-transparent"
                  >
                    Gas Pipeline System
                  </a>
                  <a
                    href="#"
                    className="btn btn-lg px-8 h-[56px] min-h-[56px] rounded-full border-transparent bg-tgi-green hover:bg-tgi-green hover:brightness-125 hover:border-transparent"
                  >
                    Pipeline Information
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container max-w-screen-xl px-6 mx-auto mt-20">
            <div className="grid grid-cols-3 gap-x-8">
              <div className="text-center max-w-[250px] mx-auto">
                <div className="inline-flex items-baseline gap-x-3">
                  <span className="text-[48px] text-tgi-darkblue font-bold">1000+</span>
                  <span className="text-slate-400 text-[32px]">km</span>
                </div>
                <div className="text-tgi-green font-medium">TOTAL PIPELINE NETWORK</div>
              </div>
              <div className="text-center max-w-[250px] mx-auto">
                <div className="inline-flex items-baseline gap-x-3">
                  <span className="text-[48px] text-tgi-darkblue font-bold">723</span>
                  <span className="text-slate-400 text-[28px]">MMSCFD</span>
                </div>
                <div className="text-tgi-green font-medium">
                  MILLION STANDARD CUBIC FEET PER DAY VOLUME GAS
                </div>
              </div>
              <div className="text-center max-w-[250px] mx-autor">
                <div className="inline-flex items-baseline gap-x-3">
                  <span className="text-[48px] text-tgi-darkblue font-bold">87.84</span>
                  <span className="text-slate-400 text-[32px]">%</span>
                </div>
                <div className="text-tgi-green font-medium">CUSTOMER SATISFACTION INDEX</div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="pt-24 pb-[300px] bg-no-repeat bg-[right_0px_bottom_-120px]"
          style={{
            backgroundImage: `url("/static/images/home-img-02.jpg")`,
          }}
        >
          <div className="container max-w-[920px] px-6 mx-auto">
            <div className="prose mx-auto text-center">
              <h2 className="font-black text-tgi-darkblue text-4xl mb-8">Corporate Activities </h2>
              <p>
                Other aspects of increasing corporate values include the implementation of all daily
                business activities in line with the principles of Good Corporate Governance and
                Business Ethics. Further, we implement a comprehensive Health, Safety and
                Environment management system, synergizing every resource, developing local
                community relations and strengthening communications with and concern for our valued
                employees.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-x-10 mt-12">
              <a
                href="#"
                className="block aspect-w-1 aspect-h-1 rounded-2xl hover:-translate-y-1 hover:shadow-md transition ease-out duration-300"
              >
                <div className="bg-slate-50 border border-slate-300 rounded-2xl p-8 text-center flex items-center justify-center">
                  <div>
                    <Image
                      className="mx-auto"
                      src="/static/images/icon-gcg.png"
                      alt=""
                      width={100}
                      height={100}
                      priority
                    />
                    <h4 className="text-xl text-tgi-darkblue leading-tight mt-4">
                      Good Corporate Governance
                    </h4>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="block aspect-w-1 aspect-h-1 rounded-2xl hover:-translate-y-1 hover:shadow-md transition ease-out duration-300"
              >
                <div className="bg-slate-50 border border-slate-300 rounded-2xl p-8 text-center flex items-center justify-center">
                  <div>
                    <Image
                      className="mx-auto"
                      src="/static/images/icon-csr.png"
                      alt=""
                      width={100}
                      height={100}
                      priority
                    />
                    <h4 className="text-xl text-tgi-darkblue leading-tight mt-4">
                      Corporate Social Responsibility
                    </h4>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="block aspect-w-1 aspect-h-1 rounded-2xl hover:-translate-y-1 hover:shadow-md transition ease-out duration-300"
              >
                <div className="bg-slate-50 border border-slate-300 rounded-2xl p-8 text-center flex items-center justify-center">
                  <div>
                    <Image
                      className="mx-auto"
                      src="/static/images/icon-hse.png"
                      alt=""
                      width={100}
                      height={100}
                      priority
                    />
                    <h4 className="text-xl text-tgi-darkblue leading-tight mt-4">
                      Health & Safety Environment
                    </h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-12 text-center">
              <a
                href="#"
                className="btn btn-lg px-8 h-[56px] min-h-[56px] rounded-full border-transparent bg-tgi-green hover:bg-tgi-green hover:brightness-125 hover:border-transparent"
              >
                Read More
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-100">
          <div className="container max-w-screen-xl px-6 mx-auto">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 relative shadow-[-2rem_-2rem_0_0_#FFC73C] rounded-[48px] overflow-hidden">
                <Image
                  className="rounded-[48px]"
                  src="/static/images/home-img-03.jpg"
                  alt=""
                  width={1224}
                  height={600}
                  priority
                />
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 -translate-y-10 rounded-l-3xl bg-tgi-green p-8">
                <div className="text-2xl text-white">
                  TGI strive to become the “transporter of choice” of natural gas serving customers
                  in the domestic markets of Sumatra and Batam, as well as the export markets of
                  Singapore and Malaysia.
                </div>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="w-1/2">
                <h3 className="text-4xl text-tgi-darkblue font-black">Trusted By</h3>
              </div>
              <div className="w-1/2">
                <Image
                  className="rounded-3xl"
                  src="/static/images/home-img-04.png"
                  alt=""
                  width={758}
                  height={243}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container max-w-screen-xl px-6 mx-auto">
            <div className="mb-8">
              <h3 className="text-4xl text-tgi-darkblue font-black">Latest News</h3>
            </div>
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
            </div>
            <div className="text-center mt-12">
              <Link
                href="/vaksinasi-covid"
                className="btn btn-lg px-8 h-[56px] min-h-[56px] rounded-full border-transparent text-slate-600 bg-slate-200 hover:bg-slate-300 hover:border-transparent"
              >
                More News
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
