import React from 'react'
import styles from '../style'
import { aboutUs } from '../constants'

const AboutUs = () => (
  <section id='about-us'>

    {/* Main */}
    <div className={`${styles.main}`}>
      
      {/* Layout */}
        <div className={`${styles.layout}`}>
        {aboutUs.map((About) => (

          /*  Section */
          <div key={About.key} className={`${styles.section}`}>
          <h1 className='text-center font-primary_md text-[25px]'>{About.title}</h1>
            {/* Image Container */}
            <div className={`${styles.img_container}`}>

              {/* Image */}
              <img src={About.img} alt={About.id} className={`${styles.img}`} />

            </div>

            <div className={`${styles.gradient}`} />

            {/* Texts Container */}
            <div className={`${styles.txt_container}`}>

              {/* Texts */}
              <h1 className={`${styles.txt_h1}`}>{About.title}</h1>

              <p className={`${styles.txt_p}`}>{About.message}</p>

            </div>
              
          </div>
          /* End Section */
        ))}

          

        </div>
      {/* End Layout */}

    </div>
    {/* End Main */}
  </section>
)

export default AboutUs