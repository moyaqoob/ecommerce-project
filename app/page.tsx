import Image from "next/image";
// import Home from "./Components/home";
import { Navbar } from "./Components/Navbar";
import { Route } from "next";
import Home from "@/app/(root)/Home/page";
import Page from "./(root)/page";
import RootLayout from "./layout";
import MainLayout from "./(root)/layout";
export default function App({children} : {children:React.ReactNode}) {
  return (
    <>
      <RootLayout>
          <MainLayout>
              {children}
          </MainLayout>
      </RootLayout>
    </>
  );
}
