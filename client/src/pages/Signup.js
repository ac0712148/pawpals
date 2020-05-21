import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "./../utils/API";
import {useAuth} from "../utils/auth";
import "./Login.css"

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.email, formState.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch(err => alert(err));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div classname="container">
  <section className="container-fluid">
    {/* row and justify-content-center class is used to place the form in center */}
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
        <form className="form-container" onSubmit={handleFormSubmit}>

          <div className="form-group">
            <h4 className="text-center font-weight-bold text-info"> Sign Up </h4>
            <label htmlFor="username">Username:</label>
            <input 
            className="form-control" 
            name="username"
            type="text"
            id="username"           
            placeholder="Enter Username" 
            onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="InputEmail1">Email Address</label>
            <input 
            className="form-control" 
            name="email"
            type="email" 
            id="email"
            
            placeholder="Enter email" 
            onChange={handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="InputPassword1">Password</label>
            <input 
            className="form-control" 
            name="password"
            type="password"
            id="pwd" 
            placeholder="Password goes here" 
            onChange={handleChange}/>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Submit</button>
          <div className="form-footer">
          <Link to="/login">Login here</Link>
          </div>
        </form>
      </section>
    </section>
  </section>
</div>

  );
}

export default Signup;
