import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <MoonLoader
          loading={isLoading}
          color="#36d7b7"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
