import React from 'react'
import Navbar from '../navbar/Navbar'
import Inspire1 from "../images/inspire1.png";
import Inspire2 from "../images/inspire2.png";
import Inspire3 from "../images/inspire3.png";
import Inspire4 from "../images/inspire4.png";
import Inspire5 from "../images/inspire5.png";
import Inspire6 from "../images/inspire6.png";
import Inspire7 from "../images/inspire7.png";
import Inspire8 from "../images/inspire8.png";
import Inspire9 from "../images/inspire9.png";
import Inspire10 from "../images/inspire10.png";
import Inspire11 from "../images/inspire11.png";
import Inspire12 from "../images/inspire12.png";
import Inspire13 from "../images/inspire13.png";
import Setting from "../images/setting.png"
import Star from "../images/star.png";
import Footer from '../footer/Footer';
import "./Nfts.css"

const Nft = () => {
    return (
        <div>
            <Navbar />
            <div className=' h-full w-full  nft-1'>
                <div className='max-w-[1410px] m-auto'>
                <div className=' justify-center  overflow-x-scroll lg:overflow-x-hidden items-center  flex  pt-3 pb-3   h-auto  max-w-[auto] pl-4 pr-4 lg:pl-0 pr-0 md:pl-20  mt-6 mb-6'>
                    <li className='list-none md:ml-2 mr-2 cursor-pointer min-w-[100px] sm:w-[auto]'>Resturant</li>
                    <li className='list-none md:ml-2 mr-2 cursor-pointer min-w-[100px] sm:w-[auto]'>Cottage</li>
                    <li className='list-none md:ml-2 mr-2 cursor-pointer min-w-[100px] sm:w-[auto]'>Castle</li>
                    <li className='list-none md:ml-2 mr-2 cursor-pointer min-w-[100px] sm:w-[auto]'>Fantast city</li>
                    <li className='list-none md:ml-2 mr-2 cursor-pointer min-w-[100px] sm:w-[auto]'>beach</li>
                    <li className='list-none md:ml-2 mr-2 cursor-pointer min-w-[100px] sm:w-[auto]'>Cabins</li>
                    <li className='list-none md:ml-2 mr-2 cursor-pointer min-w-[100px] sm:w-[auto]'>Off-grid</li>
                    <li className='list-none md:ml-2 mr-2 cursor-pointer min-w-[100px] sm:w-[auto]'>Farm</li>
                    <div className='border w-40 pl-3 pr-3 rounded-lg  flex items-center justify-between h-10 md:ml-5 md:mt-0 mt-2 mr-3 min-w-[140px]'>
                        <div>Location</div>
                        <img src={Setting} alt='' />
                    </div>
                </div>
                </div>
                {/* ======== Nfts Section ========= */}
                <div className=' h-auto  w-full  max-w-[1410px] nft-1 m-auto pl-3 pr-3 md:pl-[24px] md:pr-[24px]  lg:pr-[60px] lg:pl-[60px] pb-20'>
                    {/* ==================== Start Inspire Container =============== */}
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
                    <div className='h-full inspire-b md:flex  grid md:flex-wrap md:justify-center w-full'>
                        <div className='border w-full h-[auto] lg:m-2 md:m-2  md:w-[370px] lg:flex-1 p-2 mt-3 mb-1 inspire-bx rounded-xl'>
                            <div className='lg:h-[280px] h-[350px]  flex justify-center items-center font-bold rounded-xl'>
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
                    {/* ==================== Start Inspire Container =============== */}
                    <div className='h-full inspire-b md:flex  grid md:flex-wrap md:justify-center w-full'>
                        <div className='border w-full h-[auto] lg:m-2 md:m-2  md:w-[370px] lg:flex-1 p-2 mt-3 mb-1 inspire-bx rounded-xl'>
                            <div className='lg:h-[280px] h-[350px]  flex justify-center items-center font-bold rounded-xl'>
                                <img src={Inspire9} alt="" className="h-full w-full object-cover rounded-xl" />
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
                                <img src={Inspire10} alt="" className="h-full w-full object-cover rounded-xl" />
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
                                <img src={Inspire11} alt="" className="h-full w-full object-cover rounded-xl" />
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
                                <img src={Inspire12} alt="" className="h-full w-full object-cover rounded-xl" />
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
                    <div className='h-full inspire-b md:flex  grid md:flex-wrap md:justify-center w-full'>
                        <div className='border w-full h-[auto] lg:m-2 md:m-2  md:w-[370px] lg:flex-1 p-2 mt-3 mb-1 inspire-bx rounded-xl'>
                            <div className='lg:h-[280px] h-[350px]  flex justify-center items-center font-bold rounded-xl'>
                                <img src={Inspire13} alt="" className="h-full w-full object-cover rounded-xl" />
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
                                <img src={Inspire10} alt="" className="h-full w-full object-cover rounded-xl" />
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
                    </div>
                    {/* ==================== End Inspire Container =============== */}


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Nft