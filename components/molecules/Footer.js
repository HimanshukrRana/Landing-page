import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className="footer-wrap">
      <div className="f-top-wrap">
        <div className="container relative z-[1] mx-auto lg:p-[69px]">
          <div className="-mb-[220px] rounded-2xl bg-yellow p-[70px] text-center shadow-lg ">
            <h1 className=" font-bold text-black smm:text-3xl md:text-5xl">
              Start upgrading your <br /> skills free for this month
            </h1>
            <p className="pt-5 text-black lg:text-xl">
              Build your site for free and take as long as you need
            </p>
            <div className="ending-btn flex flex-col justify-center gap-6 pt-5 lg:flex-row">
              <button className="btn-header  flex justify-center gap-2 rounded-md bg-black p-4 text-white hover:border-2 hover:border-black hover:bg-yellow hover:text-black">
                <span>
                  <h4>Try it Yourself</h4>
                </span>
                <span className="">
                  <Image src="/images/Vector-btn.png" alt="btn" width="22" height="18" />
                </span>
              </button>
              <button className="btn-header  flex justify-center gap-2 rounded-md bg-black p-4 text-white hover:border-2 hover:border-black hover:bg-yellow hover:text-black">
                <span>
                  <h4>Get Started</h4>
                </span>
                <span className="">
                  <Image
                    src="/images/Vector-btn.png"
                    alt="btn"
                    width="22"
                    height="18"
                    className="hover:text-black"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="f-bottom-wrap bg-black text-white lg:p-[97px]">
        <div className="container mx-auto pt-[160px]">
          <div className="flex smm:flex-col lg:flex-row lg:justify-between">
            <div className=" flex  justify-center">
              <Image
                src="/images/Frame 26.png"
                alt="logo"
                className="logo"
                width="32"
                height="32"
              />
              <a href="#" className="p-2 text-3xl font-bold">
                Mancode.
              </a>
            </div>
            <div className="nav-menu ml-8 p-1 smm:mt-6 lg:mt-0">
              <ul className="flex items-center  gap-7 font-thin smm:flex-col lg:flex-row lg:text-3xl">
                <li>
                  <a href="#" className="hover:text-yellow">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-2 bg-grey" />
          <div className="social font-mono flex smm:flex-col lg:flex-row lg:justify-between lg:pt-[1.75rem]">
            <div className="icon flex justify-center gap-[3rem] p-[14px] text-[24px] lg:justify-center lg:gap-4 lg:p-[4px] ">
              <a href="www.facebook.com" className="hover:text-yellow">
                <Icon icon="uim:facebook" color="gray" />
              </a>
              <a href="www.instagram.com">
                <Icon icon="icon-park-twotone:instagram" color="gray" />
              </a>
              <a href="www.linkedin.com">
                <Icon icon="uim:linkedin" color="gray" />
              </a>
              <a href="www.twitter.com">
                <Icon icon="ph:twitter-logo-duotone" color="gray" />
              </a>
              <a href="www.gmail.com">
                <Icon icon="simple-icons:gmail" color="gray" />
              </a>
            </div>
            <hr className="bg-grey lg:hidden  lg:w-[1322px]" />
            <h4 className="flex justify-center pt-4 text-[24px] lg:pt-0">
              © 2023 Copyright. <span className="text-yellow"> Hkr</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
