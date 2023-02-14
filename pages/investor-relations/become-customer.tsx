import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Become Our Customer</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="relative min-h-[400px] bg-tgi-darkblue flex flex-col justify-end">
          <div className="text-center pb-16 relative z-10">
            <h1 className="text-white text-5xl font-extrabold">Become Our Customer</h1>
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
            <div className="flex">
              <div className="w-5/11">
                <h2 className="text-4xl font-bold text-tgi-darkblue mb-8">Business Concept</h2>
                <div className="prose text-justify">
                  <p>
                    The review and selection process for a potential customer is open, transparent
                    and straightforward. TGI will study your needs and the feasibility of delivery,
                    either via current pipeline facilities or if economically viable through a
                    lateral (spur) pipeline. Along with Gas Transmission, TGI also offers related
                    services such as:
                  </p>
                  <ol>
                    <li>
                      24 Hours Monitoring and Control of the gas transportation system and its
                      related facilities.
                    </li>
                    <li>Operation and Maintenance of SCADA and Telecommunications.</li>
                    <li>Operation Coordination, Information and Communication.</li>
                    <li>Interim Emergency Control.</li>
                  </ol>
                </div>
                <div className="prose text-justify mt-10">
                  <h3 className="text-2xl font-bold text-tgi-green mb-4">Service Request Form</h3>
                  <p>
                    In order to become our customer, please download and fill our "Service Request
                    Form" below.
                  </p>
                  <div>
                    <a
                      href="#"
                      className="inline-flex px-6 py-3 rounded-lg bg-tgi-amber text-gray-700 gap-x-3 text-base uppercase no-underline font-medium items-center transition duration-200 shadow-md hover:shadow-lg"
                    >
                      <div className="flex-none">
                        <svg
                          className="w-7 h-7"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 16C8.73478 16 8.48043 16.1054 8.29289 16.2929C8.10536 16.4804 8 16.7348 8 17V22C8 22.2652 8.10536 22.5196 8.29289 22.7071C8.48043 22.8946 8.73478 23 9 23C9.26522 23 9.51957 22.8946 9.70711 22.7071C9.89464 22.5196 10 22.2652 10 22V21H10.5C11.163 21 11.7989 20.7366 12.2678 20.2678C12.7366 19.7989 13 19.163 13 18.5C13 17.837 12.7366 17.2011 12.2678 16.7322C11.7989 16.2634 11.163 16 10.5 16H9ZM10.5 19H10V18H10.5C10.6326 18 10.7598 18.0527 10.8536 18.1464C10.9473 18.2402 11 18.3674 11 18.5C11 18.6326 10.9473 18.7598 10.8536 18.8536C10.7598 18.9473 10.6326 19 10.5 19ZM14 17C14 16.7348 14.1054 16.4804 14.2929 16.2929C14.4804 16.1054 14.7348 16 15 16H15.5C16.4283 16 17.3185 16.3687 17.9749 17.0251C18.6313 17.6815 19 18.5717 19 19.5C19 20.4283 18.6313 21.3185 17.9749 21.9749C17.3185 22.6313 16.4283 23 15.5 23H15C14.7348 23 14.4804 22.8946 14.2929 22.7071C14.1054 22.5196 14 22.2652 14 22V17ZM16 20.915C16.293 20.8119 16.5468 20.6204 16.7263 20.367C16.9058 20.1135 17.0022 19.8106 17.0022 19.5C17.0022 19.1894 16.9058 18.8865 16.7263 18.633C16.5468 18.3796 16.293 18.1881 16 18.085V20.915ZM20 22V17C20 16.7348 20.1054 16.4804 20.2929 16.2929C20.4804 16.1054 20.7348 16 21 16H24C24.2652 16 24.5196 16.1054 24.7071 16.2929C24.8946 16.4804 25 16.7348 25 17C25 17.2652 24.8946 17.5196 24.7071 17.7071C24.5196 17.8946 24.2652 18 24 18H22V19H24C24.2652 19 24.5196 19.1054 24.7071 19.2929C24.8946 19.4804 25 19.7348 25 20C25 20.2652 24.8946 20.5196 24.7071 20.7071C24.5196 20.8946 24.2652 21 24 21H22V22C22 22.2652 21.8946 22.5196 21.7071 22.7071C21.5196 22.8946 21.2652 23 21 23C20.7348 23 20.4804 22.8946 20.2929 22.7071C20.1054 22.5196 20 22.2652 20 22ZM6 5V13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V24C3 24.5304 3.21071 25.0391 3.58579 25.4142C3.96086 25.7893 4.46957 26 5 26H6V27C6 27.7956 6.31607 28.5587 6.87868 29.1213C7.44129 29.6839 8.20435 30 9 30H23C23.7956 30 24.5587 29.6839 25.1213 29.1213C25.6839 28.5587 26 27.7956 26 27V26H27C27.5304 26 28.0391 25.7893 28.4142 25.4142C28.7893 25.0391 29 24.5304 29 24V15C29 14.4696 28.7893 13.9609 28.4142 13.5858C28.0391 13.2107 27.5304 13 27 13H26V9.828C25.9996 9.03276 25.6834 8.27023 25.121 7.708L20.293 2.878C19.7304 2.31572 18.9674 1.9999 18.172 2H9C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5ZM9 4H16V9C16 9.79565 16.3161 10.5587 16.8787 11.1213C17.4413 11.6839 18.2044 12 19 12H24V13H8V5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4ZM8 27V26H24V27C24 27.2652 23.8946 27.5196 23.7071 27.7071C23.5196 27.8946 23.2652 28 23 28H9C8.73478 28 8.48043 27.8946 8.29289 27.7071C8.10536 27.5196 8 27.2652 8 27ZM24 9.828V10H19C18.7348 10 18.4804 9.89464 18.2929 9.70711C18.1054 9.51957 18 9.26522 18 9V4H18.172C18.4372 4.00006 18.6915 4.10545 18.879 4.293L23.707 9.121C23.8946 9.30849 23.9999 9.56281 24 9.828ZM5 15H27V24H5V15Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span>Download SRF Form</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-6/11 pl-16">
                <Image
                  className="rounded-[48px]"
                  src="/static/images/businessconcept.png"
                  alt=""
                  width={800}
                  height={793}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
