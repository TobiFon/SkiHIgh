import React from "react";
import StaffCarousel from "./StaffCaruousel";

const StaffSection = () => {
  return (
    <section
      className="container my-10 flex justify-center flex-col items-center
  "
    >
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-yellow-400 max-w-4xl w-full mb-5">
        Our Winning Staff
      </h2>
      <div>
        <StaffCarousel />
      </div>
    </section>
  );
};

export default StaffSection;
