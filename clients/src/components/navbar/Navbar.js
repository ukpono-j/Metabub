import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png";
import "./Navbar.css"
import Popup from 'reactjs-popup';
import PopUpModel from '../PopUpModel';


const Navbar = () => {
  return (
    <div className=''>
      {/* <div className='h-24 max-w-[1410px] m-auto  md:flex hidden items-center justify-between pl-3 pr-3 md:pl-[24px] md:pr-[24px]  lg:pr-[70px] lg:pl-[70px] '>
        <div className=' w-[200px]'>
          <img src={Logo} alt='' className='w-full' />
        </div>

        <div className='flex  items-center list-none'>
          <li className='ml-5 mr-5 font-normal text-[17px] cursor-pointer'>Home</li>
          <li className='ml-5 mr-5 font-normal text-[17px] cursor-pointer'>Place to stay</li>
          <li className='ml-5 mr-5 font-normal text-[17px] cursor-pointer'>NFTs</li>
          <li className='ml-5 mr-5 font-normal text-[17px] cursor-pointer'>Community</li>
        </div>

        <div className=''>
          <button className=' w-[170px] h-[47px] rounded-lg bg-[#A02279] text-[#fff]'>Connect wallet</button>
        </div>
      </div> */}
      <nav className="navbar h-24 max-w-[1410px] m-auto    pl-4 pr-4 md:pl-[24px] md:pr-[24px]  lg:pr-[70px] lg:pl-[70px]">
        {/* <!-- LOGO --> */}
        <Link to="/">
          <div className=' w-[200px]'>
            <img src={Logo} alt='' className='w-full' />
          </div></Link>
        {/* <!-- NAVIGATION MENU --> */}
        <div className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">&#9776;</label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            <div className='menu_1'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="">Place to  stay</Link>
              </li>
              <li className="services">
                <Link to="">NFTs</Link>
              </li>
              <li>
                <Link to="">Community</Link>
              </li>
            </div>
            <div className='ch1'>
              <Popup trigger={<button type='button' className='w-[170px] h-[47px] text-[14px] md:text-[20px] lg:text-[17px] rounded-lg bg-[#A02279] text-[#fff]'>Connect wallet</button>} position="right center">
                <div>
                  <PopUpModel />
                </div>
              </Popup>
              {/* <button className='w-[170px] h-[47px] text-[14px] md:text-[20px] lg:text-[17px] rounded-lg bg-[#A02279] text-[#fff]' onClick={walletClick}>Wallet</button> */}
            </div>
            {/* ========= Popup model ============ */}

          </div>
        </div>
        <div className='ch2'>
          <Popup trigger={<button type='button' className='w-[170px] h-[47px] rounded-lg bg-[#A02279] text-[#fff]'> Connect  wallet</button>} position="right center">
            <div>
              <PopUpModel />
            </div>
          </Popup>
        </div>
      </nav>
    </div>
  )
}

export default Navbar