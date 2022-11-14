import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../../../components/UI/BookingModal/BookingModal";
import AppoinementOption from "./AppoinementOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <section className="mt-32">
      <h3 className="text-secondary text-center text-2xl mb-24">
        Available Appointments on {format(selectedDate, "PP")}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-20">
        {appointmentOptions.map((option) => (
          <AppoinementOption
            key={option._id}
            appoinementOption={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
