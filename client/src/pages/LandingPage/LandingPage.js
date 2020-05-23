import React from "react";
// import { useAuth } from "../../utils/auth";
// import API from "./../../utils/API";
// import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Avatar from "@material-ui/core/Avatar";
// import Tab from "@material-ui/core/Tab";

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright © 
        {new Date().getFullYear()}
      </Typography>
    );
  }
  

function LandingPage() {

    return (
        
        <div className="container landing-page text-center text-white mt-5">
            <div className="bg1">               
                <h1 className="display-4">About PawPals!</h1>
                <p className="lead mt-5">Contrary to popular beliet. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <button type="button" className="btn btn-success btn-lg">
                    <Link className="text-white" to="/signup">Signup</Link>
                </button>
                <button type="button" className="btn btn-info btn-lg ml-3">
                    <Link className="text-white" to="/login">Go to Login</Link>
                </button>
            </div>
        </div>
        

    )
}

export default LandingPage;