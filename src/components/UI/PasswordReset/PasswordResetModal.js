import React, { Fragment, useContext, useRef } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const PasswordResetModal = () => {
  const { passwordResetHandler } = useContext(AuthContext);
  const emailRef = useRef();

  const handleSubmit = () => {
    const email = emailRef.current.value;

    passwordResetHandler(email)
      .then(() => console.log("Email sent"))
      .catch((error) => console.error(error));
  };

  return (
    <Fragment>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-medium text-lg mb-3">Your Email</h3>
          <input
            ref={emailRef}
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="modal-action justify-center">
            <label onClick={handleSubmit} htmlFor="my-modal" className="btn">
              Submit
            </label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PasswordResetModal;
