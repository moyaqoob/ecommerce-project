"use client"
import  {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/public/frontend_assets/assets";


export const Navbar=()=> {
    const [activeLink, setActiveLink] = useState("/Home");

    const links = [
        { href: "/Home", label: "Home" },
        { href: "/Collections", label: "Collections" },
        { href: "/About", label: "About" },
        { href: "/Contact", label: "Contact" },
        { href: "/Admin", label: "Admin Panel", isButton: true },
    ];

    return (
        <div>
            <nav className="pl-1 relative right-8">
                <div className="flex flex-row items-center justify-between mt-5 cursor-pointer pl-3 max-w-screen-2xl">
                    {/* Logo */}
                    <div className="ml-[10%]">
                        <Link href="/Home">
                            <Image src={assets.logo} alt="logo" width={150} height={50} className="relative" />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-2 text-brown-600 text-md hidden items-center sm:block">
                        <ul className="flex space-x-4">
                            {links.map((link) =>
                                link.isButton ? (
                                    <li key={link.href}>
                                        <Link href={link.href}>
                                            <button
                                                className={`border rounded-full text-sm shadow-sm px-2 py-1 items-center ${
                                                    activeLink === link.href ? "bg-brown-200 text-brown-800" : ""
                                                }`}
                                                onClick={() => setActiveLink(link.href)}
                                            >
                                                {link.label}
                                            </button>
                                        </Link>
                                    </li>
                                ) : (
                                    <li
                                        key={link.href}
                                        onClick={() => setActiveLink(link.href)}
                                        className={`scale-95 relative cursor-pointer ${
                                            activeLink === link.href ? "text-brown-100" : "hover:text-brown-200"
                                        }`}
                                    >
                                        <Link href={link.href}>{link.label}</Link>
                                        {activeLink === link.href && (
                                            <span className="absolute left-1/2 -translate-x-1/2  block h-[2px] w-8 bg-brown-500"></span>
                                        )}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Search and Cart */}
                    <div className="flex items-center gap-5 mr-4">
                        <a href="">
                            <Image src={assets.search_icon} width={20} height={10} alt="Search" />
                        </a>
                        <a href="/Cart">
                            <Image src={assets.cart_icon} width={20} height={10} alt="Cart" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
