import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className="header-container font-mono block h-full w-full">
      <div className="header flex flex-col lg:flex-row  ">
        <div className="header-content pr-7.5 lg: flex flex-col gap-[4rem] bg-grey p-6 md:w-full  lg:p-[6rem]">
          <div className="nav flex">
            <div className="nav-logo flex justify-between">
              <div className="flex">
                <Image
                  src="/images/Component 3.png"
                  alt="logo"
                  className="logo"
                  width="32"
                  height="32"
                />
                <h4 className="p-2 font-bold lg:hidden">mancode.</h4>
              </div>
              <div>
                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto lg:hidden" id="navbar-default">
                  <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
                    <li>
                      <a
                        href="#"
                        className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                      >
                        Tutorials
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                      >
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                      >
                        Resources
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="nav-menu ml-8 p-1 smm:hidden md:hidden lg:block">
              <ul className="text-1.5xl flex  gap-7">
                <li>
                  <a className="">Tutorials</a>
                </li>
                <li>
                  <a>Case Studies</a>
                </li>
                <li>
                  <a>Resources</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="heading">
            <div className=" flex w-full flex-col text-3xl  lg:text-5xl ">
              <h1>Improve your skills</h1>
              <div className="flex flex-row items-center text-3xl  lg:text-5xl">
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
            <h4 className="smm:text-l lg:w-[70%] lg:text-2xl">
              Create, launch, and iterate on new marketing campaigns without distracting your
              product team.
            </h4>
          </div>
          <div className="header-btn">
            <button className="btn-header flex gap-2 rounded-md bg-black p-5 text-white">
              <span>
                <h4>Get Started</h4>
              </span>
              <span className="">
                <Image src="/images/Vector-btn.png" alt="btn" width="22" height="18" />
              </span>
            </button>
          </div>
        </div>
        <div className="header-Image relative  flex  bg-black md:w-full ">
          <Image src="/images/test.svg" alt="Frame1" width="785" height="851" className="h-fit " />
        </div>
      </div>
    </div>
  )
}
