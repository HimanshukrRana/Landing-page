/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Card() {
  return (
    <div>
      <div className="class ">
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md  dark:border-gray-700 dark:bg-gray-800">
          <div className="img pb-[79px]">
            <img src="/images/Vector.png" alt="" />
          </div>

          <a href="#">
            <h5 className="font-mono mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
              Best Tutors
            </h5>
          </a>
          <p className="font-mono mb-3 text-gray-500 hover:text-yellow dark:text-gray-400">
            Bring your design vision to life in clean, semantic HTML5
          </p>
        </div>
      </div>
    </div>
  )
}
