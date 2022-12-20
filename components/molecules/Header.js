import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// import Mobile_nav from '../atom/Mobile_nav'
// import Nav from '../atom/Nav'
import Navbar from '../atom/Navbar'
import Navbar2 from '../molecules/Navbar'

export default function Header() {
  return (
    <div className="header-container font-mono block h-full w-full">
      <div className="header flex flex-col lg:flex-row  ">
        <div className="header-content pr-7.5 lg: flex flex-col gap-[4rem] bg-grey p-6 md:w-full  lg:p-[6rem]">
          <Navbar />
          {/* <Mobile_nav /> */}
          {/* <Nav /> */}
          <Navbar2 />
          <div className="heading">
            <div className=" flex w-full flex-col text-3xl  md:text-[5rem] lg:text-5xl">
              <h1>Improve your skills</h1>
              <div className="flex flex-row items-center text-3xl  md:mt-[3rem] md:mb-[3rem] md:text-[5rem] lg:mt-0 lg:mb-0 lg:text-5xl">
                <h1 className="mr-[15px]"> by </h1>
                <Image
                  className="h-[29px] w-[29px] p-1"
                  src="/images/Vector-h.png"
                  alt=""
                  width="22"
                  height="22"
                />
                <h1 className="ml-[15px]">study </h1>
              </div>
              <h1>with coding</h1>
            </div>
          </div>
          <div className="desc">
            <Image src="/images/Group 2.png" alt="grp" width="83" height="75" />
            <h4 className="smm:text-l lg:w-[70%] lg:text-xl">
              Create, launch, and iterate on new marketing campaigns without distracting your
              product team.
            </h4>
          </div>
          <div className="header-btn">
            <button className="btn-header flex gap-2 rounded-md bg-black p-5 text-white hover:border-2 hover:border-black hover:bg-white hover:text-black">
              <span>
                <h4>
                  <Link href="/Contact">Get Started</Link>
                </h4>
              </span>
              <span className="">
                <Image src="/images/Vector-btn.png" alt="btn" width="22" height="18" />
              </span>
            </button>
          </div>
        </div>
        <div className="header-Image relative  flex  bg-black md:w-full  ">
          <Image
            src="/images/test.svg"
            alt="Frame1"
            width="785"
            height="851"
            className="m-auto h-fit"
          />
        </div>
      </div>
    </div>
  )
}
