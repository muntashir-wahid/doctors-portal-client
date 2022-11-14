import React from "react";
import fluorideImg from "../../../assets/images/fluoride.png";
import cavityImg from "../../../assets/images/cavity.png";
import whiteningImg from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: 0,
    name: "Fluoride Treatment",
    description:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: fluorideImg,
  },
  {
    id: 1,
    name: "Cavity Filling",
    description:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: cavityImg,
  },
  {
    id: 2,
    name: "Teeth Whitening",
    description:
      "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    img: whiteningImg,
  },
];

const Services = () => {
  return (
    <section className="mt-32">
      <div className="text-center flex flex-col gap-2 px-2 mb-16">
        <span className="text-primary text-lg font-bold">OUR SERVICES</span>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
