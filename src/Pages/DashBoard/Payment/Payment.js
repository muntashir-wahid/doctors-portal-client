import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
  const {
    data: { booking },
  } = useLoaderData();

  const { treatmentName, appointmentDate, price, slot } = booking;

  return (
    <div>
      <h3 className="text-3xl  mb-3">Payment for {treatmentName}</h3>
      <p>
        Please pay <strong>${price}</strong> for {treatmentName} on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
