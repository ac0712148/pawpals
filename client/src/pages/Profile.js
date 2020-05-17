import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then(res => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <div className="container Profile">
      <h1>On the profile page!</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      
      <button type="button" className="btn btn-info btn-sm">
      <Link to="/">Go home</Link>
      </button>
      <button type="button" className="btn btn-info btn-sm ml-5">
      <Link to="/following">Following</Link>
      </button>
      <button type="button" className="btn btn-info btn-sm ml-5">
      <Link to="/">Go home</Link>
      </button>
    </div>
  );
}

export default Profile;
