import React from 'react'
import { logo } from '../assets'

const Home = () => (
  <section id='home' className='flex flex-col items-center justify-center'>
    <div>
      <img src={logo} alt="logo" />
    </div>
    <div>
      <h1 className='text-dimBlack font-primary_italic'>
        Created by LogoDesign.net 
      </h1>
    </div>
    
  </section>  
)

export default Home