import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useCheckAdmin from "../hooks/useCheckAdmin";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useCheckAdmin(user?.email);

  return (
    <div>
      <NavBar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            {isAdmin && (
              <Fragment>
                <li>
                  <Link to="/dashboard/users">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-doctor">Add a Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manage-doctors">Manage Doctors</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
