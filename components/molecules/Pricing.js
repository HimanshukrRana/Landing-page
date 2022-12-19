import React from 'react'

const Pricing = () => {
  return (
    <div className="bg-gray-100 pt-12 font-sans">
      <div className="flex min-h-screen items-center justify-center">
        <div className="">
          <div className="text-center font-semibold">
            <h1 className="text-3xl lg:text-5xl">
              <span className=" text-black">Choose your package </span>
            </h1>
            <p className="w-full px-8 pt-6 text-xl font-normal text-gray-400 lg:w-full">
              We provide various types of packages just for you
            </p>
          </div>
          <div className="flex pt-24 smm:flex-col lg:flex-row">
            {/* <!-- Basic Card --> */}
            <div className="w-96 rounded-3xl bg-white p-8 pr-16 text-center shadow-xl">
              <h1 className="text-2xl font-semibold text-black">Development</h1>
              <p className="pt-2 tracking-wide">
                <span className="align-top text-gray-400">$ </span>
                <span className="text-3xl font-semibold">10</span>
                <span className="font-medium text-gray-400">/ user</span>
              </p>
              <hr className="border-1 mt-4" />
              <div className="pt-8">
                <p className="text-left font-semibold text-gray-400">
                  {/* <span className="material-icons align-middle">done</span> */}
                  <span className="pl-2">
                    1 Module <span className="text-black">Javascript</span>
                  </span>
                </p>
                <p className=" text-left font-semibold text-gray-400">
                  {/* <span className="material-icons align-middle">done</span> */}
                  <span className="pl-2">
                    1 Module <span className="text-black">Human Resources</span>
                  </span>
                </p>
                {/* <p className="pt-5 text-left font-semibold text-gray-400">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    <span className="text-black">5 TB</span> cloud storage
                  </span>
                </p> */}

                <a href="#" className="">
                  <p className="mt-8 w-full rounded-xl bg-black py-4 text-white">
                    <span className="font-medium ">Buy Now</span>
                    {/* <span className="material-icons pl-2 align-middle text-sm">east</span> */}
                  </p>
                </a>
              </div>
            </div>
            {/* <!-- StartUp Card --> */}
            <div className="w-80 scale-125 transform rounded-3xl border-4 border-white bg-gray-900 p-8 text-center text-white shadow-xl">
              <h1 className="text-2xl font-semibold text-white">IT & SOFTWARE</h1>
              <p className="pt-2 tracking-wide">
                <span className="align-top text-gray-400">$ </span>
                <span className="text-3xl font-semibold">30</span>
                <span className="font-medium text-gray-400">/ user</span>
              </p>
              <hr className="border-1 mt-4 border-gray-600" />
              <div className="pt-8">
                <p className="text-left font-semibold text-gray-400">
                  {/* <span className="material-icons align-middle">done</span> */}
                  <span className="pl-2">
                    1 Module <span className="text-white">Javascript</span>
                  </span>
                </p>
                <p className="text-left font-semibold text-gray-400">
                  {/* <span className="material-icons align-middle">done</span> */}
                  <span className="pl-2">
                    1 Module <span className="text-white">Human Resources</span>
                  </span>
                </p>
                <p className="text-left font-semibold text-gray-400">
                  {/* <span className="material-icons align-middle">done</span> */}
                  <span className="pl-2">
                    2 Module <span className="text-white">Sales Teams</span>
                  </span>
                </p>
                <p className="text-left font-semibold text-gray-400">
                  {/* <span className="material-icons align-middle">done</span> */}
                  <span className="pl-2">
                    5 Module <span className="text-white">Case Study</span>
                  </span>
                </p>
                <p className="text-left font-semibold text-gray-400">
                  {/* <span className="material-icons align-middle">done</span> */}
                  <span className="pl-2">Pack Marketing Skills</span>
                </p>

                <a href="#" className="">
                  <p className="mt-8 w-full rounded-xl bg-black py-4 text-white hover:bg-white hover:text-blue-700">
                    <span className="font-medium">Buy Now</span>
                    {/* <span className="material-icons pl-2 align-middle text-sm">east</span> */}
                  </p>
                </a>
              </div>
              <div className="absolute top-4 right-4">
                <p className="rounded-full bg-blue-700 px-4 py-1 text-xs font-semibold uppercase">
                  Popular
                </p>
              </div>
            </div>
            {/* <!-- BUSINESS Card --> */}
            <div className="w-96 rounded-3xl bg-white p-8 pl-16 text-center shadow-xl">
              <h1 className="text-2xl font-semibold text-black">BUSINESS</h1>
              <p className="pt-2 tracking-wide">
                <span className="align-top text-gray-400">$ </span>
                <span className="text-3xl font-semibold">50</span>
                <span className="font-medium text-gray-400">/ user</span>
              </p>
              <hr className="border-1 mt-4" />
              <div className="pt-8">
                <p className="text-left font-semibold text-gray-400">
                  {/* <span className="material-icons align-middle">done</span> */}
                  <span className="pl-2">
                    2 Module <span className="text-black">Sales Teams</span>
                  </span>
                </p>
                <p className="text-left font-semibold text-gray-400">
                  {/* <span className="material-icons align-middle">done</span> */}
                  <span className="pl-2">
                    1 Module <span className="text-black">Human Resources</span>
                  </span>
                </p>
                <p className="text-left font-semibold text-gray-400">
                  {/* <span className="material-icons align-middle">done</span> */}
                  <span className="pl-2">
                    1 Module <span className="text-black">Javascript</span>
                  </span>
                </p>

                <a href="#" className="">
                  <p className="mt-8 w-full rounded-xl bg-black py-4 text-white">
                    <span className="font-medium">Buy Now</span>
                    {/* <span className="material-icons pl-2 align-middle text-sm">east</span> */}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
