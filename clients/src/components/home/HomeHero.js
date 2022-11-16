import React from 'react'
import HomeHeroLeft from './HomeHeroLeft'
import HomeHeroRight from './HomeHeroRight'
import "./HomeHero.css"

const HomeHero = () => {
  return (
    <div className=' home-hero max-w-[1410px] m-auto'>
         {/* <div className='md:flex grid gap-y-2.5 items-center justify-between m-auto pt-14 pb-6 max-w-[1200px] border'> */}
         <div className=' md:flex  grid  justify-between pl-3 pr-3 md:pl-[24px] md:pr-[24px]  lg:pr-[70px] lg:pl-[70px]  items-center pt-14 pb-16'>
         <HomeHeroLeft/>
        <HomeHeroRight/>
         </div>
    </div>
  )
}

export default HomeHero