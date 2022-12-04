import React from 'react'
import { navLinks } from '../constants'
import { map } from '../assets'
import styles from '../style'

const Navbar = () => (
  
  /* Navbar Container */
  <nav className='flex items-center justify-between w-full py-6'>
    
    {/* Render Desktop navLinks */}
    <div>
      <ul className='items-center justify-start flex-1 hidden pt-4 list-none sm:flex'>
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

    {/* Mobile view Navbar */}
    <div>
        
    </div>
    {/* End Mobile View */}

    {/* Middle Logo */}
    <div>
      
    </div>
    {/* End Logo */}

    {/* Location GMap */}
    <div className='flex-row hidden pt-4 sm:flex place-items-center'>

      <div>
        <a src='#' className='items-center justify-end cursor-pointer sm:flex'>
        <img src={map} alt='map'  className='h-[26px] w-[26px] flex-col'/>
        </a>
      </div>
      
      <div>
        <p className={`items-center justify-end cursor-pointer sm:flex hidden ${styles.paragraph} hover:text-black leading-[.9]`}>
          The Brewster's <br />
          Location
        </p>
      </div>

    </div>
    {/* End Map */}

  </nav>
  /* End Navbar */
)


export default Navbar