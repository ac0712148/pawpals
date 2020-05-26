import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import API from "../../utils/API"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: 'paper'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9

  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(6),
  },
}));

export default function OtherUsersPhotos(props) {
  const id = props.match.params.id;
  const name = props.match.params.username;

  const classes = useStyles();
  const [photos, setPhotos] = useState([])


  useEffect(() => {
    async function fetchData() {
      const res = await API.getUser(id);
      setPhotos(res.data.userPhotos)
    }
    fetchData();
  }, [id]);
 
  return (
    <React.Fragment>
      
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {name}'s photos
            </Typography>
            {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here are some of my friends photos
            </Typography> */}
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {photos.map((url) => (
              <Grid item key={url} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={url}
                    title="Image title"
                  />                              
                </Card>                
              </Grid>          
            ))} 
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          PawPals!
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          We will give Paw Pals users some info here
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}