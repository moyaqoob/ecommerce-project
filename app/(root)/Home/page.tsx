import React from 'react' 
import Image from 'next/image'
import images from '@/app/image'
import { products,assets } from '@/public/frontend_assets/assets'
import { assets as admin } from '@/public/admin_assets/assets'
const Home = () => {
  return (
    <div className="flex justify-center top-4 relative">
      <div className='border w-screen h-80 border-red-500 flex  '>
        <div className='md:w-4/5 w-1/2 h-full flex items-center justify-center mr-4 relative'>
          <div className='flex flex-col gap-2 font-serif'>
              <div className='flex items-center justify-center gap-1'>
                <span className='bg-brown-200 w-12 h-[3px]'></span>
                <h1 className='text-md'>OUR BESTSELLERS</h1>
              </div>
                <h1 className='text-2xl ml-8 text-brown-200'>Latest Arrivals</h1>
              <div className='flex items-center justify-center gap-1'>
                <h1 className='text-md'>SHOW NOW </h1>
                <span className='bg-brown-200 w-10 h-[1px]'></span>
              </div>
          </div>
        </div>
        <div className=''> 
          <Image src={assets.hero_img} className='h-full w-64' alt="" />

        </div>
        </div>
      </div>
  )
}

export default Home