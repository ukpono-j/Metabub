import React from 'react'

const HomeHeroLeft = () => {
  return (
    <div className='md:max-w-[640px] sm:w-full lg:max-w-[640px] h-full sm:pr-5 text-center md:text-left  md:pr-5 lg:pr-5'>
      <h1 className=' text-[50px] md:text-[34px] lg:text-[50px] font-normal lg:leading-[58px] leading-[57px]  md:leading-[40px] text-[#434343]'>Rent a <span className='text-[#A02279]'>Place</span> away from <span className='text-[#A02279]'>Home </span>in the <span className='text-[#A02279]'>Metaverse</span></h1>
      <p className='lg:pt-[30px] md:pt-[20px] lg:pt-[19px] pt-[10px] font-normal sm:text-[20px] md:text-[18px] lg:text-[24] text-[18px] md:leading-[32px] text-[#434343]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
      <div className=' md:mt-10 mt-5 mb-5 md:mb-10 w-full   m-auto md:m-0  h-auto  flex items-center'>
        <div className='w-full pb-1 md:pb-1 ' >
          <input type="" placeholder="Search for location" className='border w-full md:h-12 h-11 mt-1 rounded-bl-lg outline-none font-normal rounded-tl-lg pl-6' />
        </div>
        <button className='md:h-12 h-12 border md:w-[230px] w-[120px] bg-[#A02279] text-[#fff]  rounded-br-lg rounded-tr-lg'>Search</button>
      </div>
    </div>
  )
}

export default HomeHeroLeft