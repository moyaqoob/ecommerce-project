import Image from "next/image";
// import Home from "./Components/home";
import { Navbar } from "./Components/Navbar";
import { Route } from "next";
import Home from "@/app/(root)/Home/page";
export default function App() {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col">
        <Home/>
      </div>
    </>
  );
}
