import { useContext, useEffect, useState } from "react";
import { ProductItem, ProductItemType } from "./ProductItem";
import { useShopContext } from "../context/ShopContext";

export const BestCollections = ()=>{
    const {products} = useShopContext();
    const [bestseller,setbestSeller] = useState<any>([]);


    // useEffect(()=>{
    //     const bestproduct = products.filter((t)=>(t.bestseller==!false))
    //     // console.log(bestproduct.slice(0,5))
        
    //     setbestSeller(bestproduct.splice(0,5));
    // },[])
    // console.log(bestseller)
    // console.log(products.filter((t)=>(t.bestseller==!false)))
    useEffect(() => {
        const bestproduct = products.filter((t) => (t.bestseller==false));
        setbestSeller(bestproduct.splice(0,5));
    }, [products]);
    
    useEffect(() => {
        console.log("Updated bestseller:", bestseller);
    }, [bestseller]); // Logs updated bestseller after state changes
    

    return(
    <>
     {/* redering the best collections */}
    <div className='flex flex-col items-center mt-20 '>      
          <a className='flex gap-2 items-center'>
            <p className='text-3xl text-brown-100'>Best </p>
            <p className='text-3xl text-brown-600'>Collections</p>
            <span className='bg-brown-200 w-12 h-[3px]'></span>
          </a>
          <div className='flex flex-col items-center'>
            <article className='text-brown-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde.</article>
            <p className='text-brown-100'>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-14">
            {bestseller.map((item:ProductItemType,index:React.Key | null)=>(
                <ProductItem key={index} id={item.id}  price={item.price} image={item.image} name={item.name} alt={item.alt} />
            ))}
          </div>
    </div>
    </>
    )
}   