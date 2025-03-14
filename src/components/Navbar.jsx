import React from 'react'
import { assets } from '../assets_frontend/assets.js';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="logo" />

        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink>
                <li className='py-1'>HOME</li>
                <hr />
            </NavLink>
            <NavLink>
                <li className='py-1'>ALL DOCTORS</li>
                <hr />
            </NavLink>
            <NavLink>
                <li className='py-1'>ABOUT</li>
                <hr />
            </NavLink>
            <NavLink>
                <li className='py-1'>CONTACT</li>
                <hr />
            </NavLink>
        </ul>
        <div>
            <button>Create Account</button>
        </div>
    </div>
  )
}

export default Navbar
