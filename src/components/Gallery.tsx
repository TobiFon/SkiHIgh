import Image from "next/image";
import React from "react";

const Gallery = () => {
  const images = [
    "/school/1.jpg",
    "/school/2.jpg",
    "/school/3.jpg",
    "/school/4.jpg",
    "/school/5.jpg",
    "/school/6.jpg",
    "/school/7.jpg",
    "/school/8.jpg",
    "/school/9.jpg",
    "/school/10.jpg",
    "/school/11.jpg",
    "/school/12.jpg",
    "/school/13.jpg",
    "/school/14.jpg",
  ];
  return (
    <section className="container my-10 flex justify-center flex-col items-center">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-yellow-400 max-w-4xl w-full">
        Gallery
      </h2>

      <div className=" grid md:grid-cols-2 xl:grid-cols-3 max-w-4xl gap-4 mt-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-64 w-64 object-cover object-center"
          >
            <Image src={image} fill alt="img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
