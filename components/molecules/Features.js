import React from 'react'

import Card1 from '../atom/Card1'
import Card2 from '../atom/Card2'
import Card3 from '../atom/Card3'

export default function Features() {
  return (
    <div className="p-8">
      <div className="curosel flex bg-grey p-[30px] smm:flex-col lg:flex-row">
        <div className="title font-mono flex gap-6 p-7 smm:flex-col  lg:justify-center">
          <h1 className="text-3xl font-bold lg:text-5xl">Our Features Special For You</h1>
          <h4>We provide various special features for all of you</h4>
        </div>
        <div className="cards flex gap-6 smm:flex-col lg:flex-row">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </div>
  )
}
