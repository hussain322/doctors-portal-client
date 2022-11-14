import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      img: fluoride,
      name: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, laborum.",
    },
    {
      id: 2,
      img: cavity,
      name: "Cavity Filling",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, laborum.",
    },
    {
      id: 3,
      img: whitening,
      name: "Teeth Whitening",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, laborum.",
    },
  ];
  return (
    <div className="my-20">
      <div className="text-center">
        <h4 className="text-primary font-semibold text-2xl">Our Services</h4>
        <h2 className="text-4xl font-semibold">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {servicesData.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
