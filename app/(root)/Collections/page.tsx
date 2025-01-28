import React from 'react'

const page = () => {
  return (
    <div className='lg:[60vw] sm:[50vw]'>Collections page
      <div className="relative inline-block  ">
        <a
          href="#"
          className="text-blue-500 hover:text-green-500 after:content-[''] after:block after:w-8 after:h-[2px] after:bg-green-500 after:mx-auto after:mt-1 hover:after:bg-green-500" >
          Tailwind Link
        </a>
      </div>
      <div className="relative inline-block">
        <a
          href="#"
          className="text-blue-500 hover:text-green-500 after:content-[''] after:block after:w-8 after:h-[2px] after:bg-blue-500 after:mx-auto after:mt-1 hover:after:bg-green-500" >
          random Link
        </a>
      </div>
      <div className="relative inline-block">
        <a
          href="#"
          className="text-blue-500 hover:text-green-500 after:content-[''] after:block after:w-8 after:h-[2px] after:bg-blue-500 after:mx-auto after:mt-1 hover:after:bg-green-500" >
          ahjkdkf Link
        </a>
      </div>

    </div> 
  )
}

export default page