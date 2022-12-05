import React from 'react'
import { AboutUs, Contacts, Footer, Home, Menu, Navbar } from './components'
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

    {/* Home Page */} {/* BG and  */}
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
        <Contacts />
      </div>
    </div>

    {/* Footer */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>

  </div>
  /* End Main */
)

export default App