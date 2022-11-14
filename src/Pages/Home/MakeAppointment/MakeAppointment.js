import React from "react";
import doctorImg from "../../../assets/images/doctor.png";
import bgImg from "../../../assets/images/appointment.png";
import DoctorButton from "../../../components/UI/Button/DoctorButton";

const MakeAppointment = () => {
  const background = {
    backgroundImage: `url(${bgImg})`,
  };

  return (
    <section style={background} className="mt-36">
      <div className="hero text-white">
        <div className="hero-content lg:pb-0 flex-col lg:flex-row">
          <img
            src={doctorImg}
            className="hidden md:block md:w-5/6 lg:w-1/2 md:-mt-32 rounded-lg shadow-2xl"
            alt="Doctor"
          />
          <div>
            <span className="text-primary font-bold text-lg">Appointment</span>
            <h2 className="text-5xl font-bold">Make an appointment Today</h2>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <DoctorButton>Make an Appointment</DoctorButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
