import React from 'react'
import Discover_img from "../images/discover_img.png"
const Discover = () => {
    return (
        <div className='h-auto max-w-[1410px] m-auto md:pt-20 pt-10 md:pb-20 pb-10 relative bg-[#A02279] md:flex  items-center justify-between md:pl-[80px] pl-4 pr-4 pl-[24px] md:pr-[24px]'>
            <div className='lg:max-w-[470px] flex justify-center flex-col items-center md:items-start   h-[auto]'>
                <h1 className='font-bold md:text-3xl text-2xl lg:text-5xl text-3xl text-[#fff]'>Metabnb NFTs</h1>
                <p className='md:pt-5  pt-6  md:text-md lg:text-lg text-sm text-[#fff]'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <div className='pb-12'>
                    <button className='bg-[#fff] border w-[156px] md:h-[48px] h-[44px] flex items-center justify-center rounded-lg  md:mt-6 lg:mt-10 mt-5 text-[#A02279] font-normal text-base'>Learn more</button>
                </div>
            </div>
            <div className='lg:max-w-[644px] lg:h-[auto]  max-w-[100%] mt-3  lg:mr-[80px]'>
                <img src={Discover_img} alt='' className='w-full lg:h-auto' />
            </div>
        </div>
    )
}

export default Discover