"use client"

import React, { createContext, useState, useContext, ReactNode } from "react";
import {products,ProductType} from "@/public/frontend_assets/assets"
// Define the context value type
export interface ShopContextType {
  products: ProductType[];
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setshowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value of undefined
export const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const useShopContext = ()=>{
    useContext(ShopContext)
}
// ShopProvider Component
interface ShopProviderProps {
  children: ReactNode;
  products: ProductType[];
}

export const ShopProvider = ({ children, products }: ShopProviderProps) => {
  const [search, setSearch] = useState<string>('');
  const [showSearch, setshowSearch] = useState<boolean>(true);

  const currency = "$";
  const delivery_fee = 10;

  const value = {
        products,currency,delivery_fee,
        search,setSearch,showSearch,setshowSearch
  }

  return (
    <ShopContext.Provider value={value}>
      {children}

    </ShopContext.Provider>
  );
};
