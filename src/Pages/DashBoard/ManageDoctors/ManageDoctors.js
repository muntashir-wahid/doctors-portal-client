import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: () =>
      fetch("http://localhost:5000/api/v1/doctors", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      }).then((res) => res.json()),
  });

  const closeModalHandler = () => {
    setDeletingDoctor(null);
  };

  const deleteDoctorHandler = (doctor) => {
    fetch(`http://localhost:5000/api/v1/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then(({ data, status }) => {
        console.log(data, status);
        if (status === "success") {
          refetch();
          toast.success("Doctor deleted successfully");
        }
      });
  };

  return (
    <div>
      <h3 className="text-3xl mb-10">Manage Doctors</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>Loading...</tr>
            ) : (
              data?.data?.doctors?.map((doctor, index) => (
                <tr key={doctor._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={doctor.image} alt={doctor.name} />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <label
                      onClick={setDeletingDoctor.bind(null, doctor)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={"Are you sure you want to delete?"}
          message={`If you delete ${deletingDoctor?.name}. You can't undone it.`}
          onCloseModal={closeModalHandler}
          onConfirm={deleteDoctorHandler}
          modalData={deletingDoctor}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
