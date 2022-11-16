import React from 'react'
import Logo1 from "../images/l1.svg";
import Logo2 from "../images/l2.svg";
import Logo3 from "../images/l3.svg";


function LogoSlider() {
  return (
    <div className='h-[auto] bg-[#A02279] text-[#fff] max-w-[1410px] m-auto pt-4 pb-4  flex items-center justify-around'>
      {/* ======== Logo Slider  1 ======= */}
      <div className='max-w-[80px] md:max-w-[170px]  flex items-center justify-center h-[auto]'>
        <img src={Logo1} alt="" className='w-full' />
      </div>
      {/* ======== Logo Slider  2 ======= */}
      <div className='max-w-[80px] md:max-w-[170px]  flex items-center justify-center h-[auto]'>
        <img src={Logo2} alt="" className='w-full' />
      </div>
      {/* ======== Logo Slider  3 ======= */}
      <div className='max-w-[80px] md:max-w-[170px]  flex items-center justify-center h-[auto]'>
        <img src={Logo3} alt="" className='w-full' />
      </div>
    </div>
  )
}

export default LogoSlider