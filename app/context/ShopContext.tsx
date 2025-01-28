"use client"

import { useContext, useState } from "react";
import { createContext } from "react";
import { products, ProductType } from "@/public/frontend_assets/assets";





import { ReactNode } from "react";
import { StaticImageData } from "next/image";

interface ShopProviderProps {
    children: ReactNode;
}

interface ShopContextValue {
    products: Array<{
        _id: string,
            name:string,
            description:string,
            price:number,
            image:StaticImageData[] ,
            category:string,
            subCategory:string,
            sizes : string[],
            date:number,
            bestseller : boolean
    }>;
    currency: string;
    delivery_fee: number;
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>
}

export const ShopContext = createContext<ShopContextValue | undefined>(undefined);

export const ShopContextProvider = (props: ShopProviderProps) => {
    const [cart, setCart] = useState<any[]>([]);
    
    const currency = "$";
    const delivery_fee = 10;
    
    const value: ShopContextValue = {
        products,
        currency,
        delivery_fee,
        cart,
        setCart
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export const useShopContext = () => {
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error('useShopContext must be used within a ShopProvider');
    }
    return context;
};