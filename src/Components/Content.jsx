import React from 'react'

const Content = () => {
  return (
    <div className='bg-gray-900 text-white flex flex-col p-3 gap-8 mt-40'>
        <div className='flex sm:justify-between flex-wrap items-center justify-center gap-3 '>
            <div>
                <img src="https://qodematrix.com/wp-content/uploads/2023/10/MotionArtEffect-logo.png" alt="" />
            </div>
            <div>
                <p className='bg-white text-black p-3 rounded-sm font-semibold'>Purchase Now</p>
            </div>
        </div>


        <div className='flex justify-center gap-12 w-5/6 flex-wrap p-6  sm:justify-between'>
            <div className='flex flex-col  items-center w-40 text-2xl'>
                <p className='bg-gradient-to-r bg-clip-text text-transparent from-orange-400 to-purple-600 font-semibold'>Transform Your Website</p>
                <p>With Motion Art Effect</p>
                
            </div>

            <div className='flex flex-col gap-9  w-6/6 sm:w-4/6 justify-center'>
                <p className='text-5xl'>Attract Your Visitors Attention With Colorful</p>
                <p className='text-5xl bg-gradient-to-r bg-clip-text text-transparent from-orange-400 to-purple-600 font-semibold'>Motion Art Effect</p>
                <p className='text-gray-300'>Unleash the power of creativity with Motion Art for Elementor -your ultimate solution for seamlessly intergrating captivating animation</p>
            </div>
        
        </div>

        <div className='flex flex-col justify-center p-10 gap-7'>
      <div className='flex justify-center'><p className='text-3xl'>Trusted by thousands of users arround the world</p></div>

        <div className='flex sm:justify-between flex-wrap justify-center gap-4'>
        <div className='flex justify-center items-center gap-2'>
            <div>
                <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img2.png" alt="" />
            </div>
            <div>
                <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png" alt="" />
                <p>4.5 Score, 9 Reviews</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <div>
                <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img1.png" alt="" />
            </div>
            <div>
                <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png" alt="" />
                <p>4.5 Score, 9 Reviews</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <div>
                <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img3.png" alt="" />
            </div>
            <div>
                <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png" alt="" />
                <p>4.5 Score, 9 Reviews</p>
            </div>
        </div>
       
        </div>
        </div>
    </div>
  )
}

export default Content