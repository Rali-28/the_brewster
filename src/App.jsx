import React from 'react'
import { AboutUs, Contacts, Footer, Menu, Navbar } from './components'

const App = () => (

  /* Main Div Container */
  <div className='bg-primary'>
    
    {/* Navbar */}
    <div>
      <div>
        <Navbar />
      </div>
    </div>

    

    {/* Content */}
    <div>
      <div>
        <AboutUs />
        <Menu />
        <Contacts />
      </div>
    </div>

    {/* Footer */}
    <div>
      <div>
        <Footer />
      </div>
    </div>

  </div>
  /* End Main */
)

export default App