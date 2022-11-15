import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { signInUserHandler } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const logInFormSubmitHandler = (user) => {
    const { email, password } = user;

    signInUserHandler(email, password)
      .then(({ user }) => {
        setLoginError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.error(error);
        setLoginError(error.message);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center my-5">
      <div className="w-96 p-7 shadow-lg rounded-lg">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Please Login
        </h3>
        <form onSubmit={handleSubmit(logInFormSubmitHandler)}>
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
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
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
          {loginError && <p className="text-red-400 mt-1">{loginError}</p>}
          <label className="label mb-3">
            <span className="label-text">Forget password?</span>
          </label>
          <input
            type="submit"
            value="Login"
            className="btn btn-accent w-full text-white"
          />
        </form>
        <div className="flex flex-col w-full border-opacity-50 mt-5">
          <div>
            New to Doctors Portal?
            <Link to="/signup" className="text-secondary ml-1">
              Create an Account
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

export default Login;
