import React from 'react'
import { useState } from 'react'
import { NavLogo } from '.'
import { navLinks } from '../constants'
import { layout } from '../style'
import { burger, close } from '../assets'


const Navbar = () => {

  /* Burger Toggle for Mobile View */
  const [toggle, setToggle] = useState(false);

  return (
  /* Navbar Container */
  <nav className='grid items-center grid-cols-3 gap-5 '>

      {/* Desktop View Navlinks */}
        <div className='flex items-center justify-start'>
          <ul className='items-center hidden text-center list-none items-left md:flex'>
            {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className={`font-primary_md
              tracking-widest
              text-[18px]
              text-white
              ${index === navLinks.length -1 ? 'mr-0' : 'mr-5'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

      {/* End Desktop View */}
      
      {/* Mobile View Nav */}
      <div className='order-first col-span-1 md:hidden'> 

        {/* Mobile Menu Toggle Button */}
        <div>
          <img src={toggle ? close : burger}
          onClick={() => setToggle((prev => !prev))} 
          alt="menu" 
          className='w-[40px]'/>

            {/* Render  */}
            <div className={`${toggle ? 'flex' : 'hidden'} bg-[#89A25B] sidebar absolute p-2 rounded-md justify-center`}>
              <ul>
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-primary_md
                    tracking-widest
                    text-[18px]
                   text-white
                    ${index === navLinks.length -1 ? 'mr-0' : 'mr-5'}`}>

                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
      {/* End Mobile View */}

      {/* Center Logo */}
      <div className='content-center '>
          <div className='flex justify-center py-2'>
            <NavLogo />
          </div>
      </div >
      {/* End Center */}

      {/* Location Button */}
      <div className='justify-end hidden md:flex'>
          <div>
            <a src='home' className={`items-center items cursor-pointer sm:flex ${layout.map_text}`}>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-none w-[26px] h-[26px] stroke-[1.5] stroke-black mr-2 stroke-white'>

                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
    
                The Brewster's <br />
                Location
            </a>
          </div>
        </div>
      {/* End Location */}

  </nav>
  /* End Nav */
  )

}
export default Navbar``