import React from 'react'
import HeroTop from '../components/marketing/pageSection/HeroTop'
import LastProducts from '../components/marketing/pageSection/LastProducts'
import Products from '../components/marketing/pageSection/Products'
import Event from '../components/marketing/pageSection/Event'
import Booking from '../components/marketing/pageSection/Booking'
import Footer from '../components/marketing/pageSection/Footer'
// import Header from '../components/marketing/pageSection/Header'

// import HeroTop from '../components/marketing/pageSection/HeroTop'

export default function HomePage() {
  return (
    <>
    {/* <Header /> */}
    <HeroTop />
    <LastProducts />
    <Products />
    <Event />
    <Booking />
    <Footer />
    </>
  )
}
