"use client";
import { Input as PostcssInput } from 'postcss'
import React from 'react'


interface InputFieldProps {
  type: string;
  placeholder: string;
  className?:string;
}
const page = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-100vh  bg-white relative'>
      
            <div className='flex flex-row items-center justify-center gap-1'>
              <h1 className='text-3xl'>Login</h1>
              <span className='bg-brown-600 w-16 h-[2px]'></span>
            </div>
            <form action="">
              <div className='gap-4 flex flex-col w-full items-center justify-center'>
                  <TextInput className='mt-3' type='email' placeholder='Email' />
                  <TextInput className='' type='password' placeholder='Password' />
                  <div className='flex flex-col'>
                    <div className='flex justify-between items-center cursor-pointer gap-2 text-sm'>
                      
                      <a onClick={(e)=>{
                        window.location.href = '/Signup'
                      }}>
                        Forgot your password?
                      </a>
                      <a onClick={(e)=>{
                        window.location.href = '/Spignup'
                      }}>
                        Create your account
                      </a>
                    </div>

                  <button className='bg-black items-start text-white w-10 justify-center'>Sign In</button>
                  </div>
              </div>
            </form>
    </div>
  )
}

export const TextInput = ({type, placeholder}:InputFieldProps) => {
  return (
      <input className='rounded-full h-8 p-2 w-72' type={type} placeholder={placeholder} />
  )
}



export default page