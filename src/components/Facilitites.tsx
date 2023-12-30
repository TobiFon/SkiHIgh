import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const facilitiesList = [
  {
    title: "Classrooms",
    description:
      "Spacious and well-lit, our classrooms are equipped with modern educational technology to enhance the learning experience. Each room is thoughtfully arranged to facilitate interactive and collaborative learning, creating a comfortable space for students to explore and engage with the curriculum.",
    img: "/school/13.jpg",
  },
  {
    title: "Library and Resource Center",
    description:
      "Our extensive library is a treasure trove of knowledge, offering a wide range of books, reference materials, and digital resources. It serves as a hub for independent study, research projects, and a place where the love for reading is nurtured. Our resource center complements classroom learning, providing students with additional materials to delve deeper into subjects of interest.",
    img: "/school/14.jpg",
  },
  {
    title: "Science and Computer Labs",
    description:
      "Hands-on learning is a priority at [School Name]. Our well-equipped science labs and computer labs offer students the opportunity to explore, experiment, and develop practical skills. From conducting exciting science experiments to honing programming abilities, these labs are dynamic spaces where curiosity is sparked and innovation thrives.",
    img: "/school/15.jpg",
  },
  {
    title: "Sports and Recreation Areas",
    description:
      "Physical fitness and well-being are integral to a child's development. Our school boasts expansive sports fields, playgrounds, and designated areas for various sports and recreational activities. Whether it's team sports, individual fitness, or organized games, these spaces provide opportunities for students to stay active and foster a healthy lifestyle.",
    img: "/school/16.jpeg",
  },
  {
    title: "Art and Music Studios",
    description:
      "Creativity is celebrated at [School Name]. Our dedicated art and music studios are equipped with supplies and instruments to inspire artistic expression. From painting and sculpture to musical performances, these studios encourage students to explore their creative talents and develop a lifelong appreciation for the arts.",
    img: "/school/17.jpg",
  },
  {
    title: "Cafeteria",
    description:
      "Our cafeteria provides nutritious and balanced meals to fuel growing minds. It's not just a place to eat; it's a social hub where students can relax, interact, and build friendships. We prioritize healthy food options to ensure students have the energy they need for a successful day of learning and exploration.",
    img: "/school/18.jpg",
  },
];

const Facilitites = () => {
  return (
    <section
      className="container my-10 flex justify-center flex-col items-center
  "
    >
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-yellow-400 max-w-4xl w-full mb-5">
        Facilities
      </h2>

      <div className=" bg-blue-500 text-slate-100 max-w-4xl py-10 px-5 space-y-10">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          We take pride in providing a nurturing environment that supports the
          holistic development of our students. Our state-of-the-art facilities
          are designed to create a conducive and inspiring atmosphere for
          learning and growth.
        </h3>

        <div className=" grid md:grid-cols-2 gap-5">
          {facilitiesList.map((facility, index) => (
            <Card className="bg-blue-500 text-slate-100 " key={index}>
              <CardHeader>
                <div className="relative h-56 w-full mb-5">
                  <Image src={facility.img} alt="image" fill />
                </div>
                <CardTitle>{facility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilitites;
