import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const navLinks = [
    { id: 0, link: "/", linkContent: "Home" },
    { id: 1, link: "/appointment", linkContent: "Appointment" },
    { id: 2, link: "/reviews", linkContent: "Reviews" },
    { id: 3, link: "/contact", linkContent: "Contact" },
    { id: 4, link: "/login", linkContent: "Login" },
  ];

  return (
    <Fragment>
      {navLinks.map((navLink) => (
        <li key={navLink.id}>
          <Link to={navLink.link}>{navLink.linkContent}</Link>
        </li>
      ))}
    </Fragment>
  );
};

export default NavMenu;
