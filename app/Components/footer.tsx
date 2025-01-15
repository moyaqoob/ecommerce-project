import React from 'react'

export const Footer = () => {
  return (
    <div className='flex gap-3 flex-col sm:flex-row justify-center'>
        <div className='w-full'>
            <h1 className='font-bold'>Forever</h1>
            <br/>
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
              <li>About us</li>
              <li>Delivery</li>
              <li className='fixed'>Privacy Policy</li>
            </ul>
        </div>

        <div className='w-full sm:w-1/3'>
            <h1 className='font-bold'>GET IN TOUCH</h1>
            <br/>

            <ul>
               <li>+1-000-000-000</li>
               <li>greatstackdev@gmail.com</li>
               <li>Instagram</li>
            </ul>            
        </div>
    </div>
  )
}
