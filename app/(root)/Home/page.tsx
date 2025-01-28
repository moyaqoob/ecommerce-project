"use client"
import React, { useContext } from 'react' 
import { products,assets } from '@/public/frontend_assets/assets'
import { assets as admin } from '@/public/admin_assets/assets'
import Image from 'next/image'; // Assuming you're using Next.js for Image optimization
import { ProductItem } from '@/app/Components/ProductItem'
import Cart from '../Cart/page';
import Hero from '@/app/Components/Hero';
import LatestCollections from '@/app/Components/LatestCollections';
import { ShopContext, useShopContext } from '@/app/context/ShopContext';
import { BestCollections } from '@/app/Components/BestCollections';
import { Policy } from '@/app/Components/Policy';
 // Replace with the actual path to your assets

const Home = () => {
  
  return (
    <div>

    
    
      <Hero/>
      
      
      <LatestCollections/>
      <BestCollections/>
      <Policy/>
      {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4'>
        {products.map((product,index)=>(
          <div>
            <div key={index}>{product.name}</div>
            {product.image.map((image,index) => (
              <Image key={index} src={image} alt={product.name} width={200} height={200} />
            ))}
          </div>        
        ))}
      </div> */}

</div>
    
  );
};

export default Home;


