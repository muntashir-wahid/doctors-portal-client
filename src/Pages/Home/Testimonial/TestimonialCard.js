import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { name, img, description, address } = testimonial;

  return (
    <article className="card shadow-xl">
      <div className="card-body gap-4">
        <div>
          <p>{description}</p>
        </div>
        <div className="flex gap-4">
          <div className="avatar">
            <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt={name} />
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold">{name}</p>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
