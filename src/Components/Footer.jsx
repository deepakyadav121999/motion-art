import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-gray-900 flex flex-col justify-center items-center gap-10'>
        <div className='flex flex-col justify-center bg-gray-800 w-5/6 p-5 items-center text-white rounded-md '>
            <div className='flex flex-col sm:w-3/5 p-2'>
             <p className='text-3xl'>Supported by All Popular Browsers</p>
            <p className='text-gray-400'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
            </div>
            <div className='flex flex-col w-3/5 p-2'>
                    <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img8.png" alt="" />
            </div>
        </div>



        <div className='flex flex-col items-center'>
            <div className='flex flex-col text-white sm:w-3/6 items-center text-center p-2'>
                <p className='text-3xl sm:text-4xl'>An All-Round Plugin With Powerful Features</p>
                <p className='text-gray-400 sm:text-1xl'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
            </div>


            <div className='flex  justify-center p-4 flex-wrap text-white gap-8'>
                <div className='sm:w-1/4 p-2 bg-gray-800 rounded-md w-1/1'>
                    <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img9.png" alt="" />
                    <p className='text-3xl'>Light Weight</p>
                    <p className='text-gray-300'>Motion Art for Elementor is designed to be lightweight.</p>
                </div>

                <div className='sm:w-1/4 p-2 bg-gray-800 rounded-md w-1/1'>
                    <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img6.png" alt="" />
                    <p className='text-3xl'>100% Responsive</p>
                    <p className='text-gray-300'>Create a consistent visual experience across all devices.</p>
                </div>

                <div className='sm:w-1/4 p-2 bg-gray-800 rounded-md w-1/1'>
                    <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img7.png" alt="" />
                    <p className='text-3xl'>User Friendly Interface</p>
                    <p className='text-gray-300'>Ensure a smooth experience for both applicants and administrators.</p>
                </div>
                
                
                
            </div>
        </div>
    </div>
    <div className='flex justify-between bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-700 p-5 text-gray-300  gap-5 flex-wrap-reverse'>
        <div>
            <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        </div>
        <div className='flex gap-3'>
            <p>Documentation</p>
            <p>Support</p>
        </div>
    </div>
    </>
  )
}

export default Footer