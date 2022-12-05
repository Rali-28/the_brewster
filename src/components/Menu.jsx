import React from 'react'
import { menu } from '../constants'

const Menu = () => (

  /* Product Menu Container */
  <section id='menu'>

    {/* Render Menu Title */}
    <div>
      {menu.map((menu) => (
        <div key={menu.key}>
          <h4>
            {menu.title}
          </h4>

          {/* Render Menu Products */}
          <ul>
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