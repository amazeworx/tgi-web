import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import classNames from 'classnames'

const Header = () => {
  const [isShrunk, setShrunk] = useState(false)

  useEffect(() => {
    // console.log('USE EFFECT')
    // const onScroll = () => {
    //   console.log('scrolled')
    //   setShrunk((isShrunk) => {
    //     if (
    //       !isShrunk &&
    //       (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    //     ) {
    //       return true
    //     }
    //     if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
    //       return false
    //     }
    //     return isShrunk
    //   })
    // }
    // window.addEventListener('scroll', onScroll)
    // return () => window.removeEventListener('scroll', onScroll)
    // window.addEventListener('scroll', () => {
    //   setShrunk(window.scrollY > 50)
    //   console.log(window.scrollY)
    // })
  }, [])

  return (
    <header
      className={classNames('bg-tgi-darkblue pt-0 fixed top-0 left-0 right-0 z-50 header', {
        'header-shrink': isShrunk,
      })}
    >
      <div className="h-10 py-2 text-right px-8 flex justify-end gap-x-6">
        <div className="inline-flex gap-x-2">
          <a href="#" className="p-px text-white/90 hover:text-white/100">
            <svg
              className="w-[22px] h-[22px]"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99935 1.66666C12.2635 1.66666 12.546 1.67499 13.4343 1.71666C14.3218 1.75832 14.926 1.89749 15.4577 2.10416C16.0077 2.31582 16.471 2.60249 16.9343 3.06499C17.3581 3.48157 17.686 3.98548 17.8952 4.54166C18.101 5.07249 18.241 5.67749 18.2827 6.56499C18.3218 7.45332 18.3327 7.73582 18.3327 9.99999C18.3327 12.2642 18.3243 12.5467 18.2827 13.435C18.241 14.3225 18.101 14.9267 17.8952 15.4583C17.6866 16.0148 17.3586 16.5188 16.9343 16.935C16.5177 17.3586 16.0138 17.6865 15.4577 17.8958C14.9268 18.1017 14.3218 18.2417 13.4343 18.2833C12.546 18.3225 12.2635 18.3333 9.99935 18.3333C7.73518 18.3333 7.45268 18.325 6.56435 18.2833C5.67685 18.2417 5.07268 18.1017 4.54102 17.8958C3.98462 17.6871 3.48062 17.3591 3.06435 16.935C2.64052 16.5185 2.31263 16.0145 2.10352 15.4583C1.89685 14.9275 1.75768 14.3225 1.71602 13.435C1.67685 12.5467 1.66602 12.2642 1.66602 9.99999C1.66602 7.73582 1.67435 7.45332 1.71602 6.56499C1.75768 5.67666 1.89685 5.07332 2.10352 4.54166C2.31205 3.98514 2.64002 3.48109 3.06435 3.06499C3.48074 2.64102 3.98471 2.3131 4.54102 2.10416C5.07268 1.89749 5.67602 1.75832 6.56435 1.71666C7.45268 1.67749 7.73518 1.66666 9.99935 1.66666ZM9.99935 5.83332C8.89428 5.83332 7.83447 6.27231 7.05307 7.05371C6.27167 7.83511 5.83268 8.89492 5.83268 9.99999C5.83268 11.1051 6.27167 12.1649 7.05307 12.9463C7.83447 13.7277 8.89428 14.1667 9.99935 14.1667C11.1044 14.1667 12.1642 13.7277 12.9456 12.9463C13.727 12.1649 14.166 11.1051 14.166 9.99999C14.166 8.89492 13.727 7.83511 12.9456 7.05371C12.1642 6.27231 11.1044 5.83332 9.99935 5.83332ZM15.416 5.62499C15.416 5.34872 15.3063 5.08377 15.1109 4.88842C14.9156 4.69307 14.6506 4.58332 14.3743 4.58332C14.0981 4.58332 13.8331 4.69307 13.6378 4.88842C13.4424 5.08377 13.3327 5.34872 13.3327 5.62499C13.3327 5.90126 13.4424 6.16621 13.6378 6.36156C13.8331 6.55691 14.0981 6.66666 14.3743 6.66666C14.6506 6.66666 14.9156 6.55691 15.1109 6.36156C15.3063 6.16621 15.416 5.90126 15.416 5.62499ZM9.99935 7.49999C10.6624 7.49999 11.2983 7.76338 11.7671 8.23222C12.236 8.70106 12.4993 9.33695 12.4993 9.99999C12.4993 10.663 12.236 11.2989 11.7671 11.7678C11.2983 12.2366 10.6624 12.5 9.99935 12.5C9.33631 12.5 8.70042 12.2366 8.23158 11.7678C7.76274 11.2989 7.49935 10.663 7.49935 9.99999C7.49935 9.33695 7.76274 8.70106 8.23158 8.23222C8.70042 7.76338 9.33631 7.49999 9.99935 7.49999Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#" className="p-px text-white/90 hover:text-white/100">
            <svg
              className="w-[22px] h-[22px]"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2792 15.2825H13.0583V11.8017C13.0583 10.9717 13.0417 9.90333 11.9 9.90333C10.7425 9.90333 10.5658 10.8067 10.5658 11.7408V15.2825H8.34417V8.125H10.4775V9.1H10.5067C10.805 8.53833 11.53 7.94417 12.6133 7.94417C14.8633 7.94417 15.28 9.42583 15.28 11.3533V15.2825H15.2792ZM5.83583 7.14583C5.6663 7.14605 5.49838 7.11281 5.34172 7.04801C5.18506 6.9832 5.04272 6.88812 4.92288 6.7682C4.80304 6.64828 4.70804 6.50588 4.64334 6.34918C4.57864 6.19247 4.5455 6.02454 4.54583 5.855C4.546 5.59986 4.62182 5.3505 4.7637 5.13846C4.90558 4.92641 5.10716 4.76119 5.34294 4.66371C5.57872 4.56623 5.83811 4.54085 6.08832 4.59078C6.33852 4.64072 6.5683 4.76373 6.74859 4.94426C6.92888 5.12478 7.05159 5.35472 7.10121 5.60498C7.15082 5.85525 7.12511 6.11461 7.02732 6.35026C6.92953 6.58592 6.76406 6.78728 6.55183 6.92889C6.33959 7.0705 6.09097 7.146 5.83583 7.14583ZM6.94917 15.2825H4.72167V8.125H6.95V15.2825H6.94917ZM16.3917 2.5H3.6075C2.99417 2.5 2.5 2.98333 2.5 3.58083V16.4192C2.5 17.0167 2.995 17.5 3.60667 17.5H16.3883C17 17.5 17.5 17.0167 17.5 16.4192V3.58083C17.5 2.98333 17 2.5 16.3883 2.5H16.3917Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#" className="p-px text-white/90 hover:text-white/100">
            <svg
              className="w-[22px] h-[22px]"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99935 1.66666C5.39685 1.66666 1.66602 5.39749 1.66602 9.99999C1.66602 14.1592 4.71352 17.6067 8.69768 18.2325V12.4083H6.58102V9.99999H8.69768V8.16416C8.69768 6.07582 9.94102 4.92249 11.8452 4.92249C12.7568 4.92249 13.7102 5.08499 13.7102 5.08499V7.13499H12.6602C11.6243 7.13499 11.3018 7.77749 11.3018 8.43666V9.99999H13.6127L13.2435 12.4083H11.3018V18.2325C15.2852 17.6075 18.3327 14.1583 18.3327 9.99999C18.3327 5.39749 14.6018 1.66666 9.99935 1.66666Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#" className="p-px text-white/90 hover:text-white/100">
            <svg
              className="w-[22px] h-[22px]"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4683 4.71333C17.8321 4.99474 17.1574 5.17956 16.4666 5.26167C17.1947 4.82619 17.7397 4.14084 17.9999 3.33333C17.3166 3.74 16.5674 4.025 15.7866 4.17917C15.2621 3.61798 14.5669 3.2458 13.8091 3.12049C13.0512 2.99517 12.2732 3.12374 11.596 3.48621C10.9187 3.84868 10.3802 4.42474 10.0642 5.12483C9.74812 5.82492 9.67221 6.60982 9.84826 7.3575C8.46251 7.28804 7.10687 6.92794 5.86933 6.30055C4.63179 5.67317 3.54003 4.79254 2.66492 3.71583C2.35516 4.24788 2.19238 4.85269 2.19326 5.46833C2.19326 6.67667 2.80826 7.74417 3.74326 8.36917C3.18993 8.35175 2.64878 8.20232 2.16492 7.93333V7.97667C2.16509 8.78142 2.44356 9.56135 2.95313 10.1842C3.46269 10.8071 4.17199 11.2346 4.96076 11.3942C4.4471 11.5334 3.90851 11.5539 3.38576 11.4542C3.60814 12.1469 4.04159 12.7527 4.62542 13.1868C5.20924 13.6209 5.9142 13.8615 6.64159 13.875C5.91866 14.4428 5.0909 14.8625 4.20566 15.1101C3.32041 15.3578 2.39503 15.4285 1.48242 15.3183C3.0755 16.3429 4.93 16.8868 6.82409 16.885C13.2349 16.885 16.7408 11.5742 16.7408 6.96833C16.7408 6.81833 16.7366 6.66667 16.7299 6.51833C17.4123 6.02514 18.0013 5.41418 18.4691 4.71417L18.4683 4.71333Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end">
          <label
            tabIndex={0}
            className="inline-flex gap-x-3 items-center text-white/90 hover:text-white text-sm cursor-pointer"
          >
            <span>English</span>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.90573 4.50001L0.305725 1.90001C-0.0109418 1.58335 -0.0816084 1.22101 0.093725 0.813012C0.268392 0.404345 0.580725 0.200012 1.03073 0.200012H6.18072C6.63072 0.200012 6.94306 0.404345 7.11772 0.813012C7.29306 1.22101 7.22239 1.58335 6.90573 1.90001L4.30572 4.50001C4.20572 4.60001 4.09739 4.67501 3.98073 4.72501C3.86406 4.77501 3.73906 4.80001 3.60573 4.80001C3.47239 4.80001 3.34739 4.77501 3.23073 4.72501C3.11406 4.67501 3.00573 4.60001 2.90573 4.50001Z"
                fill="currentColor"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36"
          >
            <li>
              <a href="#" className="py-2">
                English
              </a>
            </li>
            <li>
              <a href="#" className="py-2">
                Indonesian
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute top-0 left-12 z-10">
        <div className="bg-white relative shadow-md p-2 lg:p-3 xl:pt-6 xl:pb-5 xl:px-4 3xl:p-4">
          <div className="absolute top-10 left-0 -translate-x-full -translate-y-2 w-5 h-20 bg-amber-400 rounded">
            <div className="absolute top-0 -left-1 flex items-center justify-center h-full w-1">
              <div className="flex flex-col gap-y-2">
                <div className="w-1.5 h-2 rounded-l bg-amber-500"></div>
                <div className="w-1.5 h-2 rounded-l bg-amber-500"></div>
                <div className="w-1.5 h-2 rounded-l bg-amber-500"></div>
                <div className="w-1.5 h-2 rounded-l bg-amber-500"></div>
                <div className="w-1.5 h-2 rounded-l bg-amber-500"></div>
              </div>
            </div>
            <div className="absolute w-1 h-20 rounded-sm bg-amber-500 top-0 left-1/2 -translate-x-1/2"></div>
          </div>
          <Link href="/" className="active:bg-tgi-darkblue">
            <Image
              className="h-auto w-[64px] md:w-[80px] lg:w-[92px] xl:w-[100px] 3xl:w-[120px]"
              src="/static/images/logo-tgi.svg"
              alt="TGI Logo"
              width={120}
              height={167}
              priority
            />
          </Link>
          <div className="absolute top-10 right-0 translate-x-full -translate-y-2 w-5 h-20 bg-amber-400 rounded">
            <div className="absolute top-0 -right-1 flex items-center justify-center h-full w-1">
              <div className="flex flex-col gap-y-2">
                <div className="w-1.5 h-2 rounded-r bg-amber-500"></div>
                <div className="w-1.5 h-2 rounded-r bg-amber-500"></div>
                <div className="w-1.5 h-2 rounded-r bg-amber-500"></div>
                <div className="w-1.5 h-2 rounded-r bg-amber-500"></div>
                <div className="w-1.5 h-2 rounded-r bg-amber-500"></div>
              </div>
            </div>
            <div className="absolute w-1 h-20 rounded-sm bg-amber-500 top-0 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </div>
      <div className="relative h-16 bg-gradient-to-t from-[#FFB245] via-[#FFC73C] to-[#FFE29B] border-y-2 border-[#FFC73C] shadow-md">
        <div className="pl-[256px] pr-8 h-full xl:pl-[220px] 3xl:pl-[256px]">
          <div className="flex h-full items-center justify-between">
            <nav className="main-nav">
              <ul className="flex gap-x-2">
                <li>
                  <div className="dropdown dropdown-hover">
                    <label
                      tabIndex={0}
                      className="inline-flex gap-x-2 items-center px-4 py-2 cursor-pointer font-medium rounded-lg hover:bg-white/40 transition duration-200"
                    >
                      <Link href="/about">
                        <span>About Us</span>
                      </Link>
                      <svg
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.90573 4.50001L0.305725 1.90001C-0.0109418 1.58335 -0.0816084 1.22101 0.093725 0.813012C0.268392 0.404345 0.580725 0.200012 1.03073 0.200012H6.18072C6.63072 0.200012 6.94306 0.404345 7.11772 0.813012C7.29306 1.22101 7.22239 1.58335 6.90573 1.90001L4.30572 4.50001C4.20572 4.60001 4.09739 4.67501 3.98073 4.72501C3.86406 4.77501 3.73906 4.80001 3.60573 4.80001C3.47239 4.80001 3.34739 4.77501 3.23073 4.72501C3.11406 4.67501 3.00573 4.60001 2.90573 4.50001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link href="/about/#our-business" className="active:bg-tgi-darkblue">
                          Our Business
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/#vision-mission" className="active:bg-tgi-darkblue">
                          Vision & Mission
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/#shareholders" className="active:bg-tgi-darkblue">
                          Shareholders
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/#top-management" className="active:bg-tgi-darkblue">
                          Top Management
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/#corporate-identity" className="active:bg-tgi-darkblue">
                          Corporate Identity
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/#corporate-culture" className="active:bg-tgi-darkblue">
                          Corporate Culture
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="dropdown dropdown-hover">
                    <label
                      tabIndex={0}
                      className="inline-flex gap-x-2 items-center px-4 py-2 cursor-pointer font-medium rounded-lg hover:bg-white/40 transition duration-200"
                    >
                      <Link href="/operation-services">
                        <span>Operation & Services</span>
                      </Link>
                      <svg
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.90573 4.50001L0.305725 1.90001C-0.0109418 1.58335 -0.0816084 1.22101 0.093725 0.813012C0.268392 0.404345 0.580725 0.200012 1.03073 0.200012H6.18072C6.63072 0.200012 6.94306 0.404345 7.11772 0.813012C7.29306 1.22101 7.22239 1.58335 6.90573 1.90001L4.30572 4.50001C4.20572 4.60001 4.09739 4.67501 3.98073 4.72501C3.86406 4.77501 3.73906 4.80001 3.60573 4.80001C3.47239 4.80001 3.34739 4.77501 3.23073 4.72501C3.11406 4.67501 3.00573 4.60001 2.90573 4.50001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link href="/operation-services" className="active:bg-tgi-darkblue">
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/operation-services#gas-pipeline-system"
                          className="active:bg-tgi-darkblue"
                        >
                          Gas Pipeline System
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/operation-services#pipeline-information"
                          className="active:bg-tgi-darkblue"
                        >
                          Pipeline Information
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="dropdown dropdown-hover">
                    <label
                      tabIndex={0}
                      className="inline-flex gap-x-2 items-center px-4 py-2 cursor-pointer font-medium rounded-lg hover:bg-white/40 transition duration-200"
                    >
                      <Link href="/corporate-activities">
                        <span>Corporate Activities</span>
                      </Link>
                      <svg
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.90573 4.50001L0.305725 1.90001C-0.0109418 1.58335 -0.0816084 1.22101 0.093725 0.813012C0.268392 0.404345 0.580725 0.200012 1.03073 0.200012H6.18072C6.63072 0.200012 6.94306 0.404345 7.11772 0.813012C7.29306 1.22101 7.22239 1.58335 6.90573 1.90001L4.30572 4.50001C4.20572 4.60001 4.09739 4.67501 3.98073 4.72501C3.86406 4.77501 3.73906 4.80001 3.60573 4.80001C3.47239 4.80001 3.34739 4.77501 3.23073 4.72501C3.11406 4.67501 3.00573 4.60001 2.90573 4.50001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-96"
                    >
                      <li>
                        <Link href="/corporate-activities#gcg" className="active:bg-tgi-darkblue">
                          Good Corporate Governance (GCG)
                        </Link>
                      </li>
                      <li>
                        <Link href="/corporate-activities#hsse" className="active:bg-tgi-darkblue">
                          Health Safety Security & Environment (HSSE)
                        </Link>
                      </li>
                      <li>
                        <Link href="/corporate-activities#csr" className="active:bg-tgi-darkblue">
                          Corporate Social Responsibility (CSR)
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/corporate-activities#award" className="active:bg-tgi-darkblue">
                          Award & Certificate
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="dropdown dropdown-hover">
                    <label
                      tabIndex={0}
                      className="inline-flex gap-x-2 items-center px-4 py-2 cursor-pointer font-medium rounded-lg hover:bg-white/40 transition duration-200"
                    >
                      <span>Investor Relations</span>
                      <svg
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.90573 4.50001L0.305725 1.90001C-0.0109418 1.58335 -0.0816084 1.22101 0.093725 0.813012C0.268392 0.404345 0.580725 0.200012 1.03073 0.200012H6.18072C6.63072 0.200012 6.94306 0.404345 7.11772 0.813012C7.29306 1.22101 7.22239 1.58335 6.90573 1.90001L4.30572 4.50001C4.20572 4.60001 4.09739 4.67501 3.98073 4.72501C3.86406 4.77501 3.73906 4.80001 3.60573 4.80001C3.47239 4.80001 3.34739 4.77501 3.23073 4.72501C3.11406 4.67501 3.00573 4.60001 2.90573 4.50001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72"
                    >
                      <li>
                        <Link
                          href="/investor-relations/annual-report"
                          className="active:bg-tgi-darkblue"
                        >
                          Annual Report
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/investor-relations/become-customer"
                          className="active:bg-tgi-darkblue"
                        >
                          How to Become Our Customer (SRF)
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="active:bg-tgi-darkblue">
                          Customer Survey Index
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="dropdown dropdown-hover">
                    <label
                      tabIndex={0}
                      className="inline-flex gap-x-2 items-center px-4 py-2 cursor-pointer font-medium rounded-lg hover:bg-white/40 transition duration-200"
                    >
                      <span>Information</span>
                      <svg
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.90573 4.50001L0.305725 1.90001C-0.0109418 1.58335 -0.0816084 1.22101 0.093725 0.813012C0.268392 0.404345 0.580725 0.200012 1.03073 0.200012H6.18072C6.63072 0.200012 6.94306 0.404345 7.11772 0.813012C7.29306 1.22101 7.22239 1.58335 6.90573 1.90001L4.30572 4.50001C4.20572 4.60001 4.09739 4.67501 3.98073 4.72501C3.86406 4.77501 3.73906 4.80001 3.60573 4.80001C3.47239 4.80001 3.34739 4.77501 3.23073 4.72501C3.11406 4.67501 3.00573 4.60001 2.90573 4.50001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link href="/news" className="active:bg-tgi-darkblue">
                          News
                        </Link>
                      </li>
                      <li>
                        <Link href="/procurement" className="active:bg-tgi-darkblue">
                          Procurement
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="active:bg-tgi-darkblue">
                          Career
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <label
                    tabIndex={0}
                    className="inline-flex gap-x-2 items-center px-4 py-2 cursor-pointer font-medium rounded-md hover:bg-white/40 transition duration-200"
                  >
                    <Link href="/contact">Contact</Link>
                  </label>
                </li>
              </ul>
            </nav>
            <div className="relative hidden 3xl:block">
              <div className="absolute -top-3 -left-8 -translate-x-full -translate-y-2 w-5 h-20 bg-amber-400 rounded">
                <div className="absolute top-0 -left-1 flex items-center justify-center h-full w-1">
                  <div className="flex flex-col gap-y-2">
                    <div className="w-1.5 h-2 rounded-l bg-amber-500"></div>
                    <div className="w-1.5 h-2 rounded-l bg-amber-500"></div>
                    <div className="w-1.5 h-2 rounded-l bg-amber-500"></div>
                    <div className="w-1.5 h-2 rounded-l bg-amber-500"></div>
                    <div className="w-1.5 h-2 rounded-l bg-amber-500"></div>
                  </div>
                </div>
                <div className="absolute w-1 h-20 rounded-sm bg-amber-500 top-0 left-1/2 -translate-x-1/2"></div>
                <div className="absolute top-0 -right-1 flex items-center justify-center h-full w-1">
                  <div className="flex flex-col gap-y-2">
                    <div className="w-1.5 h-2 rounded-r bg-amber-500"></div>
                    <div className="w-1.5 h-2 rounded-r bg-amber-500"></div>
                    <div className="w-1.5 h-2 rounded-r bg-amber-500"></div>
                    <div className="w-1.5 h-2 rounded-r bg-amber-500"></div>
                    <div className="w-1.5 h-2 rounded-r bg-amber-500"></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="input w-full max-w-xs h-10 pl-10 bg-white/50 border border-tgi-amber"
                />
                <div className="absolute top-0 left-0 p-2.5">
                  <svg
                    className="w-5 h-5 text-slate-600"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0252 13.8475L18.5943 17.4158L17.4152 18.595L13.8469 15.0258C12.5191 16.0902 10.8677 16.6691 9.16602 16.6667C5.02602 16.6667 1.66602 13.3067 1.66602 9.16666C1.66602 5.02666 5.02602 1.66666 9.16602 1.66666C13.306 1.66666 16.666 5.02666 16.666 9.16666C16.6684 10.8683 16.0895 12.5198 15.0252 13.8475ZM13.3535 13.2292C14.4111 12.1416 15.0017 10.6837 14.9993 9.16666C14.9993 5.94332 12.3885 3.33332 9.16602 3.33332C5.94268 3.33332 3.33268 5.94332 3.33268 9.16666C3.33268 12.3892 5.94268 15 9.16602 15C10.683 15.0024 12.1409 14.4118 13.2285 13.3542L13.3535 13.2292Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
