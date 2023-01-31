import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-tgi-darkblue border-t-[12px] border-tgi-green">
      <div className="container max-w-screen-xl px-6 mx-auto">
        <div className="flex pb-10">
          <div className="w-1/2 pr-8">
            <div className="flex">
              <div className="w-1/3">
                <div className="bg-tgi-green p-8 rounded-b-3xl">
                  <Image
                    className=""
                    src="/static/images/logo-tgi-white.svg"
                    alt="TGI Logo"
                    width={130}
                    height={180}
                    priority
                  />
                </div>
              </div>
              <div className="w-2/3 text-white py-10 pl-8">
                <h4 className="font-bold">PT Transportasi Gas Indonesia</h4>
                <div>
                  Jalan Kebon Sirih Raya No. 1,
                  <br />
                  Jakarta 10340, Indonesia
                  <br />
                  P: +62 21 508 52000
                  <br />
                  F: +62 21 310 3757 / 3545
                  <br />
                  E: public.relations@tgi.co.id
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex justify-between gap-4 py-10">
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#" className="text-white hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    Operation & Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    Corporate Activity
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    Investor Relations
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#" className="text-white hover:underline">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    Procurement
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#" className="text-white hover:underline">
                    Legal Disclaimer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    Copyright
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 py-4">
        <div className="text-white text-center">All Rights Reserved © 2023. Transgasindo</div>
      </div>
    </footer>
  )
}
