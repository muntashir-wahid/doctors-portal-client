import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const NavMenu = () => {
  const { user, signOutHandler } = useContext(AuthContext);

  const userLogOutHandler = () => {
    signOutHandler().then(() => {
      // console.log("Logged out successfully");
    });
  };

  const navLinks = [
    { id: 0, link: "/", linkContent: "Home" },
    { id: 1, link: "/appointment", linkContent: "Appointment" },
    { id: 2, link: "/reviews", linkContent: "Reviews" },
    { id: 3, link: "/contact", linkContent: "Contact" },
    // { id: 4, link: "/login", linkContent: "Login" },
  ];

  return (
    <Fragment>
      {navLinks.map((navLink) => (
        <li key={navLink.id}>
          <Link to={navLink.link}>{navLink.linkContent}</Link>
        </li>
      ))}
      {user?.uid ? (
        <Fragment>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button
              onClick={userLogOutHandler}
              className="btn btn-accent btn-outline"
            >
              Logout
            </button>
          </li>
        </Fragment>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </Fragment>
  );
};

export default NavMenu;
