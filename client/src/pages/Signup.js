import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "./../utils/API";
import {useAuth} from "../utils/auth";
// import "./Login.css"

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import CircularProgress from '@material-ui/core/CircularProgress';
import PetsIcon from '@material-ui/icons/Pets';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

function Signup() {
  // const classes = useStyles();

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
    <div>
    <Grid container>
      <Grid item sm />
      <Grid item >
        <PetsIcon />
        <Typography variant="h2">SignUp</Typography>
        <form noValidate className="form-container" onSubmit={handleFormSubmit}>
          <TextField
            id="username"
            name="username"
            type="text"
            label="Username"
            className="form-control"
            fullWidth
            onChange={handleChange}
          >
          </TextField>
          <TextField 
            id="email" 
            name="email" 
            type="email" 
            label="Email"
            className="form-control"
            onChange={handleChange}
            fullWidth
          >
          </TextField>
          <TextField
            id="pwd"
            name="password"
            type="password"
            label="Password"
            className="form-control"
            fullWidth
            onChange={handleChange}
          >
          </TextField>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="button"
          >
            SignUp
          </Button>
          <br />
          <small>
            Already have an account ? Login <Link to="/login">here</Link>
          </small>
        </form>
        </Grid>
        <Grid item sm />
    </Grid>
   <br />
  {/* <section className="container-fluid"> */}
    {/* row and justify-content-center class is used to place the form in center */}
    {/* <section className="row justify-content-center">
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
  </section> */}
  </div>


  );
}

export default Signup;
