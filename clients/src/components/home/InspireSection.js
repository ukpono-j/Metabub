import React from 'react'
import Inspire1 from "../images/inspire1.png";
import Inspire2 from "../images/inspire2.png";
import Inspire3 from "../images/inspire3.png";
import Inspire4 from "../images/inspire4.png";
import Inspire5 from "../images/inspire5.png";
import Inspire6 from "../images/inspire6.png";
import Inspire7 from "../images/inspire7.png";
import Inspire8 from "../images/inspire8.png";
import Star from "../images/star.png";
import "./Inspire.css"
const InspireSection = () => {
    return (
        // ======   Inspire Section of the Home Page
        <div className='h-auto w-full max-w-[1410px] m-auto pl-3 pr-3 md:pl-[24px] md:pr-[24px]  lg:pr-[60px] lg:pl-[60px]'>
            {/* ======== Title Heading  */}
            <h1 className='text-center font-bold lg:text-5xl md:text-3xl sm:text-2xl text-[22px]  pt-14 pb-6 p-2 '>Inspiration for your next adventure</h1>
            {/* ==================== Start Inspire Container =============== */}
            <div className='h-full inspire-b md:flex  grid md:flex-wrap md:justify-center w-full'>
                <div className='border w-full h-[auto] lg:m-2 md:m-2  md:w-[370px] lg:flex-1 p-2 mt-3 mb-1 inspire-bx rounded-xl'>
                    <div className='lg:h-[280px] h-[350px]  flex justify-center items-center font-bold rounded-xl'>
                        <img src={Inspire1} alt="" className="h-full w-full object-cover rounded-xl" />
                    </div>
                    <div className='h-auto text-sm  w-full rounded-xl mt-2 mb-[2px]'>
                        <div className='flex justify-between'>
                            <p>Desert king</p>
                            <p className='text-right font-bold'>1MBT per night</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p>2345km away</p>
                            <p className='text-right font-normal'>available for 2weeks stay</p>
                        </div>
                        <div className='mt-3'>
                            <img src={Star} alt='' />
                        </div>
                    </div>
                </div>
                <div className='border w-full h-[auto] lg:m-2 md:m-2  md:w-[370px] lg:flex-1 p-2 mt-3 mb-1 inspire-bx rounded-xl'>
                    <div className='lg:h-[280px] h-[350px]  flex justify-center items-center font-bold rounded-xl'>
                        <img src={Inspire2} alt="" className="h-full w-full object-cover rounded-xl" />
                    </div>
                    <div className='h-auto text-sm  w-full rounded-xl mt-2 mb-[2px]'>
                        <div className='flex justify-between'>
                            <p>Desert king</p>
                            <p className='text-right font-bold'>1MBT per night</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p>2345km away</p>
                            <p className='text-right font-normal'>available for 2weeks stay</p>
                        </div>
                        <div className='mt-3'>
                            <img src={Star} alt='' />
                        </div>
                    </div>
                </div>
                <div className='border w-full h-[auto] lg:m-2 md:m-2  md:w-[370px] lg:flex-1 p-2 mt-3 mb-1 inspire-bx rounded-xl'>
                    <div className='lg:h-[280px] h-[350px]  flex justify-center items-center font-bold rounded-xl'>
                        <img src={Inspire3} alt="" className="h-full w-full object-cover rounded-xl" />
                    </div>
                    <div className='h-auto text-sm  w-full rounded-xl mt-2 mb-[2px]'>
                        <div className='flex justify-between'>
                            <p>Desert king</p>
                            <p className='text-right font-bold'>1MBT per night</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p>2345km away</p>
                            <p className='text-right font-normal'>available for 2weeks stay</p>
                        </div>
                        <div className='mt-3'>
                            <img src={Star} alt='' />
                        </div>
                    </div>
                </div>
                <div className='border w-full h-[auto] lg:m-2 md:m-2  md:w-[370px] lg:flex-1 p-2 mt-3 mb-1 inspire-bx rounded-xl'>
                    <div className='lg:h-[280px] h-[350px] flex justify-center items-center font-bold rounded-xl'>
                        <img src={Inspire4} alt="" className="h-full w-full object-cover rounded-xl" />
                    </div>
                    <div className='h-auto text-sm  w-full rounded-xl mt-2 mb-[2px]'>
                        <div className='flex justify-between'>
                            <p>Desert king</p>
                            <p className='text-right font-bold'>1MBT per night</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p>2345km away</p>
                            <p className='text-right font-normal'>available for 2weeks stay</p>
                        </div>
                        <div className='mt-3'>
                            <img src={Star} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            {/* ==================== End Inspire Container =============== */}

            {/* ==================== Start Inspire Container =============== */}
            <div className='h-full md:flex  grid md:flex-wrap md:justify-center w-full pb-10'>
                <div className='w-full h-[auto] border lg:m-2 md:m-2  md:w-[370px] lg:flex-1 p-2 mt-3 mb-1 inspire-bx rounded-xl'>
                    <div className='border lg:h-[280px] h-[350px]  flex justify-center items-center font-bold rounded-xl'>
                        <img src={Inspire5} alt="" className="h-full w-full object-cover rounded-xl" />
                    </div>
                    <div className='h-auto text-sm  w-full rounded-xl mt-2 mb-[2px]'>
                        <div className='flex justify-between'>
                            <p>Desert king</p>
                            <p className='text-right font-bold'>1MBT per night</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p>2345km away</p>
                            <p className='text-right font-normal'>available for 2weeks stay</p>
                        </div>
                        <div className='mt-3'>
                            <img src={Star} alt='' />
                        </div>
                    </div>
                </div>
                <div className='border w-full h-[auto] lg:m-2 md:m-2  md:w-[370px] lg:flex-1 p-2 mt-3 mb-1 inspire-bx rounded-xl'>
                    <div className='lg:h-[280px] h-[350px]  flex justify-center items-center font-bold rounded-xl'>
                        <img src={Inspire6} alt="" className="h-full w-full object-cover rounded-xl" />
                    </div>
                    <div className='h-auto text-sm  w-full rounded-xl mt-2 mb-[2px]'>
                        <div className='flex justify-between'>
                            <p>Desert king</p>
                            <p className='text-right font-bold'>1MBT per night</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p>2345km away</p>
                            <p className='text-right font-normal'>available for 2weeks stay</p>
                        </div>
                        <div className='mt-3'>
                            <img src={Star} alt='' />
                        </div>
                    </div>
                </div>
                <div className='border w-full h-[auto] lg:m-2 md:m-2  md:w-[370px] lg:flex-1 p-2 mt-3 mb-1 inspire-bx rounded-xl'>
                    <div className='lg:h-[280px] h-[350px]  flex justify-center items-center font-bold rounded-xl'>
                        <img src={Inspire7} alt="" className="h-full w-full object-cover rounded-xl" />
                    </div>
                    <div className='h-auto text-sm  w-full rounded-xl mt-2 mb-[2px]'>
                        <div className='flex justify-between'>
                            <p>Desert king</p>
                            <p className='text-right font-bold'>1MBT per night</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p>2345km away</p>
                            <p className='text-right font-normal'>available for 2weeks stay</p>
                        </div>
                        <div className='mt-3'>
                            <img src={Star} alt='' />
                        </div>
                    </div>
                </div>
                <div className='border w-full h-[auto] lg:m-2 md:m-2  md:w-[370px] lg:flex-1 p-2 mt-3 mb-1 inspire-bx rounded-xl'>
                    <div className='lg:h-[280px] h-[350px] flex justify-center items-center font-bold rounded-xl'>
                        <img src={Inspire8} alt="" className="h-full w-full object-cover rounded-xl" />
                    </div>
                    <div className='h-auto text-sm  w-full rounded-xl mt-2 mb-[2px]'>
                        <div className='flex justify-between'>
                            <p>Desert king</p>
                            <p className='text-right font-bold'>1MBT per night</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p>2345km away</p>
                            <p className='text-right font-normal'>available for 2weeks stay</p>
                        </div>
                        <div className='mt-3'>
                            <img src={Star} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            {/* ==================== End Inspire Container =============== */}

        </div>
    )
}

export default InspireSection