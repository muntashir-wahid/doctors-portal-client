import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const imgHostingKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const addDoctorFormSubmitHandler = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(({ data: imageData, success }) => {
        if (success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imageData.url,
          };

          fetch("http://localhost:5000/api/v1/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then(({ data, status }) => {
              if (status === "success") {
                toast.success("Doctor created successfully");
                navigate("/dashboard/manage-doctors");
              }
            });
        }
      });
  };

  const { isLoading, data } = useQuery({
    queryKey: ["specialties"],
    queryFn: () =>
      fetch("http://localhost:5000/api/v1/appointment-specialty").then((res) =>
        res.json()
      ),
  });

  return (
    <div className="w-96 p-7 shadow-lg rounded-lg m-5">
      <h2 className="text-3xl mb-8">Add a new Doctor</h2>

      <form onSubmit={handleSubmit(addDoctorFormSubmitHandler)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Doctor name"
            className="input input-bordered w-full"
            {...register("name", { required: "Name is required" })}
          />
        </div>
        {errors.name && (
          <p className="text-red-400 mt-1">{errors.name?.message}</p>
        )}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full"
            {...register("email", { required: "Email is required" })}
          />
        </div>
        {errors.email && (
          <p className="text-red-400 mt-1">{errors.email?.message}</p>
        )}
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full max-w-xs"
          >
            {!isLoading &&
              data.data.specialties.map((specialalty) => (
                <option key={specialalty._id} value={specialalty.name}>
                  {specialalty.name}
                </option>
              ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs mb-5">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            placeholder="Doctor name"
            className="input input-bordered w-full"
            {...register("image")}
          />
        </div>

        <input
          type="submit"
          value="Add doctor"
          className="btn btn-accent w-full text-white"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
