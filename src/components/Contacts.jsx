import React from 'react'
import styles from '../style'
import { contacts } from '../constants'
import Buttons from './Buttons'
import { logo } from '../assets'

const Contacts = () => (
  <section id='contacts' className='h-full px-5'>


    <h1 className='text-white font-primary_md text-center text-[50px]'>
      CONTACTS
    </h1>
    
    {/* Contacts Layout */}
    <div className={`${styles.layout} pt-[100px] pb-10`}>
      
    {/* Render Location, Working Hours */}
    {contacts.map((contact) => (
      <div key={contact.key}>
        <h1 className='font-primary_md text-[25px] text-white '>
          {contact.title}
        </h1>

        <p className='font-primary text-[20px] text-dimWhite pt-5'>
          {contact.txt}
        </p>
      </div>
      ))}

      {/* Social Media Render */}
      <div>
        <h1 className='font-primary_md text-[25px] text-white'>
          Social Media
        </h1>      
        {/* Social Media buttons */}
        <div className='pt-5'>
          <Buttons />
        </div>
      </div>
    </div>
    {/* End Layout */}

    <hr />

    {/* Footer Section */}
    <footer className='flex justify-center py-10'>
      <div className='border rounded-[20px] bg-white'>
        <img src={logo} alt="logo"/>
      </div>
      
    </footer>
    {/* End Footer */}

  </section>
)


export default Contacts