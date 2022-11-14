import React from "react";

const InfoCard = ({ card }) => {
  const { name, img, bgClass, description } = card;
  return (
    <div className={`p-6 rounded-md flex items-center ${bgClass}`}>
      <div className="">
        <img src={img} alt="" className="mr-4" />
      </div>
      <div className="text-white">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
