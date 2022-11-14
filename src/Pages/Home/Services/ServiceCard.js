import React from "react";

const ServiceCard = ({ service }) => {
  const { name, description, img } = service;

  return (
    <article className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
