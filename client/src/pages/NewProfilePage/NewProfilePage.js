import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/auth";
import API from "./../../utils/API";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Tab from "@material-ui/core/Tab";

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
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: "300px",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
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

// const cardsFirstRow = [1, 2];
// //   const cardsSecondRow = [1, 2];

export default function NewProfile() {

  const [username, setUsername] = useState("");
  // Keeping email here in case we need it later
  // const [email, setEmail] = useState("");
  const [userPhoto, setProfile] =useState(""); 
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then(res => {
      setUsername(res.data.username);
      //keeping email here in case we need it later
      // setEmail(res.data.email);
      setProfile(res.data.userPhotos)
    });
  }, [user]);

  const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="relative">
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Album layout
            </Typography>
          </Toolbar>
        </AppBar> */}
      <main>
        {/* Hero unit */}

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Avatar
                  alt="Remy Sharp"
                  src={userPhoto[0]}
                  className={classes.large}
                />
              </Grid>
              {/* <h2>Name: {username}: <span> email: {email}</span></h2> */}
              <h2>Hi! My Name is {username}</h2>
            </Grid>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              // paragraph
            >
              
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Update Profile
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Whats pulling your tail?
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    About Me
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  {/* <Typography gutterBottom variant="h5" component="h2">
                    <Button variant="contained" className={classes.btn} justify='center'>
                          Click for more pals
                          </Button>
                    </Typography> */}
                  <Tab label="View Photos" to="/myphotos" component={Link} />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.cardHeading}
                  >
                    My Paw Pals
                  </Typography>

                  <Avatar
                    alt="Remy Sharp"
                    src="https://cdn.mos.cms.futurecdn.net/BwL2586BtvBPywasXXtzwA-320-80.jpeg"
                    className={classes.medium}
                  />
                  <Avatar
                    alt="Remy Sharp"
                    src="https://www.lovethispic.com/uploaded_images/19345-Black-And-Brown-Puppy.jpg?2"
                    className={classes.medium}
                  />
                  <Avatar
                    alt="Remy Sharp"
                    src="https://minepuppy.com/wp-content/uploads/2018/02/pug-breed-minepuppy.jpg"
                    className={classes.medium}
                  />
                  <Avatar
                    alt="Remy Sharp"
                    src="https://minepuppy.com/wp-content/uploads/2018/02/pug-breed-minepuppy.jpg"
                    className={classes.medium}
                  />
                  <Tab
                    label="View All Paw Pals"
                    to="./following"
                    component={Link}
                   
                  />
                    <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
               
                  </CardActions>
                  
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Typography className={classes.root}></Typography>

      {/* Footer */}
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
          We will give Paw Pals users some info here
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
