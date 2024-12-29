import { Input as PostcssInput } from 'postcss'
import React from 'react'


interface InputFieldProps {
  type: string;
  placeholder: string;
  className?:string;
}
const page = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen scroll- bg-white relative'>
        <div className=''>
            <div className='flex flex-row items-center justify-center gap-1'>
              <h1 className='text-3xl'>Login</h1>
              <span className='bg-brown-600 w-16 h-[2px]'></span>
            </div>
            <form action="">
              <TextInput  type='email' placeholder='Email' />
            </form>
        </div>
    </div>
  )
}

export const TextInput = ({type, placeholder}:InputFieldProps) => {
  return (
    <div className='p-3 w-full h-3'>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default page