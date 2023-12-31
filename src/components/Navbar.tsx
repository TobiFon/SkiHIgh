"use client";
import Sidebar from "./Sidebar";
import Link from "next/link";
import React, { useState } from "react";
import { LinksProps } from "./Sidebar";
import { AlignCenter } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const links: LinksProps[] = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Calendar", url: "/calendar" },
    { name: "News", url: "/news" },
    { name: "Contact", url: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" py-2 px-5  bg-blue-500 text-slate-100 relative z-50">
      <div className="flex justify-between items-center ">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          <span className=" text-yellow-400">SKI</span>HIGH
        </h3>
        <ul className="gap-5 hidden lg:flex">
          {links.map((link, index) => (
            <li key={index} className="text-lg hover:text-yellow-400">
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <Button
          className=" hidden lg:inline bg-yellow-500 text-xl text-slate-100 hover:bg-yellow-400"
          size={"lg"}
        >
          Contact Us
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-400 lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <AlignCenter size={30} />
        </Button>
        {isOpen && <Sidebar links={links} setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
};

export default Navbar;
