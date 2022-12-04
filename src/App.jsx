import React from 'react'
import { AboutUs, Contacts, Footer, Home, Menu, Navbar } from './components'
import styles from './style'

const App = () => (

  /* Main Div Container */
  <div className='w-full overflow-hidden bg-primary'>
    
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Home Page */} {/* BG and  */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>

    {/* Content */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div>
        <AboutUs />
        <Menu />
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