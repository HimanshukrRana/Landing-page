import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className="nav flex smm:hidden md:block">
      <div className="flex">
        <div className="flex">
          <Image src="/images/Component 3.png" alt="logo" className="logo" width="32" height="32" />

          <h4 className="p-2 text-xl font-bold lg:hidden">mancode.</h4>
        </div>
        <div className="nav-menu ml-8 md:p-[11px] lg:p-1">
          <ul className="text-1.5xl flex  gap-7">
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
    </div>
  )
}
