import React, { useContext,useEffect,useState } from 'react'
import { ShopContext, useShopContext } from '../context/ShopContext'
import { ProductItem, ProductItemType } from './ProductItem';
import { StaticImageData } from 'next/image';
import { ProductType } from '@/public/frontend_assets/assets';


const LatestCollections = () => {
    const {products,currency} = useShopContext();
    const [latestProducts,setLatestProducts] = useState<any>([]);
    const [bestProducts,setbestProducts] = useState<any>([])
    useEffect(()=>{
      setLatestProducts(products.splice(0,5));
      
    },[])
    console.log(bestProducts)

  return (
    <div>
        <div className='flex flex-col items-center justify-center mt-8 gap-5'>
        <a className='flex gap-2 items-center'>
          <p className='text-3xl text-brown-100'>Latest</p>
          <p className='text-3xl text-brown-600'>Collections</p>
          <span className='bg-brown-200 w-12 h-[3px]'></span>
        </a>
        <div className='flex flex-col items-center'>

          <article className='text-brown-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde.</article>
          <p className='text-brown-100'>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

        {/* rendering the latest collections */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-14 '>
        {latestProducts.map((item: ProductItemType, index: React.Key | null | undefined) => (
          <ProductItem key={index} id={item.id} name={item.name} price={item.price} image={item.image} alt={item.alt} />
        ))}
      </div>

     
      
    </div>
  )
}

export default LatestCollections