import React from 'react'
import { mission, vision, values } from '../assets'
import styles from '../style'
import { aboutUs } from '../constants'

const AboutUs = () => (
  <section id='about-us'>

    {/* Main */}
    <div className={`${styles.main}`}>

      {/* Layout */}
        <div className={`${styles.layout}`}>
          
          {/* Section */}
          <div className={`${styles.section}`}>

            {/* Image Container */}
            <div className={`${styles.img_container}`}>

              {/* Image */}
              <img src={mission} alt="mission" className={`${styles.img}`} />

            </div>

            <div className={`${styles.gradient}`} />

            {/* Texts Container */}
            <div className={`${styles.txt_container}`}>

              {/* TExts */}
              <h1 className={`${styles.txt_h1}`}>Mission</h1>

              <p className={`${styles.txt_p}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quos libero dolores consectetur excepturi, distinctio molestias? Consequuntur, maiores quisquam nesciunt dicta, nam fuga necessitatibus debitis quo blanditiis eum, harum eos.</p>

            </div>
              
          </div>
          {/* End Section */}

        </div>
      {/* End Layout */}

    </div>
    {/* End Main */}
  </section>
)

export default AboutUs