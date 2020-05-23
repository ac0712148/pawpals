import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";

import "./NavBar.css"

const createLink = ({ text, to, ...rest }) => {
  const className = "topnav";
  const id = "myTopnav"
  if (to) {
    return (
      <Link className={className} id={id} to={to} {...rest}>
        {text}
      </Link>
    );
  }
  return (
    <a
      role="button"
      className="topnav logout"
      id={id}
      style={{ cursor: "pointer" }}
      {...rest}
    >
      {text}
    </a>
  );
};

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function NavLinks() {
  const { isLoggedIn, logout } = useAuth();
  const links = [];
  if (isLoggedIn) {
    links.push({ text: "My Profile", to: "/newprofile" });
    links.push({ text: "Following", to: "/following" });
    links.push({ text: "Photos", to: "/myPhotos" });
    links.push({ text: "Forum", to: "/posts" });
    links.push({ text: "Logout", onClick: () => logout() });
  } else {
    links.push({ text: "Signup", to: "/signup" });
    links.push({ text: "Login", to: "/login" });
    // links.push({ text: "Home", to: "/landingpage" });
  }
  return (
    <div className="topnav" id="myTopnav">
      {links.map((link, i) => (
        <span href="/" key={i} className="">
          {createLink(link)}
        </span>
      ))}
      <a href="#/" className="icon" onClick={myFunction}>
        <i className="fa fa-bars" />
      </a>
      
    </div>
  );
  
  

}

function Navbar() {
  return (
    <div className="topnav" id="myTopnav">
      <NavLinks />
      
      {/* <a href="#/" className="icon" onClick={myFunction}>
        <i className="fa fa-bars" />
      </a> */}
    </div>
  );
}

export default Navbar;
