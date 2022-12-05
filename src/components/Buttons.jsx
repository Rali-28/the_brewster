import React from 'react'
import { BsFacebook, BsInstagram, BsMessenger } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Buttons = () => (

    /* Container */
    <div className='grid grid-cols-2 gap-0 md:gap-3 md:grid-cols-4'>

        {/* Facebook Button */}
        <a href="#">
            <BsFacebook className='text-[30px] text-white hover:text-blue-700'  />
        </a>
     
        {/* Messenger Button */}
        <a href="#">
            <BsMessenger className='text-[30px] text-white hover:text-blue-700' />
        </a>
        
        {/* Instagram Button */}
        <a href="#">
            <BsInstagram className='text-[30px] text-white hover:text-[#F56040]' />
        </a>


        {/* Location Button */}
        <a href="#">
            <HiOutlineLocationMarker className='text-[30px] text-white hover:text-black' />
        </a>
        
    </div>
    /* End Container */
)

export default Buttons