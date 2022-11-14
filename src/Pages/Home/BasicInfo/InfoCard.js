import React from "react";

const InfoCard = ({ name, className, icon, description }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center rounded-2xl text-white gap-6 pr-6 pl-8 py-12 ${className}`}
    >
      <div>
        <img src={icon} alt="" />
      </div>
      <div className="space-y-4">
        <p className="text-xl font-medium">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
