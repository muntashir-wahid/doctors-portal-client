import React from "react";
import imgSrc from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    _id: 1,
    description:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    name: "Winson Herry",
    address: "California",
    img: people1,
  },
  {
    _id: 2,
    description:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    name: "Winson Herry",
    address: "California",
    img: people2,
  },
  {
    _id: 3,
    description:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    name: "Winson Herry",
    address: "California",
    img: people3,
  },
];

const Testimonial = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-between items-center mb-20 gap-3">
        <div>
          <span className="font-bold text-lg text-primary">Testimonial</span>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img src={imgSrc} alt="Qoute logo" className="h-20 lg:h-32" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-0 md:px-8">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
