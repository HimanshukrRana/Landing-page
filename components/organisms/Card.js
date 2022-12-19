import React from 'react'

import Pricing from '../atom/Pricing'
import Faqs from '../molecules/Faqs'
import Features from '../molecules/Features'
import Footer from '../molecules/Footer'
import Header from '../molecules/Header'
import Hosting from '../molecules/Hosting'
import Logo from '../molecules/Logo'
import Tutors from '../molecules/Tutors'

export default function Card() {
  return (
    <div className="container max-w-full transition-all">
      <Header />
      <Logo />
      <Features />
      <Hosting />

      <Tutors />

      <Pricing />

      <Faqs />

      <Footer />
    </div>
  )
}
