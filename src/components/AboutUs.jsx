import React from 'react'
import { mission, vision, values } from '../assets'
import AboutUs from '../style'

const AboutUs = () => (
  <section id='about-us'>

    {/* Main */}
    <div className='flex items-center justify-center min-h-screen'>

      {/* Img Layout */}
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg-grid-cols-1'>
          
          {/* Section */}
          <div className='relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30'>

            {/* Image */}
            <div className='h-96 w-72'>
              <img src={mission} alt="mission" className='object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' />
            </div>

            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:from-primary/70 group-hover:via-primary/60 group-hover:to-primary/70' />

            {/* Texts */}
            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>

              <h1 className='text-3xl text-white font-primary_md'>Mission</h1>

              <p className='mb-3 text-white transition-opacity duration-300 opacity-0 font-primary_italic group-hover:opacity-100'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quos libero dolores consectetur excepturi, distinctio molestias? Consequuntur, maiores quisquam nesciunt dicta, nam fuga necessitatibus debitis quo blanditiis eum, harum eos.</p>

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