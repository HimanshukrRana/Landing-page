import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="mx-w-full font-mono relative mb-3 flex flex-wrap  items-center  py-3 md:hidden">
        <div className="container  flex flex-wrap items-center justify-between ">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <a href="#" className="flex items-center">
              <Image
                src="/images/Component 3.png"
                alt="logo"
                className="logo"
                width="32"
                height="32"
              />
              <span className="self-center whitespace-nowrap pl-2 text-xl font-semibold dark:text-black">
                mancode.
              </span>
            </a>
            <button
              className="block cursor-pointer rounded border border-solid   px-3 py-1 text-xl leading-none text-black outline-none focus:outline-none md:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Icon icon="uis:bars" />
            </button>
          </div>
          <div
            className={
              ' flex w-full flex-row-reverse items-center md:block md:w-auto' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="absolute top-8 mt-4 flex flex-col rounded-lg border border-black bg-grey p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
              <li>
                <a
                  href="#"
                  className="block rounded py-2 pl-3 pr-4 text-black hover:bg-black hover:text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-black hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-black hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-black hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-black hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
            {/* <ul className="flex list-none flex-col lg:ml-auto lg:flex-row ">
              <li className="nav-item">
                <a
                  className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square leading-lg text-lg text-black opacity-75"></i>
                  <span className="ml-2">Tutorials</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter leading-lg text-lg text-black opacity-75"></i>
                  <span className="ml-2">Case Studies</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest leading-lg text-lg text-black opacity-75"></i>
                  <span className="ml-2">Resources</span>
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  )
}
