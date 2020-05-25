import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/auth";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import API from "../../utils/API"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import Axios from "axios"

function Copyright(props) {
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

export default function MyPhotos() {
  const classes = useStyles();
  const { user } = useAuth();

  const [file, setFile] = useState({});

  const selectFile = (e) => {
    if (!e.target.files[0]) {
      return;
    }
    setFile(e.target.files[0]);
  };
  const sendFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    API.addPhoto(formData)
      .then(res => {
        API.addUserPhotos(user.id, res.data.Location)
          .then((res) => {
            console.log(res.data.userPhotos)
            setPhotos(res.data.userPhotos)
          }).catch(err => {
            console.log(err)
          })
      }).catch(err => {
        console.log(err)
      })
  };

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await API.getUser(user.id);
      setPhotos(res.data.userPhotos)
    }
    fetchData();
  }, [user.id]);

  function handleDelete(photourl) {
    console.log(photourl)
    console.log(user.id)
    API.deletePhoto(user.id, photourl) 

    // Axios.delete(`/api/userPhotos/${user.id}`, {
    //   photo: photourl
    // })

  }
 
  return (
    <React.Fragment>
      
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              My Photos
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here are some photos of me with my friends
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <input type="file" onChange={selectFile} />
                </Grid>
                <Grid item>
                  <button onClick={sendFile}
                  // This onclick/onchgange should clear the file field
                  // onClick={e => (e.target.value = null)} 
                  >Upload</button>
                  
                </Grid>
              </Grid>
            </div>
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
                  <IconButton aria-label="delete" className={classes.margin} onClick={() => handleDelete(url)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>                 
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