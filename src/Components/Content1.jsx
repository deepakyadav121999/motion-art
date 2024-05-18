import React from 'react'

const Content1 = () => {
  return (
    <div className='bg-gray-900 text-white p-2 flex justify-center items-center flex-col gap-10'>
        <div className='flex flex-wrap sm:justify-between justify-center  gap-10 sm:p-3'>
            <div className='w-3/5 flex flex-col justify-evenly gap-5'>
            <p className='sm:text-5xl text-3xl'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
            <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
           <div className=' flex justify-center sm:justify-between text-center'>
            <p className='bg-gradient-to-r from-indigo-700 via-purple-500 to-orange-500 p-4 rounded-md font-semibold  sm:w-2/5'>Purchase From Envato</p>
           </div>
            </div>

            <div className='flex justify-center items-center'>
              <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img5.png" alt="" />
            </div>
        </div>






        <div className='flex flex-col gap-10 p-5'>
            <div className='flex justify-center'><p className='text-3xl'>Apply On Any Section Or Enable For Whole Page</p></div>

            <div className='flex justify-center flex-col  flex-wrap gap-10 sm:flex-row'>
                <div className='sm:w-2/5 flex flex-col gap-5 bg-gray-800 p-10 rounded-md sm:mb-12'>
                   <p className='text-3xl'>Apply On Section</p>
                   <p className='text-gray-300'>Apply on section is game-changer, offering an unparalleled way to manage apllication directly from your website</p>
                 <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img11.png" alt="" />
                </div>

                <div className='sm:w-2/5 flex flex-col gap-5 bg-gray-800 p-10 rounded-md sm:mt-12'>
                   <p className='text-3xl'>Apply On Page</p>
                   <p className='text-gray-300'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                 <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img10.png" alt="" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Content1