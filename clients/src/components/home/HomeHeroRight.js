import React from 'react'
import HeroImg1 from "../images/Hero1.png";
import HeroImg2 from "../images/Hero2.png";
import HeroImg3 from "../images/Hero3.png";
import HeroImg4 from "../images/Hero4.png";

const HomeHeroRight = () => {
  return (
    <div className='md:w-[506px] md:h-[auto] sm:h-[auto] h-[auto] flex'>
      {/* <img src={heroImg}  alt='' className='w-full object-contain object-center' /> */}
      <div className='flex flex-wrap m-1 '>
        <div className='h-[auto] lg:h-[auto] md:h-[auto] sm:h-[auto] w-[100%] lg:max-w-[240px] md:mt-20'>
          <img src={HeroImg1} alt="" className='w-full object-contain' />
        </div>
        <div className='h-[auto]   lg:h-[auto] md:h-[auto] sm:h-[auto] w-[100%] lg:max-w-[240px] mt-2 mb-1'>
          <img src={HeroImg2} alt="" className='w-full object-contain' />
        </div>
      </div>
      <div className='flex flex-wrap m-1'>
        <div className='h-[auto] lg:h-[auto] md:h-[auto] sm:h-[auto] w-[100%] lg:max-w-[240px]'>
          <img src={HeroImg3} alt="" className='w-full object-contain' />
        </div>
        <div className='h-[auto] mt-2 lg:h-[auto] md:h-[auto] sm:h-[auto] w-[100%] lg:max-w-[240px] md:mb-20'>
          <img src={HeroImg4} alt="" className='w-full object-contain' />
        </div>
      </div>
    </div>
  )
}

export default HomeHeroRight