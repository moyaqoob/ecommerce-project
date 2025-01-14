"use client"
import Link from 'next/link'
import React, { ReactElement, useContext } from 'react'
import Image, { StaticImageData } from 'next/image'
import { ShopContext } from '../context/shop-context'
// import { products } from '@/public/frontend_assets/assets'
import {products} from "@/public/frontend_assets/assets"


interface ProductType {
    image : StaticImageData[],
    title : string,
    price : number,
    alt : string
}

export const ProductItem = () => {
    
  return (
      <div className='w-60 h-72 border border-red-500 md:w-52 md:h-60 min-w-646px'>
        <div className=''>
          hello wordl
        </div>
        <div className='flex justify-end items-end'>
          <p>title :</p>
          <p>price</p>

        </div>
      </div>
  )
}

