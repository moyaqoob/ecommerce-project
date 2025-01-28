import React from 'react'
import Image from 'next/image'
import  { assets } from '@/public/frontend_assets/assets'

export const Footer = () => {
  return (
    <div>

    
    <div className='flex  flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10'>
       
        <div>
            <Image src={assets.logo} alt='logo' className='mb-10 w-32'/>
            <article className="w-full sm:w-64 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nemo beatae velit officiis, consectetur 
             quisquam eius accusamus at earum consequuntur
              delectus dolore nam laudantium quis, rerum expedita. Nostrum alias rem quaerat?</article>
        </div>
        <div className='w-full sm:w-1/3'>
            <h1 className='font-bold'>Company</h1>
            <br/>
            <ul className='ml-3'>
              <li>Home</li>
              <li className='re'>About us</li>
              <li>Delivery</li>
              <li className=''>Privacy Policy</li>
            </ul>
        </div>

        <div >
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            {/* <br/> */}

            <ul className='flex flex-col gap-1 text-gray-600'>
               <li>+1-000-000-000</li>
               <li>greatstackdev@gmail.com</li>
               <li>Instagram</li>
            </ul>            
        </div>
      </div>
      <div>
        <hr/>

        <p className='text-center' >Made with 🩷 by <span className="text-gray-700 hover:text-black"> <a href="https://twitter.com/aliyaqoob_">Mohd Yaqoob</a></span></p>
      </div>
    </div>
  )
}
