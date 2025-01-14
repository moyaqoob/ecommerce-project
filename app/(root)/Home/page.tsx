"use client"
import React, { useContext } from 'react' 
import { products,assets } from '@/public/frontend_assets/assets'
import { assets as admin } from '@/public/admin_assets/assets'
import Image from 'next/image'; // Assuming you're using Next.js for Image optimization
import { ProductItem } from '@/app/Components/ProductItem'
import { ShopContext } from '@/app/context/shop-context'
import Cart from '../Cart/page';
 // Replace with the actual path to your assets

const Home = () => {
  return (
    <>
    
      <div className="border flex flex-col sm:flex-row  border-brown-50 ">
        {/* Left Section */}
        <div className="w-full flex items-center justify-center py-10 p-4 sm:py-0 relative">
          <div className="text-brown-100">
            {/* Title Section */}
            <div className="flex items-center  gap-2">
              <span className="bg-brown-200 w-12 h-[3px]"></span>
              <h1 className="text-md">OUR BESTSELLERS</h1>
            </div>
            {/* Subtitle */}
            <h1 className="text-2xl text-brown-200">Latest Arrivals</h1>
            {/* Call-to-Action */}
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-md">SHOP NOW</h1>
              <span className="bg-brown-200 w-10 h-[1px]"></span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 ">
          <Image
            src={assets.hero_img}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
 
      <div className='flex flex-col items-center justify-center mt-8 gap-5'>
        <a className='flex gap-2 items-center'>
          <p className='text-3xl text-brown-100'>Latest</p>
          <p className='text-3xl text-brown-600'>Collections</p>
          <span className='bg-brown-200 w-12 h-[3px]'></span>
        </a>
        <div className='flex flex-col items-center'>
          <article className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde.</article>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        
      </div>
    </>
  );
};

export default Home;


