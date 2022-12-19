import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className="logo-container h-full w-full">
      <div className="logo-wrapper flex justify-between gap-9 p-[6rem] smm:flex-col lg:flex-row">
        <div className="edx">
          <Image src="/images/edx.png" alt="" height="123" width="203" className="color-black" />
        </div>
        <div className="cousera flex items-center">
          <Image src="/images/coursera.png" alt="" height="40" width="335" />
        </div>
        <div className="udemy">
          <Image src="/images/udemy.png" alt="" height="126" width="335" />
        </div>
      </div>
    </div>
  )
}
