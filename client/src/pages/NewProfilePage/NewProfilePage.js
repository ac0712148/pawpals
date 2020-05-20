import React from "react";
// import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Tab from '@material-ui/core/Tab';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        PawPals
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
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
    paddingTop: '56.25%', // 16:9
  },
  
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
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
//   btn: {
//     padding: theme.spacing(0, 5, 0),
//     height: '20px'
    
//   }
}));

// const cardsFirstRow = [1, 2];
// //   const cardsSecondRow = [1, 2];

export default function NewProfile() {
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
                  src="https://www.raisingarizonakids.com/wp-content/uploads/2010/07/black-lab-puppy-face-thumb2.jpg"
                  className={classes.large}
                />
                
              </Grid>
            </Grid>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              This is a little bio about me and all of my Paw Pals. I love
              chewing on furniture and shoes but I'd much rather spend my time
              chasing my friends on the beach or running through the mountains.
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
                    image="https://muenstermilling.com/wp-content/uploads/2018/09/pugs.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    {/* <Typography gutterBottom variant="h5" component="h2">
                    <Button variant="contained" className={classes.btn} justify='center'>
                          Click for more pals
                          </Button>
                    </Typography> */}
                    <Tab label="View Photos" to="./myphotos" component={Link} />
                  </CardContent>
                  
                </Card>
              </Grid>           

            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.cardHeading}>
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
                    <Tab label="View All Paw Pals" to="./myphotos" component={Link} />
                                    
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Typography className={classes.root}>

</Typography>

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







