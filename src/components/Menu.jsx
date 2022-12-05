import React from 'react'
import { menu } from '../constants'

const Menu = () => (

  /* Product Menu Container */
  <section id='menu' className='pt-10 text-center bg-[#89A25B] border-primary border-[15px] mt-4'>
    <h1 className='text-[32px] font-menu text-white'>MENU</h1>
      <div className='grid md:grid-cols-3 md:pb-5'>

        {/* Render Menu Title */}
        {menu.map((menu) => (
          <div key={menu.key} className=''>
            <h4 className='text-[28px] font-menu font-semibold leading-[27px] text-center pt-5 px-5 text-white'>
              {menu.title}
            </h4>

            {/* Render Menu Products */}
              <ul className='text-[24px] mt-4 text-center list-none font-menu text-white'>
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