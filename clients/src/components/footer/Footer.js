import React from 'react'
import Footer_logo from "../images/footerlogo.svg";
import Facebook from "../images/facebook.png"
import Twitter from "../images/twitter.png"
import Instagram from "../images/instagram.png"
import C from "../images/c.png"

const Footer = () => {
    return (
        <div className='bg-[#1D1D1E] max-w-[1410px] m-auto'>
            <div className=' pt-[60px] text-[#fff] h-[auto] md:flex grid pb-6  md:justify-around justify-start  pl-4'>
                <div className='max-w-[200px] md:h-[auto] h-[100px] flex flex-col justify-between'>
                    <img src={Footer_logo} alt='' className='md:w-[188px] w-[150px]' />
                    <div className='flex items-center'>
                        <div className='h-auto w-auto  ml-1 mr-4 mb-2'>
                            <img src={Facebook} alt='' />
                        </div>
                        <div className='h-auto w-auto  ml-4 mr-4 mb-2'>
                            <img src={Twitter} alt='' />
                        </div>
                        <div className='h-auto w-auto  ml-4 mr-4 mb-2'>
                            <img src={Instagram} alt='' />
                        </div>
                    </div>
                </div>
                <div className='md:w-[200px] w-full h-[auto] md:mt-0 mt-2'>
                    <h5>Community</h5>
                    <li className='leading-[34px] text-[14px] list-none'>NFT</li>
                    <li className='leading-[34px] text-[14px] list-none'>Token</li>
                    <li className='leading-[34px] text-[14px] list-none'>Landlords</li>
                    <li className='leading-[34px] text-[14px] list-none'>Discord</li>
                </div>
                <div className='md:w-[200px] w-full h-[auto] md:mt-0 mt-2'>
                    <h5>Places</h5>
                    <li className='leading-[34px] text-[14px] list-none'>Castle</li>
                    <li className='leading-[34px] text-[14px] list-none'>Farms</li>
                    <li className='leading-[34px] text-[14px] list-none'>Beach</li>
                    <li className='leading-[34px] text-[14px] list-none'>Learn more</li>
                </div>
                <div className='md:w-[200px] w-full h-[auto] md:mt-0 mt-2'>
                    <h5>About Us</h5>
                    <li className='leading-[34px] text-[14px] list-none'>Road map</li>
                    <li className='leading-[34px] text-[14px] list-none'>Creators</li>
                    <li className='leading-[34px] text-[14px] list-none'>Career</li>
                    <li className='leading-[34px] text-[14px] list-none'>Contact us</li>
                </div>
            </div>
            <div className='font-normal md:text-[16px] text-[14px] text-[#fff] md:pl-[70px] pl-4 flex items-center  pt-2 pb-10'><img src={C} alt="" className='pr-2' /> 2022 Metabnb</div>
        </div>
    )
}

export default Footer