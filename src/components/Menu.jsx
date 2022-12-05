import React from 'react'
import { menu } from '../constants'
import styles from '../style'

const Menu = () => (

  /* Product Menu Container */
  <section id='menu' className='pt-10 text-center'>
    <h1>MENU</h1>
      <div className='grid sm:grid-cols-3'>

        {/* Render Menu Title */}
        {menu.map((menu) => (
          <div key={menu.key} className=''>
            <h4 className='text-18px font-menu font-semibold leading-[27px] text-center pt-5 px-5'>
              {menu.title}
            </h4>

            {/* Render Menu Products */}
              <ul className='mt-4 text-center list-none font-menu'>
                {menu.product.map((prod, index) => (
                  <li key={prod.id}>
                    {prod.id}
                  </li>
                ))}
              </ul>
          </div>
          ))}
        </div>
    {/* End prod render */}

  </section>
  /* End Menu Container */

)


export default Menu