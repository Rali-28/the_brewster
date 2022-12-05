import React from 'react'
import { AboutUs, Contacts, Home, Menu, Navbar } from './components'
import styles from './style'

const App = () => (

  /* Main Div Container */
  <div className='w-full overflow-hidden'>
    
    {/* Navbar */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Home Page */}
    <div className={` ${styles.flexStart}`}>
      <div className={`bg-[url('./assets/home_bg.jpg')] ${styles.boxWidth}`}>
        <Home />
      </div>
    </div>

    {/* Content */}
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div>
        <Menu className='py-3' />
        <AboutUs />
      </div>
    </div>

    {/* Footer */}
    <div className={`${styles.flexCenter} bg-primary mt-10 pt-2`}>
      <div className={`${styles.boxWidth}`}>
         <Contacts />
      </div>
    </div>

  </div>
  /* End Main */
)

export default App