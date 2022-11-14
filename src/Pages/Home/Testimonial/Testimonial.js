import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      name: "Winson Herry",
      location: "California",
    },
    {
      id: 2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      name: "John Sina",
      location: "California",
    },
    {
      id: 3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      name: "Devid Jonson",
      location: "California",
    },
  ];
  return (
    <section className="mt-20">
      <div className="flex justify-between">
        <div>
          <h3 className="text-2xl font-bold text-primary my-2">Testimonial</h3>
          <h2 className="text-4xl font-semibold">What our Patients says</h2>
        </div>
        <div>
          <img src={quote} alt="" className="w-40" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {testimonialData.map((test) => (
          <TestimonialCard key={test.id} test={test} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
