import React from "react";

const AppoinementOption = ({ appoinementOption, setTreatment }) => {
  const { name, slots, price } = appoinementOption;

  return (
    <div className="card shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>{slots.length ? slots[0] : "Try another day"}</p>
        <p>{slots.length} spaces available</p>
        <p>
          <small>Price:{price}</small>
        </p>
        <div className="card-actions">
          <label
            onClick={setTreatment.bind(null, appoinementOption)}
            htmlFor="booking-modal"
            className="btn btn-primary"
            disabled={!slots.length}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinementOption;
