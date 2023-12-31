import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section
      className="container my-10 flex justify-center flex-col items-center w-full space-y-5
  "
    >
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-yellow-400 max-w-4xl w-full mb-5">
        Get in Touch
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-4xl w-full space-y-5">
        Have questions or want to connect? Reach out to us through any of the
        channels below:
      </p>

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-yellow-500 flex-nowrap whitespace-nowrap max-w-4xl w-full space-y-5 ">
        Visit Us:
      </h4>
      <p className=" max-w-4xl w-full flex gap-1 items-start">
        <MapPin className=" shrink-0" /> ski-high primary school, Yaounde,
        biamasi main road
      </p>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-yellow-500 flex-nowrap whitespace-nowrap max-w-4xl w-full space-y-5">
        Mail Us:
      </h4>
      <p className=" max-w-4xl w-full flex gap-2 items-center">
        <Mail /> skihigh@school.com
      </p>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-yellow-500 flex-nowrap whitespace-nowrap max-w-4xl w-full space-y-5">
        Phone:
      </h4>
      <p className=" max-w-4xl w-full flex gap-2 items-center">
        <Phone /> (+237)-6555555555
      </p>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-yellow-500 flex-nowrap whitespace-nowrap max-w-4xl w-full space-y-5">
        Office Hours
      </h4>
      <p className=" max-w-4xl w-full flex gap-2 items-center">
        Monday-Friday: [8:AM]-[5PM]
      </p>
      <h4 className="scroll-m-20 text-xl tracking-tight max-w-4xl w-full space-y-5">
        For specific inquiries, you can also use the form below. {"We'll"} get
        back to you as soon as possible
      </h4>
      <ContactForm />
    </section>
  );
};

export default Contact;
