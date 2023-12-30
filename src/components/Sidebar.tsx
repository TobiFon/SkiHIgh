import Link from "next/link";
import React from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

export interface LinksProps {
  name: string;
  url: string;
}
interface ComponentsProps {
  links: LinksProps[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ links, setIsOpen }: ComponentsProps) => {
  return (
    <div className="absolute top-0 right-0 bottom-0 w-2/3 h-screen bg-yellow-400">
      <Button
        className=" fixed top-2 right-4 bg-yellow-400 hover:bg-yellow-300"
        onClick={() => setIsOpen(false)}
      >
        <X size={30} />
      </Button>
      <div className="  flex justify-center items-center flex-col gap-10 h-full">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className=" text-2xl hover:text-yellow-400"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
