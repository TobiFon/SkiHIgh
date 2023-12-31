import React from "react";
import { ContactForm } from "./ContactForm";
import { Toaster } from "./ui/toaster";

const ContactSection = () => {
  return (
    <section
      className="container my-10 flex justify-center flex-col items-center w-full
  "
    >
      <Toaster />
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-yellow-400 max-w-4xl w-full mb-5">
        Contact Us
      </h2>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
