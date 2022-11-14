import React from "react";
import bgImg from "../../../assets/images/appointment.png";
import DoctorButton from "../../../components/UI/Button/DoctorButton";

const Contact = () => {
  return (
    <section
      className="hero mt-32"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="text-white mb-8">
            <span className="text-lg font-bold text-primary">Contact Us</span>
            <h2 className="mb-5 text-3xl">Stay connected with us</h2>
          </div>
          <div className="space-y-5 mb-5">
            <input
              type="text"
              placeholder="Name"
              className="input w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input w-full max-w-xs"
            />
            <textarea
              className="textarea w-full max-w-xs"
              placeholder="Your message"
            ></textarea>
          </div>
          <DoctorButton>Submit</DoctorButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
