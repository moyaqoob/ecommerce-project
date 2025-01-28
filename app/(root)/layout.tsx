import { Navbar } from "../Components/Navbar"
import { Footer } from "../Components/footer";
import { products } from "@/public/frontend_assets/assets";
import { ShopContextProvider,  } from "../context/ShopContext";
import Link from "next/link";
import { useLocation } from "react-router-dom";
export default function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {


  

    return (
      <>
        <ShopContextProvider>


            <Navbar/>
              <main>{children}</main>
            <Footer/>

         
      
      </ShopContextProvider>
        
        
        </>
    )
  }