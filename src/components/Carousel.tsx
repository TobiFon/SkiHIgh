"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/school/1.jpg",
  "/school/2.jpg",
  "/school/3.jpg",
  "/school/4.jpg",
  "/school/5.jpg",
];
const HeroCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent
                  className="flex aspect-video items-center justify-center p-6 relative w-full h-[60vh] bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="abolute left-0 z-10 bg-transparent text-slate-100" />
      <CarouselNext className="absolute right-0 z-10 bg-transparent  text-slate-100" />
    </Carousel>
  );
};
export default HeroCarousel;
