import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' min-w-screen max-h-14 bg-blue-600 flex flex-row items-center'>

            <div>
                <img className='max-h-14 p-2' src='/templogo.png'/>
            </div>

      <nav className="ml-20">
        <ul className="flex items-center space-x-8 text-white font-medium chelsea-market-regular">
          <li className="cursor-pointer hover:underline"><a href='./'>Home</a></li>
          <li className="cursor-pointer hover:underline"><a href='./About'>About</a></li>
          <li className="cursor-pointer hover:underline">Wellness</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>
      </nav>
      <div className='ml-auto'>
        <button className='mr-10 text-white chelsea-market-regular'><a href='./login'>Log In</a></button>
        <button className='mr-10 p-2 px-4 text-white chelsea-market-regular bg-amber-400 rounded-3xl'><a href='./signup'>Sign Up</a></button>
      </div>
    </div>
  )
}

export default Header