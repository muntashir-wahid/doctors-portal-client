import React from "react";
import Banner from "../Banner/Banner";
import BasicInfo from "../BasicInfo/BasicInfo";
import Care from "../Care/Care";
import Contact from "../Contact/Contact";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <BasicInfo />
      <Services />
      <Care />
      <MakeAppointment />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
