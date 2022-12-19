import Image from 'next/image'
import React from 'react'

export default function Hosting() {
  return (
    <div className=" p-8">
      <div className="flex smm:flex-col lg:flex-row">
        <div className="img">
          <Image src="/images/Frame c.png" alt="" width="700" height="500" />
        </div>
        <div className="img-text p-[1.5rem] ">
          <h1 className=" py-5 text-5xl font-bold">The language for building web pages</h1>
          <p className="py-7 pb-[2.75rem] text-xl">
            Go live on a fast, reliable, and hassle-free hosting network that scales with your
            business with one click and go code!
          </p>
          <button className="btn-header  flex gap-2 rounded-md bg-black p-5 text-white">
            <span>
              <h4>Try it Yourself</h4>
            </span>
            <span className="">
              <Image src="/images/Vector-btn.png" alt="btn" width="22" height="18" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
