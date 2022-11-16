import React from 'react'
import Footer from '../components/footer/Footer'
import Discover from '../components/home/Discover'
import HomeHero from '../components/home/HomeHero'
import InspireSection from '../components/home/InspireSection'
import LogoSlider from '../components/home/LogoSlider'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeHero/>
        <LogoSlider/>
        <InspireSection/>
        <Discover/>
        <Footer/>
    </div>
  )
}

export default Home