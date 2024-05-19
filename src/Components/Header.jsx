import React from 'react'
import logo from './motionarteffect-img2.png'
const Header = () => {
  return (
    <div className='bg-gray-700 flex text-white h-15 p-5 sm:justify-between  justify-center flex-wrap items-center gap-3 fixed top-0 w-full '>
        <div className='flex  justify-center text-center items-center gap-1'>
         <img src={logo}  className='h-9'/>
        <a  href="" className='text-2xl'>envato <span className='text-green-500 font-sans '>market</span></a>
        </div>
        <div>
            <div>
                <a href="" className='bg-green-500 rounded-sm p-1.5 text-white'>Buy now</a></div>
        </div>
    </div>
  )
}

export default Header