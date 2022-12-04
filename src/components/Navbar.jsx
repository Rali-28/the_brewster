import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => (
  
  /* Navbar Container */
  <nav>
    
    {/* Render Desktop navLinks */}
    <div>
      <ul>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    {/* End Desktop navLinks */}

  </nav>
  /* End Navbar */
)


export default Navbar