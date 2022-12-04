import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => (
  
  /* Navbar Container */
  <nav className='items-center justify-between w-full py-6 clex'>
    
    {/* Render Desktop navLinks */}
    <div>
      <ul className='items-center justify-start flex-1 pt-4 list-none sm:flex'>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-primary_md
          tracking-widest
          text-[16px]
          ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile view Navbar */}
      <div>
        
      </div>
      {/* End Mobile View */}

      {/* Middle Logo */}
      <div>

      </div>
      {/* End Logo */}

      {/* Location GMap */}
      <div>
          
      </div>
      {/* End Map */}

    </div>
    {/* End Desktop navLinks */}

  </nav>
  /* End Navbar */
)


export default Navbar