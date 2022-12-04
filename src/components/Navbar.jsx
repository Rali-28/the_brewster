import React from 'react'
import { navLinks } from '../constants'
import { layout } from '../style'
import { logo_sm } from '../assets'


const Navbar = () => (
  
  /* Navbar Container */
  <nav className='flex items-center justify-between w-full py-6'>
    
    {/* Render Desktop navLinks */}
    <div className='flex justify-start w-[1/3]'>
      <ul className='flex-1 hidden pt-4 list-none items-left sm:flex'>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-primary_md
          tracking-widest
          text-[18px]
          ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Middle Logo */}
    <div className='sm:flex hidden justify-center w-[1/3]'>
      
    </div>
    {/* End Logo */}

    {/* Middle Logo */}
    <div>
      
    </div>
    {/* End Logo */}

    {/* Location GMap */}
    <div className='justify-end hidden pt-4 sm:flex place-items-center w-[1/3]'>

      <div>
        <a src='#' className={`items-center items cursor-pointer sm:flex ${layout.map_text}`}>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-none w-[26px] h-[26px] stroke-[1.5] stroke-black mr-2'>

            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          
            The Brewster's <br />
            Location
        </a>
      </div>
    </div>
    {/* End Map */}

  </nav>
  /* End Navbar */
)


export default Navbar