import React from "react";
import imgSrc from "../../../assets/images/treatment.png";
import DoctorButton from "../../../components/UI/Button/DoctorButton";

const Care = () => {
  return (
    <section className="hero mt-32">
      <div className="hero-content p-0 sm:p-1 w-full sm:w-5/6 lg:w-5/6 flex-col lg:flex-row">
        <img
          src={imgSrc}
          className="w-full md:w-5/12 rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h2 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <DoctorButton>Get Started</DoctorButton>
        </div>
      </div>
    </section>
  );
};

export default Care;
