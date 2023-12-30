import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const AcademicPrograms = () => {
  const programs = [
    {
      title: "Curriculum",
      description:
        "Our curriculum is carefully crafted to meet the diverse needs of our students. Aligned with national standards, it goes beyond textbooks to encourage hands-on learning, creativity, and real-world application of knowledge. We believe in nurturing well-rounded individuals who not only excel academically but also develop essential life skills",
      img: "/school/8.jpg",
    },
    {
      title: "Extracurricular Activities",
      description:
        "In addition to a strong academic focus, we offer a range of extracurricular activities to complement classroom learning. From sports and arts to science clubs and community service projects, these activities provide students with opportunities to explore their interests, develop leadership skills, and build lasting friendships.",
      img: "/school/9.jpg",
    },
    {
      title: "Enrichment Programs",
      description:
        "To cater to varying learning styles and abilities, we provide enrichment programs that offer additional challenges for high achievers and additional support for those who may need it. Our goal is to ensure that every child reaches their full potential and experiences success in their academic journey.",
      img: "/school/10.jpg",
    },
    {
      title: "Assessment and Progress Tracking",
      description:
        "Regular assessments are conducted to monitor students' progress and identify areas for improvement. We believe in a holistic approach to assessment, considering not only academic achievements but also personal growth and character development",
      img: "/school/11.jpg",
    },
    {
      title: "Specialized Learning Support",
      description:
        "For students with specific learning needs, we offer specialized learning support programs. Our dedicated team works collaboratively with teachers, parents, and specialists to create individualized plans that enable every child to succeed",
      img: "/school/7.jpg",
    },
    {
      title: "Language Enrichment",
      description:
        " Our language enrichment programs go beyond the standard curriculum,  aiming to cultivate strong communication skills in both English and French, through engaging activities and language immersion experiences. Students develop proficiency in both languages.",
      img: "/school/12.jpg",
    },
  ];
  return (
    <section
      className="container my-10 flex justify-center flex-col items-center
  "
    >
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-yellow-400 max-w-4xl w-full mb-5">
        Academic Programs
      </h2>

      <div className=" bg-yellow-500 text-slate-100 max-w-4xl py-10 px-5 space-y-10">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          We are dedicated to providing a comprehensive and enriching
          educational experience that lays the foundation for a lifetime of
          learning. Our academic programs are designed to inspire curiosity,
          foster critical thinking, and develop a love for knowledge.
        </h3>

        <div className=" grid md:grid-cols-2 gap-5">
          {programs.map((program, index) => (
            <Card className="bg-yellow-500 text-slate-100 " key={index}>
              <CardHeader>
                <div className="relative h-56 w-full mb-5">
                  <Image src={program.img} alt="image" fill />
                </div>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
