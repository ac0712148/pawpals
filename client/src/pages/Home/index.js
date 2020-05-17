import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./home.css";
import { useAuth } from "../../utils/auth";

function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();

  const goToEditProfile = () => history.push("/profile");

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome {user.email}</h2>
      </div>
      <p className="App-intro">
        <button
          type="button"
          className="btn btn-primary mt-5"
          onClick={goToEditProfile}
        >
          Go to/ Save Profile
        </button>
        <button
          type="button"
          className="btn btn-danger ml-3 mt-5"
          onClick={() => logout()}
        >
          Logout
        </button>
      </p>
    </div>
  );
}

export default Home;
