import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({userName}) => {
  return (
    <nav className="navbar">
      <h1>Welcome</h1>
      <ul className="nav-left">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/user" className="nav-link">
          User
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/profile" className="nav-link">
          profile
        </Link>
        <Link to={`/instagram/${userName}`} className="nav-link">
          Instagram
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
