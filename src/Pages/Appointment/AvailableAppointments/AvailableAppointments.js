import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../../../components/UI/BookingModal/BookingModal";
import AppoinementOption from "./AppoinementOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: () =>
      fetch("http://localhost:5000/api/v1/appointment-options").then((res) =>
        res.json()
      ),
  });

  return (
    <section className="mt-32">
      <h3 className="text-secondary text-center text-2xl mb-24">
        Available Appointments on {format(selectedDate, "PP")}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-20">
        {!isLoading &&
          data.data.appointmentOptions.map((option) => (
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
