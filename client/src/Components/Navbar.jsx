import React from 'react'
import { AlgoliaSearch } from './SearchBar'
import Sun from '../assets/Sun.svg'
import ClockCounterWise from '../assets/ClockCounterWise.svg'
// import Bell from '../assets/Bell.svg'
import Sidee from '../assets/Sidee.svg'
import {
  BellIcon,
}from "@heroicons/react/24/outline";

const Navbar = ({ toggleNotifications }) => {
  return (
    <div className='main-container flex flex-row w-[948px] h-fit justify-between px-7 py-5 align-middle border-b-[1px] bg-bgWhite'>
      <div className='flex gap-4 items-center'>
        <div className='flex gap-2 place-content-center'>
          {/* <img src={Sidee} alt="Logo" className='h-5 w-5' /> */}
          <p className='font-medium text-2xl text-blue-500 font-logowala'>BizBoost</p>
        </div>
        <AlgoliaSearch/>
      </div>
      
      
      <div className='flex flex-row gap-2 align-middle'>
        <div className='place-content-center p-1 rounded-lg'>
          <img className="h-5 w-5" src={Sun} alt="Theme" />
        </div>
        <div className='place-content-center p-1 rounded-lg'>
          <img className="h-5 w-5" src={ClockCounterWise} alt="clock" />
        </div>
        <div 
          className='place-content-center p-1 rounded-lg cursor-pointer'
          onClick={toggleNotifications} // Toggle function passed as prop
          >
          <BellIcon className='size-5 text-[#374151]'/>
        </div>
        {/* <div className='place-content-center p-1 rounded-lg'>
          <img className="h-5 w-5" src={Sidee} alt="Sidee" />
        </div> */}
      </div>
    </div>
  )
}

export default Navbar