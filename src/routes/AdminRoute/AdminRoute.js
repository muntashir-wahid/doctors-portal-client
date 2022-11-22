import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import { AuthContext } from "../../context/AuthProvider";
import useCheckAdmin from "../../hooks/useCheckAdmin";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useCheckAdmin(user.email);

  if (isLoading || isAdminLoading) {
    return <Loader isLoading={isLoading} />;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
