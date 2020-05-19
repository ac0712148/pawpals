import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

import "./Profile.css"

// import { Image, Container, Row, Col } from 'react-bootstrap';


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
    <div className="container mt-1">
  
      <div className="card text-white text-justify profile">
        <img src="https://cdn.akc.org/content/hero/puppy_pictures_header.jpg" className="img-fluid" alt="100x100" />
        <div className="card-img-overlay">
          <h2>Welcome: {username} <span>| Email: {email}</span></h2>
        </div>
      </div>

      <div className="card div-background">
        <div className="card-body">
          <h5 className="card-title mb-5"> Tell us whats on your mind?</h5>
          <input className="form-control mb-5" type="text" placeholder="Input..." />
          <button type="button" className="btn btn-primary">Post</button>
        </div>
      </div>

      <div className="card div-background">
        <div className="card-body">
          <h5 className="card-title mb-5"> My Pictures</h5>
          <img src="..." alt="..." className="img-thumbnail" />
          <img src="..." alt="..." className="img-thumbnail" />
          <img src="..." alt="..." className="img-thumbnail" />
          <button type="button" className="btn btn-info btn-sm ml-5">
            <Link to="/myphotos">My Photos</Link>
          </button>
        </div>
      </div>

      <div className="card div-background">
        <div className="card-body">
          <h5 className="card-title mb-5"> About me</h5>
          <input className="form-control mb-5" type="text" placeholder="A little about you..." />
          <button type="button" className="btn btn-primary">Update</button>
        </div>
      </div>

      <div className="card div-background">
        <div className="card-body">
          <h5 className="card-title mb-5"> My Friends</h5>
          <img src="..." alt="..." className="img-thumbnail" />
          <img src="..." alt="..." className="img-thumbnail" />
          <img src="..." alt="..." className="img-thumbnail" />
          <button type="button" className="btn btn-info btn-sm ml-5">
            <Link to="/Following">My Friends</Link>
          </button>
        </div>
      </div>

      <div className="div-background mb-5 pt-3 pb-2">
        <button type="button" className="btn btn-info btn-sm mt-1 align-text">
          <Link to="/">Edit Profile</Link>
        </button>
        <button type="button" className="btn btn-info btn-sm ml-2 mt-1">
          <Link to="/following">Following</Link>
        </button>
        <button type="button" className="btn btn-info btn-sm ml-2 mt-1">
          <Link to="/myphotos">My Photos</Link>
        </button>
        <button type="button" className="btn btn-info btn-sm ml-2 mt-1">
          <Link to="/posts">My Posts</Link>
        </button>

      </div>
    </div>

  );
}

export default Profile;

