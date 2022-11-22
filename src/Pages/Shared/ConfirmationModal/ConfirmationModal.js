import React, { Fragment } from "react";

const ConfirmationModal = ({
  title,
  message,
  onCloseModal,
  onConfirm,
  modalData,
}) => {
  return (
    <Fragment>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={onConfirm.bind(null, modalData)}
              htmlFor="confirmation-modal"
              className="btn"
            >
              Delete
            </label>
            <button
              onClick={onCloseModal}
              className="btn btn-outline btn-error"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmationModal;
