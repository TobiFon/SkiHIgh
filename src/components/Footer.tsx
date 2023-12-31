import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-blue-500 w-full flex flex-col gap-5 items-center justify-center text-slate-100">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight w-full max-w-4xl text-center  border-b-2  border-yellow-400 p-3">
        <span className="text-yellow-500">SKI-</span>HIGH PRIMARY SCHOOL
      </h3>
      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8 items-center justify-center">
        <div className="flex flex-col justify-center max-md:items-center">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            CONTACT US
          </h4>
          <div>
            <div className="flex  gap-2 my-3">
              <MapPin className="text-yellow-500" size={25} />
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-6 flex gap-1 items-center">
                  ski-high primary school, Yaounde, biamasi main road
                </p>
                <p className="leading-7 flex gap-1 items-center font-semibold">
                  (+237)-6555555555
                </p>
              </div>
            </div>
            <div className="flex  gap-2 my-3">
              <Mail className="text-yellow-500" size={25} />
              <div>
                <p className="leading-7 flex gap-1 items-center font-semibold">
                  skihigh@school.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-3">
            QUICK LINKS
          </h4>
          <div>
            <ul className="flex flex-col  items-center justify-center">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/calender"}>Calender</Link>
              </li>
              <li>
                <Link href={"/news"}>News</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6  border-t-2  border-yellow-400 pt-3 my-3 w-full max-w-4xl text-center">
        © 2024 Ski-High. All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
