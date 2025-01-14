import { useContext } from "react";
import { ShopContext } from "../context/shop-context";


export function useShopContext(){
    const context = useContext(ShopContext);

    if(!context){
        throw new Error("error occured because context is not provided yet") 
    }

    return context
}