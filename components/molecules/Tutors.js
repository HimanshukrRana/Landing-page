import Image from 'next/image'
import React from 'react'

export default function Tutors() {
  return (
    <div className="tutors-conataimer font-mono smm:mb-[30px]">
      <div className="wrapper flex  smm:flex-col lg:flex-row">
        <div className="tutors-content flex flex-col smm:p-8 lg:w-[70%] lg:p-[74px]">
          <h1 className="font-bold smm:text-2xl lg:w-[40%] lg:text-4xl">
            Get up and running fast together
          </h1>
          <div className="tutors-card flex py-5 pt-[3.25rem] smm:flex-col lg:flex-row">
            <div className="card1 lg:w-[50%]">
              <div className="img pb-[39px]">
                <Image src="/images/Vector4.png" alt="" width="44" height="40" />
              </div>
              <div className="card1-des">
                <h2 className="text-xl font-bold">University</h2>
                <p className="py-3  lg:w-1/2">
                  Browse hundreds of in-depth videos, courses, and guides to get up and running fast
                </p>
              </div>
            </div>

            <div className="card2 lg:w-[50%]">
              <div className="img pb-[39px]">
                <Image src="/images/Vector3.png" alt="" width="44" height="40" />
              </div>
              <div className="card1-des">
                <h2 className="text-xl font-bold">Showcase</h2>
                <p className="py-3  lg:w-1/2">
                  Get inspired by the incredible websites built by members of the community
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="tutors-img relative smm:ml-[32px] lg:w-[30%]">
            <div className="black-rec  h-[359px] w-[308.93px] bg-black smm:h-[259px] "></div>
            <div className="yellow-rec absolute top-[14px] right-[148px] h-[417px] w-[262px] overflow-hidden rounded-xl bg-yellow font-normal smm:right-0 smm:left-[19px] smm:h-[317px] ">
              <h3 className="text-1xl p-2 smm:p-1 smm:text-[15px]">TUTORS</h3>
              <h1 className="p-2 text-3xl smm:p-1 smm:text-[20px]">Anthoney Mills</h1>

              <div className="yellow-img h-full w-full   object-cover object-top">
                <Image src="/images/pht2.png" alt="" width="1000" height="1000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
