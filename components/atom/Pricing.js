/* eslint-disable @next/next/no-img-element */

import React from 'react'

export default function Footer() {
  return (
    <div className="pricing smm:mt-[8rem] md:mt-0">
      {/* <header className="mx-auto flex max-w-6xl justify-between py-8 px-5 lg:px-8">
        <a href="#/" className="text-2xl font-semibold text-gray-900">
          price<span className="text-indigo-600">ly</span>
        </a>
        <nav className="">
          <ul className="text-md flex pt-1.5 lg:pt-0 lg:text-lg">
            <li className="lg:px-4">
              <a href="#/" className="p-3 font-semibold text-gray-500">
                about
              </a>
            </li>
            <li className="lg:px-4">
              <a href="#/" className="p-3 font-semibold text-gray-500">
                blog
              </a>
            </li>
            <li className="lg:pl-4">
              <a href="#/" className="p-3 font-semibold text-gray-500">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </header> */}
      <main className="pb-26 mx-auto max-w-6xl px-8 pt-10">
        <div className="mx-auto mb-14 text-center">
          <h1 className="mb-6 text-4xl font-semibold lg:text-5xl">Choose your package</h1>
          <p className="text-xl font-medium text-gray-500">
            We provide various types of packages just for you
          </p>
        </div>

        <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
          <div className="order-2 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-1 lg:w-full lg:rounded-r-none">
            <div className="mb-7 flex items-center border-b border-gray-300 pb-7">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                alt=""
                className="h-20 w-20 rounded-3xl"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">Development</span>
                <span>
                  <span className="align-top text-xl font-medium text-gray-500">$&thinsp;</span>
                  <span className="text-3xl font-bold">10 </span>
                </span>
                <span className="font-medium text-gray-500">/ user</span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
              <li className="mb-2 flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                <span className="ml-3">
                  1 Module <span className="text-black">Javascript</span>
                </span>
              </li>
              <li className="mb-2 flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                <span className="ml-3">
                  1 Module <span className="text-black">Human Resources</span>
                </span>
              </li>
              {/* <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                <span className="ml-3">
                  <span className="text-black">5 TB</span> cloud storage
                </span>
              </li> */}
            </ul>
            <a
              href="#/"
              className="flex items-center justify-center rounded-xl bg-indigo-600 py-5 px-4 text-center text-xl text-white  hover:border-2  hover:border-blue-700 hover:bg-white hover:text-blue-700"
            >
              Buy Now
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="ml-2"
                alt=""
              />
            </a>
          </div>

          <div className="order-1 w-full flex-1 rounded-3xl bg-gray-900 p-8 text-gray-400 shadow-xl sm:w-96 lg:order-2 lg:mt-0 lg:w-full">
            <div className="mb-8 flex items-center justify-center border-b border-gray-600 pb-8">
              {/* <img
                src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                alt=""
                className="h-20 w-20 rounded-3xl"
              /> */}
              <div className="ml-5 flex flex-col ">
                <span className="text-3xl font-semibold text-white">IT & SOFTWARE</span>
                <span className="">
                  <span>
                    <span className="align-top text-xl font-medium">$&thinsp;</span>
                    <span className="text-3xl font-bold text-white">30 </span>
                  </span>
                  <span className="font-medium">/ user</span>
                </span>
              </div>
            </div>
            <ul className="mb-10 text-xl font-medium">
              <li className="mb-6 flex">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt="" />
                <span className="ml-3">
                  1 Module <span className="text-white">Javascript</span>
                </span>
              </li>
              <li className="mb-6 flex">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt="" />
                <span className="ml-3">
                  1 Module<span className="text-white">Human Resources</span>
                </span>
              </li>
              <li className="mb-6 flex">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt="" />
                <span className="ml-3">
                  2 Module<span className="text-white">Sales Teams</span>
                </span>
              </li>
              <li className="mb-6 flex">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt="" />
                <span className="ml-3">
                  5 Module<span className="text-white">Case Study</span>
                </span>
              </li>
              <li className="mb-6 flex">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt="" />
                <span className="ml-3">
                  <span className="text-white">Pack Marketing Skills</span>
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex items-center justify-center rounded-xl bg-indigo-600 py-6 px-4 text-center text-2xl text-white  hover:border-2  hover:border-blue-700 hover:bg-white hover:text-blue-700"
            >
              Buy Now
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="hover:blue-700  ml-2"
                alt=""
              />
            </a>
          </div>

          <div className="order-3 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-3 lg:w-full lg:rounded-l-none">
            <div className="mb-7 flex items-center border-b border-gray-300 pb-7">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                alt=""
                className="h-20 w-20 rounded-3xl"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">BUSINESS</span>
                <span>
                  <span className="align-top text-xl font-medium text-gray-500">$&thinsp;</span>
                  <span className="text-3xl font-bold">35 </span>
                </span>
                <span className="font-medium text-gray-500">/ user</span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
              <li className="mb-2 flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                <span className="ml-3">
                  2 Module <span className="text-black">Sales Teams</span>
                </span>
              </li>
              <li className="mb-2 flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                <span className="ml-3">
                  1 Module <span className="text-black">Human Resources</span>
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                <span className="ml-3">
                  1 Module <span className="text-black">Javascript</span>
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex items-center justify-center rounded-xl bg-indigo-600 py-5 px-4 text-center text-xl text-white  hover:border-2  hover:border-blue-700 hover:bg-white hover:text-blue-700"
            >
              Buy Now
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="ml-2"
                alt=""
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
