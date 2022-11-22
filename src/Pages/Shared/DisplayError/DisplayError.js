import React from "react";
import { Link, useRouteError } from "react-router-dom";

const DisplayError = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-3">
      <h4 className="text-red-400 text-3xl text-center">
        Something Wrong Happened
      </h4>
      <p className="text-red-400">
        {error?.message || error?.statusText} {error?.status}
      </p>
      <Link to="/">
        <button className="btn btn-primary btn-outline">Go to Home</button>
      </Link>
    </div>
  );
};

export default DisplayError;
