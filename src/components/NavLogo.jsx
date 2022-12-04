import React from 'react'
import { logo_sm } from '../assets';
import styles from '../style';

const NavLogo = () => (
    <div className={`justify-center flex bg-white rounded-full w-[100px] h-[100px] items-center`}>
        <a href="#">
            <img src={logo_sm} alt='logo' className='w-[50px] h-[50px]' />
        </a>
    </div>
)


export default NavLogo