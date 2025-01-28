"use client"

import React, { useCallback, useContext } from 'react'
import { ShopContext, ShopContextType } from '@/app/context/shop-context'
import { useShopContext } from '@/app/hooks/useShopContext'
import Image from 'next/image';
import { products } from '@/public/frontend_assets/assets';
export default function Cart(){
    // const {products,currency,delivery_fee} = useShopContext(); 
    return(
        <>
         {products.map((product,index))}
        
        </>
    )
}
