import React from "react";

const TestimonialCard = ({ test }) => {
  const { description, img, name, location } = test;
  return (
    <div className="rounded-xl shadow-md p-8">
      <p>{description}</p>
      <div className="mt-6 flex">
        <div className="mr-2">
          <img src={img} alt="" className="w-3/4" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">{name}</h3>
          <h4 className="text-xl font-semibold">{location}</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
