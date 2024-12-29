"use client"
import logo from "@/public/frontend_assets/logo.png"
import CartImg from "@/public/frontend_assets/cart_icon.png"
import ProfileImg from "@/public/frontend_assets/profile_icon.png"
import Image from "next/image"
import SearchImg from "@/public/frontend_assets/search_icon.png"    
import { useRouter } from "next/router"
import Link from "next/link"
export function Navbar(){
    
   return(
    <div>
        <nav className="pl-1 relative right-8">
           <div className="flex flex-row items-center justify-between mt-5 cursor-pointer pl-3 max-w-screen-2xl">

           
            <div className="ml-[10%] ">
                <Link href={"Home"}>
                
                <Image src={logo} alt="logo" width={150} height={50} className="relative" />
                </Link>
            </div>
          
                <div className="flex gap-2 text-brown-600 text-md hidden  sm:block">
                    <ul className="flex  space-x-4">
                    <Link href="/Home">
                        <li 
                        className="scale-95 hover:underline decoration-[2px]">Home</li>
                    </Link>
                    <Link href="/Collections">
                         <li className="scale-100 focus-visible:underline">Collections</li>
                    </Link>
                    <Link href="/About">
                        <li className="scale-100 hover:underline ">About</li>
                    
                    </Link>
                       <Link href="/Contact">
                        <li className="hover:underline ">Contact</li>
                       </Link> 
                       <Link href={"/Admin"}>
                        <button className="border rounded-full text-sm shadow-sm px-2 py-1 items-center">Admin Panel</button>
                       </Link>
                    </ul>
                </div>
                <div className="flex items-center  gap-5 mr-4">
                   <a href="">
                        <Image src={SearchImg} width={20} height={10} alt=""/>
                   </a>

                   <a href="/Signin">
                        <Image src={ProfileImg} width={20} height={10} alt=""/>
                   </a>
                   <a href="/Cart">
                        <Image src={CartImg} width={20} height={10} alt=""/>
                   </a>
                </div>
                </div>
        </nav>
    </div>
   )
}