import { format } from "date-fns";
import React, { Fragment, useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name, slots } = treatment;
  const { user } = useContext(AuthContext);

  const date = format(selectedDate, "PP");

  const bookingFormSubmitHandler = (event) => {
    event.preventDefault();
    const bookingForm = event.target;
    const name = bookingForm.name.value;
    const slot = bookingForm.slot.value;
    const email = bookingForm.email.value;
    const phone = bookingForm.phone.value;
    const appointment = {
      appointmentDate: date,
      treatmentName: treatment.name,
      patientName: name,
      slot,
      email,
      phone,
    };

    fetch("http://localhost:5000/api/v1/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Appoinement booked successfully");
          refetch();
          setTreatment(null);
        }
        if (data.status === "fail") {
          toast.error(data.message);
          setTreatment(null);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Fragment>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={bookingFormSubmitHandler} className="mt-12 space-y-6">
            <input
              type="text"
              defaultValue={date}
              className="input input-bordered input-primary w-full bg-base-200"
              readOnly
            />
            <select
              name="slot"
              className="select select-primary w-full bg-base-200"
            >
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              defaultValue={user?.displayName}
              className="input input-bordered input-primary w-full"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              className="input input-bordered input-primary w-full"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered input-primary w-full"
            />
            <input
              type="submit"
              defaultValue="submit"
              className="btn btn-accent w-full"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default BookingModal;
