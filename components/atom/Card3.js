/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Card() {
  return (
    <div>
      <div className="class ">
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md  dark:border-gray-700 dark:bg-gray-800">
          <div className="pb-[78px] ">
            <img src="/images/Vector2.png" alt="" className="" />
          </div>

          <a>
            <h5 className="font-mono mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
              Easy Access
            </h5>
          </a>
          <p className="font-mono mb-3 text-gray-500  hover:text-yellow">
            Connect your marketing tools with built-in integrations
          </p>
        </div>
      </div>
    </div>
  )
}
