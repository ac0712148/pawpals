import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
// import "./Login.css"

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PetsIcon from '@material-ui/icons/Pets';


function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    login(email, password)
      // navigate to the profile page
      .then(() => history.push("/newprofile"))
      .catch(err => {
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <Grid container className="form">
        <Grid item sm />
        <Grid item sm>
          <PetsIcon />
          <Typography variant="h2">Login</Typography>
          <form noValidate className="form-container" onSubmit={handleFormSubmit}>
            <TextField 
              id="email"
              name="email"
              type="email"
              label="Email"
              className="form-control"
              fullWidth
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <TextField 
              id="pwd"
              name="password"
              type="password"
              label="Password"
              className="form-control"
              fullWidth
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="button"
            >
              Login
            </Button>
            <br />
            <small>
              Don't have an account ? SignUp <Link to="/signup">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
      {/* <br />
  <section className="container-fluid">
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">

        <form className="form-container" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <h4 className="text-center font-weight-bold text-info"> Login </h4>
            <label htmlFor="InputEmail1">Email Address</label>
            <input 
            type="email" 
            name="email" 
            value={email} 
            className="form-control" 
            id="email" 
            
            placeholder="Enter email" 
            onChange={({ target }) => setEmail(target.value)}
            />          
          </div>

          <div className="form-group">
            <label htmlFor="InputPassword1">Password</label>
            <input 
            type="password" 
            className="form-control" 
            id="pwd" 
            placeholder="Password" 
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Submit</button>
          <div className="form-footer">
            <p>  <Link to="/signup">Signup here</Link></p>
          </div>
        </form>
        
      </section>
    </section>
  </section> */}
  </div>

  );
}

export default Login;