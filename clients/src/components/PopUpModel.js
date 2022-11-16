import React from 'react';
import Close from "../components/images/x.png"
import Right_Arrow from "../components/images/right-arrow.png"
import WalletConnnect from "../components/images/wallet_connect.png"
import Mask from "../components/images/mask.png"
import "./PopUpmodel.css"
import { Link } from 'react-router-dom';

function spotClick() {
    document.getElementById("foo").style.visibility="hidden"
    // var foo = document.getElementById('foo');
    // document.getElementById('hide-button').onclick = function () {
    //     foo.className = 'hidden';
    // };
}

const PopUpModel = () => {
    return (
        <div className='max-w-[1410px]  relative m-auto' id="foo">
            <div className='bg-[#4040404D]  fixed flex p-4 justify-center items-center left-0 w-full top-0  h-screen'>
                <div className='w-[600px] h-[auto] bg-[#fff] rounded-3xl'>
                    <div className='w-full h-auto   flex items-center justify-between pl-8 pr-8 pt-7 pb-7'>
                        <h4 className=' font-bold'><button > Connect Wallet</button></h4>
                        <div className=''>
                            <button type='button'  className='' onClick={spotClick}> <img src={Close} onClick={spotClick} alt='' className='cursor-pointer w-full object-cover ' id='close' /></button>
                        </div>
                    </div>
                    <div className='pl-8 pr-8 pt-3 pb-7'>
                        <p className='font-normal text-base' >Choose your preferred wallet:</p>
                           <Link to="/nfts">
                           <button className='border border-[#CFD8DC] flex items-center justify-between w-full mt-4 mb-3 h-[68px] hover:bg-[#CFD8DC] pl-5 pr-5 rounded-xl'>
                                <div className='flex items-center'>
                                    <div className='h-10 w-10  rounded-full'>
                                        <img src={Mask} alt="" />
                                    </div>
                                    <p className='pl-2 font-bold text-lg text-[#000000]'> metamask</p>
                                </div>
                                <div><img src={Right_Arrow} alt='' /></div>
                            </button>
                           </Link>
                        <button className='border border-[#CFD8DC] flex items-center justify-between w-full mt-4 mb-3 h-[68px] hover:bg-[#CFD8DC] pl-5 pr-5 rounded-xl'>
                            <div className='flex items-center'>
                                <div className='h-10 w-10 '>
                                    <img src={WalletConnnect} alt="" className='w-full h-full object-contain' />
                                </div>
                                <p className='pl-2 font-bold text-lg text-[#000000]'> WalletConnect</p>
                            </div>
                            <div><img src={Right_Arrow} alt='' /></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpModel