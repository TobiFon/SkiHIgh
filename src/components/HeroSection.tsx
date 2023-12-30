import React from "react";
import HeroCarousel from "./Carousel";

const HeroSection = () => {
  return (
    <div className=" relative ">
      <HeroCarousel />
      <div className=" absolute bottom-0 top-0 bg-gradient-to-b from-transparent to-blue-500  h-full w-full ">
        <div className=" absolute bottom-0 text-slate-100  w-full text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
            Explore <span className=" text-yellow-400"> Ski-</span>High Primary
            School
          </h1>
          <p className="leading-7 [&:not(:first-child)]:my-6 mx-auto max-w-3xl">
            Welcome to a place where learning comes alive. We open the door to a
            world of possibilities and a journey of discovery
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
