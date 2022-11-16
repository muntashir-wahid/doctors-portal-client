import React from "react";
import { MoonLoader } from "react-spinners";

const Loader = ({ isLoading }) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <MoonLoader
        loading={isLoading}
        color="#36d7b7"
        size={120}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
