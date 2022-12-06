import React from 'react'
import { BsFacebook, BsInstagram, BsMessenger } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Buttons = () => (

    /* Container */
    <div className='grid grid-cols-2 gap-3 md:grid-cols-4'>

        {/* Facebook Button */}
        <a href="https://www.facebook.com/PriscilasBeanery/">
            <BsFacebook className='text-[30px] text-white hover:text-blue-700'  />
        </a>
     
        {/* Messenger Button */}
        <a href="https://www.facebook.com/PriscilasBeanery/">
            <BsMessenger className='text-[30px] text-white hover:text-blue-700' />
        </a>
        
        {/* Instagram Button */}
        <a href="https://www.instagram.com/priscilasbeanery">
            <BsInstagram className='text-[30px] text-white hover:text-[#F56040]' />
        </a>


        {/* Location Button */}
        <a href="https://www.google.com/maps/place/Priscila's+Beanery+Cafe/@14.2901248,121.1138048,13z/data=!4m5!3m4!1s0x3397d9758e13940b:0xca7963d697278205!8m2!3d14.3135815!4d121.1111091">
            <HiOutlineLocationMarker className='text-[30px] text-white hover:text-black' />
        </a>
        
    </div>
    /* End Container */
)

export default Buttons