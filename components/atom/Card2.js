/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Card() {
  return (
    <div>
      <div className="class ">
        <div className="max-w-sm rounded-lg border border-gray-200 bg-yellow p-6 shadow-md hover:bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="img pb-[34px]">
            <img src="/images/Frame 34.png" alt="" />
          </div>

          <a href="#">
            <h5 className="font-mono mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
              Flexible
            </h5>
          </a>
          <p className="font-mono mb-3 text-gray-500 dark:text-gray-400">
            Connect your marketing tools with built-in integrations
          </p>
        </div>
      </div>
    </div>
  )
}
