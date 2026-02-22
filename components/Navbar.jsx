import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <section className="p-2">
      <div className="container mx-auto md:max-w-6xl items-center ">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-red-300 m-5 p-5 rounded-md  bg-[#B10F2E] items-center ">
          <div className="font-bold text-2xl md:text-3xl text-red-100 whitespace-nowrap">
            <Link href="/">{`<Code-aborate>`}</Link>
          </div>

          <div className="inline-flex justify-end md:hidden">
            <Menu className="text-red-100 cursor-pointer " size={32}></Menu>
          </div>
          <div className="nav hidden lg:inline-flex justify-center items-center">
            {["Home", "About", "Services", "FAQs", "Contact"].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-red-100 text-xl  mx-4 
                  font-bold cursor-pointer
                  hover:text-red-200 transition-ease duration-300"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
          <div className="hidden md:inline-flex justify-end items-center ">
            <button className="border-2 border-red-100 px-4 py-2 rounded-md font-bold text-xl text-red-100 cursor-pointer hover:bg-red-800 transition-ease duration-300">
              Login
            </button>
            <button className="bg-red-100 text-red-800 px-4 py-2 rounded-md font-bold cursor-pointer hover:bg-red-200 transition-ease duration-300 text-xl mx-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
