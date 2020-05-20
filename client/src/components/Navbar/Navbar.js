import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";

const createLink = ({ text, to, ...rest }) => {
  const className = "nav-link";
  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {text}
      </Link>
    );
  }
  return (
    <span
      role="button"
      className={className}
      style={{ cursor: "pointer" }}
      {...rest}
    >
      {text}
    </span>
  );
};

function NavLinks() {
  const { isLoggedIn, logout } = useAuth();
  const links = [];
  if (isLoggedIn) {
    links.push({ text: "Profile", to: "/profile" });
    links.push({ text: "Logout", onClick: () => logout() });
  } else {
    links.push({ text: "Signup", to: "/signup" });
    links.push({ text: "Login", to: "/login" });
  }
  return (
    <ul className="navbar-nav">
      {links.map((link, i) => (
        <li key={i} className="nav-item">
          {createLink(link)}
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark">
      <div className="container navbar-container">
        <Link className="navbar-nav nav-item text-white" to="/profile">
          Paw Pals (old profile)
          <i className="fas fa-dog fa-2x" />
        </Link>
        <Link className="text-white" to="/newprofile">
          NewProfile       
        </Link>
        <Link className="text-white" to="/following">
          Following       
        </Link>
        <Link className="text-white" to="/myphotos">
          Photos      
        </Link>
        <Link className="text-white" to="/posts">
          Posts       
        </Link>
        
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
