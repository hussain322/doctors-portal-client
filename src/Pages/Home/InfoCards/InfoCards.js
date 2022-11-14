import React from "react";
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      img: clock,
      name: "Opening Hours",
      description: "Open at 9am to 12am everyday",
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      id: 2,
      img: location,
      name: "Visit Our Location",
      description: "Brooklyn, NY 10036, United States",
      bgClass: "bg-accent",
    },
    {
      id: 1,
      img: phone,
      name: "Contact us now",
      description: "+00 123 456789",
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default InfoCards;
