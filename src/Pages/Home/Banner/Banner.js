import React from "react";
import banner from "./../../../assets/images/chair.png";
import bgImage from "./../../../assets/images/bg.png";
import DoctorButton from "../../../components/UI/Button/DoctorButton";

const Banner = () => {
  const background = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={background} className="hero">
      <div className="hero-content pl-14 pr-10 flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="w-full lg:w-1/2 rounded-lg shadow-2xl"
          alt="A chair"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <DoctorButton>Get Started</DoctorButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
