import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUpFormSubmitHandler = (user) => {
    console.log(user);
  };

  return (
    <div className="min-h-screen flex justify-center items-center my-5">
      <div className="w-96 p-7 shadow-lg rounded-lg">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Please Signup
        </h3>
        <form onSubmit={handleSubmit(signUpFormSubmitHandler)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "Password must be strong",
                },
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 charecter",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="text-red-400 mt-1">{errors.password?.message}</p>
          )}

          <input
            type="submit"
            value="Signup"
            className="btn btn-accent w-full text-white"
          />
        </form>
        <div className="flex flex-col w-full border-opacity-50 mt-5">
          <div>
            Already have an Account?
            <Link to="/login" className="text-secondary ml-1">
              Login
            </Link>
          </div>
          <div className="divider">OR</div>
          <div>
            <button className="btn btn-accent btn-outline w-full">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
