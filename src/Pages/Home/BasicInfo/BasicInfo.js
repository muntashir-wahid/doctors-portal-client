import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const cardData = [
  {
    id: 1,
    name: "Opening Hour",
    icon: clock,
    desctiption: "Open 9am to 5pm everyday.",
    className: "bg-gradient-to-r from-secondary to-primary",
  },
  {
    id: 2,
    name: "Visit our location",
    icon: marker,
    desctiption: "Brooklyn, NY 10036, United States",
    className: "bg-accent",
  },
  {
    id: 3,
    name: "Contact us now",
    icon: phone,
    desctiption: "Phone no: +000 123 456789",
    className: "bg-gradient-to-r from-secondary to-primary",
  },
];

const BasicInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {cardData.map((data) => (
        <InfoCard
          key={data.id}
          name={data.name}
          icon={data.icon}
          className={data.className}
          description={data.desctiption}
        />
      ))}
    </div>
  );
};

export default BasicInfo;
