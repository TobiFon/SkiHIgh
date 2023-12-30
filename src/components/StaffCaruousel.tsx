"use client";
import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function StaffCarousel() {
  const staffList = [
    {
      name: "Dr. Rachel Anderson",
      title: "Principal",
      description:
        " Dr. Anderson is a visionary leader dedicated to academic excellence and fostering a positive school culture. Her guidance shapes SkiHigh into a hub of learning and personal growth.",
      img: "/school/20.jpg",
    },
    {
      name: "Mrs. Emily Rodriguez",
      title: "Grade 1 Teacher",
      description:
        " Mrs. Rodriguez creates a nurturing environment where young minds embark on their educational journey. Her enthusiasm sparks curiosity and a love for learning.",
      img: "/school/21.jpg",
    },
    {
      name: "Mr. Alex Turner",
      title: "Grade 2 Teacher",
      description:
        "  Mr. Turner's dynamic teaching style captivates students. With a focus on foundational skills, he lays the groundwork for a successful academic experience.",
      img: "/school/22.jpg",
    },
    {
      name: "Miss Sophia Davis",
      title: "Grade 3 Teacher",
      description:
        "  Miss Davis is dedicated to creating a supportive and engaging classroom. Her creativity and patience foster a positive learning environment for young learners.",
      img: "/school/23.jpg",
    },
    {
      name: "Mr. Daniel Parker",
      title: "Grade 4 Teacher",
      description:
        " Mr. Parker's passion for teaching shines through as he guides students through the exciting world of second-grade academics. His interactive lessons make learning fun.",
      img: "/school/24.jpg",
    },
    {
      name: "Mrs. Olivia Martinez",
      title: "Grade 5 Teacher",
      description:
        " Dr. Anderson is a visionary leader dedicated to academic excellence and fostering a positive school culture. Her guidance shapes SkiHigh into a hub of learning and personal growth.",
      img: "/school/25.jpg",
    },
    {
      name: " Miss Jessica Baker",
      title: "Grade 6 Teacher",
      description:
        " Miss Baker infuses creativity into her lessons, making every day an adventure. Her dedication to holistic development ensures students thrive academically and artistically.",
      img: "/school/26.jpg",
    },
    {
      name: "Mr. Carlos Ramirez",
      title: "School Drive",
      description:
        " Mr. Ramirez is a reliable and friendly presence, ensuring the safe transportation of students. His commitment to their well-being makes him an integral part of our school community.",
      img: "/school/27.jpg",
    },
  ];

  return (
    <Carousel className="w-full md:max-w-4xl text-center max-w-sm">
      <CarouselContent>
        {staffList.map((staff, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardHeader className="flex gap-4 items-center">
                  <Avatar className=" h-40 w-40">
                    <AvatarImage
                      src={staff.img}
                      className=" object-center object-cover"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div>
                    <CardTitle>{staff.name}</CardTitle>
                    <CardDescription className=" text-xl mt-2">
                      {staff.title}
                    </CardDescription>
                  </div>
                </CardHeader>
                <div>
                  <CardContent>{staff.description}</CardContent>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="absolute right-0 bg-transparent" />
      <CarouselPrevious className="absolute left-0 bg-transparent" />
    </Carousel>
  );
}
export default StaffCarousel;
