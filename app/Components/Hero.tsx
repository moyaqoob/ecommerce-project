import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/frontend_assets/assets'

const Hero = () => {
  return (
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
  )
}

export default Hero