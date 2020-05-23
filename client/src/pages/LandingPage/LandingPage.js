import React from "react";
// import { useAuth } from "../../utils/auth";
// import API from "./../../utils/API";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
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

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.white,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    card: {
      height: "300px",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
      paddingBottom: "56.25%"
    },
  
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      // backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    large: {
      height: "300px",
      width: "300px",
    },
    medium: {
      height: "50px",
      width: "50px",
    },
    //   cardHeading: {
    //     padding: theme.spacing(0, 9, 0),
    //   },
      btn: {
        padding: theme.spacing(0, 5, 0),
        height: '20px'
  
      }
  }));
  

function LandingPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
        <CssBaseline />

        {/* banner */}
        <div className={classes.heroContent}>
          <Container maxwidth="100%">
            <Grid container spacing={2} justify="center">
              <Grid item>
                <img
                  src="https://images.unsplash.com/photo-1525253086316-d0c936c814f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"  
                  alt="Remy Sharp"
            
                  className={classes.large}
                />
              </Grid>
              
            </Grid>
          </Container>
        </div>
        {/* end of banner */}
        


        <Grid  item xs={12} sm={12} align="center">
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" align="center">
                    About Pawpal
                  </Typography>
                  <Typography align="center">
                  Pawpal is a social network application for dogs and dog lovers to interact. 
                  <br></br>
                  <br></br>
                  We aim to provide a user friendly environment for dog lovers to share and post about their furry friends
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <br></br>

            
        <Grid  item xs={12} sm={12} align="center"> 
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" align="center">
                    How to use Pawpals!
                  </Typography>
                  
                <div className={classes.heroButtons}>
                  <Button variant="outlined" color="primary">
                    <Link className="text-white" to="/signup">Signup</Link>
                  </Button>
                </div>
        
                 
                  <div className={classes.heroButtons}>
                <Button variant="outlined" color="primary">
                    <Link className="text-white" to="/login">Login</Link>
                  </Button>
                </div>

                  <br></br>
                  <br></br>
                  Explore!
                  <br></br>
                  <br></br>
                  
                </CardContent>
              </Card>
            </Grid>

        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Paw Pals
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          <span>github | contact | signup | login</span>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}

        </React.Fragment>
    )
}


export default LandingPage;