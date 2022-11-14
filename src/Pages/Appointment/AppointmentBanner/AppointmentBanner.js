import React from "react";
import { DayPicker } from "react-day-picker";
import imgSrc from "../../../assets/images/chair.png";
import bgImg from "../../../assets/images/bg.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  const background = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <header style={background}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={imgSrc}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Dentist chair"
          />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
