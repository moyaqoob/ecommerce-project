"use client"
import Link from 'next/link'
import React, { ReactElement, useContext } from 'react'
import Image, { StaticImageData } from 'next/image'
// import { products } from '@/public/frontend_assets/assets'
import {products} from "@/public/frontend_assets/assets"
import { useShopContext } from '../context/ShopContext'

export interface ProductItemType {
    name:string,
    price:string,
    image:StaticImageData[],
    alt:string,
    id:number;
    bestSeller?:boolean;
}

export const ProductItem = ({id,image,name,price}:ProductItemType) => {
    const {currency} = useShopContext();

  return (
      <Link className='text-gray-700' href={`/product/${id}`}>
          <div className='overflow-hidden'>
              <Image className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
          </div>
          <p className='pt-3 pb-1 text-sm'>{name}</p>
          <p className='text-sm font-medium'>{currency} {price} </p>
      </Link>
  )
}

