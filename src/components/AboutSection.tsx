import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section className="container my-10 flex justify-center flex-col items-center">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-yellow-400 max-w-4xl w-full">
        About Us
      </h2>

      <div className="flex flex-col gap-10 justify-center items-center h-full max-w-4xl my-5 lg:flex-row-reverse">
        <div className="relative aspect-square h-80 rounded-full border-2 border-yellow-400 p-6">
          <Image
            src="/school/6.jpg"
            fill
            alt="about page image"
            className=" rounded-full overflow-hidden p-4"
          />
        </div>
        <div className=" text-center flex flex-col justify-center items-center ">
          <p className="leading-7 [&:not(:first-child)]:mt-6 mb-5 lg:mb-10">
            At Ski-High we believe in the transformative power of education and
            the boundless potential of each child. Established with a vision to
            create a nuturing learning environment, our primary school is a
            place where curiosity is sparked , creativity is celebrated and life
            long learners are shaped
          </p>
          <div className="flex gap-5 ">
            <Button className="  bg-blue-500" size={"lg"}>
              Learn More
            </Button>
            <Button className="bg-yellow-500" size={"lg"}>
              Visit Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
