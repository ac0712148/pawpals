import React, { useState, useEffect } from "react";
import { useAuth } from "../../utils/auth";
import API from "./../../utils/API";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Tab from "@material-ui/core/Tab";
import Axios from "axios";
import BioEdit from "../../components/BioEdit/BioEdit"

///////// Imports needed for post preview ///////
import { CardHeader } from "@material-ui/core";
/////// End Imports for posts///////////////////
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©{new Date().getFullYear()}
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
  username: {
    marginLeft: "15px",
    lineHeight: "2.5em",
  },
  tab: {
    width: "100%",
    height: "100px",
  },
  //   cardHeading: {
  //     padding: theme.spacing(0, 9, 0),
  //   },
  btn: {
    padding: theme.spacing(0, 5, 0),
    height: "20px",
  },

}));

// const cardsFirstRow = [1, 2];
// //   const cardsSecondRow = [1, 2];

export default function NewProfile() {
  const [username, setUsername] = useState("");
  // Keeping email here in case we need it later
  // const [email, setEmail] = useState("");
  const [userPhoto, setUserPhoto] = useState([]);
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    async function getAllUsers() {
      // abstracts out response = { data: { username: 'b', userPhots: []}}
      // ==> username === 'b'
      // ==> userPhotos === []
      const {
        data: { username, userPhotos },
      } = await API.getUser(user.id);
      console.log(username, userPhotos);
      setUsername(username);
      setUserPhoto(userPhotos);
      //keeping email here in case we need it later
      // setEmail(res.data.email);
      const res = await Axios.get(`/api/users/`);
      setUsers(res.data);
    }

    if (user.id) {
      getAllUsers();
    }
  }, [user.id]);

  ////////////////Bio Part ///////////////////////
  const [textFieldValue,
    setTextFieldValue] = useState("");
    const [bio, setBio] = useState("");
    const [userRefresh, triggerUserRefresh] = useState(true)

    useEffect(() => {
      function fetchData() {
        Axios.get(`/api/user/${user.id}`).then((res) => {
          setBio(res.data.bio)
        });
      }
      if(userRefresh){
        fetchData();
      }
      triggerUserRefresh(false)
    }, [user.id, userRefresh]);

  const newPostInputChange = (e) => {
    console.log(e.target.value)
    setTextFieldValue(e.target.value);
  };

  const handleSubmitNewPost = (e) => {
    // Body is { "bio" : "text"}
    e.preventDefault()
    Axios
        .patch(`/api/userBio/${user.id}`, {
            bio: textFieldValue
        })
        .then(() => {
            // fetchData();
        })
    setTextFieldValue("")
    triggerUserRefresh(true)
};
//////////////////////////// End Bio Part

  /////////////// Post preview Section/////////
  
  const [latestPost, setLatestPost] = useState([])
  useEffect(() => {
    function getPosts() {
      Axios.get('/api/post').then((res) => {
        console.log(res.data);
        if (res.data.length === 0) {
          setLatestPost([]);
        }
        else {
          setLatestPost(res.data[0]);
        }
      })
    }
    getPosts();
  },[])

  function convertTimestampToDate(unix_timestamp) {
    var formattedTime = new Date(unix_timestamp).toLocaleDateString("en-US")
    return formattedTime;
}
  /////////////// End Post preview Section //////

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
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
            ></Typography>

            {/* THIS IS THE UPDATE BUTTON (WE'LL ADD THIS FEATURE LATER) */}
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Update Profile
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={3}>

                       {/* {Bio} */}
                       <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Who is PawPal {username}!
                    <Card style={{width: "100%", backgroundColor: "#F4F6F6"}}>
                      {/* <CardHeader title="latestPost.authorId.username" /> */}
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="h2">
                        {bio ? bio :  <span>Add a Bio... </span>}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Typography>
                </CardContent>
                <BioEdit onChange={newPostInputChange} onSubmit={handleSubmitNewPost} value={textFieldValue}/>
              </Card>
            </Grid>


            {/* Post */}
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Latest PawPost!
                  </Typography>
                  <Typography  component="h4">
                    Click to view PawPost!
                  </Typography>
                  {/* <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography> */}
                  <Box to="/posts" component={Link} display="flex" flexWrap="wrap" style={{textDecoration: "none"}}>
                  {latestPost.authorId ? (<Card style={{width: "100%", backgroundColor: "#F4F6F6"}} variant="outlined">
                    <CardHeader title={latestPost.authorId.username} subheader={convertTimestampToDate(latestPost.timeStamp)}/>
                    <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {latestPost.text}
                    </Typography>
                </CardContent>
                  </Card>) : <h2>No Posts Available</h2>}
                  </Box>
                </CardContent>

              </Card>
            </Grid>

            {/* PHOTOS */}
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <Box to="/myphotos" component={Link} display="flex" flexWrap="wrap">
                  {userPhoto
                    .filter((x, i) => i > 0 && i < 10)
                    .map((p, i) => (
                      <Box width="33.33%" key={i + "-img"}>
                        <Avatar
                          src={p}
                          variant="square"
                          className={classes.tab}
                        />
                      </Box>
                    ))}
                </Box>

                <CardContent className={classes.cardContent}>
                  <Tab label="View All Photos" to="/myphotos" component={Link} 
                  />
                </CardContent>
              </Card>
            </Grid>

            {/* Followers          */}
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
            
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.cardHeading}
                  >
                    Pack Pics
                  </Typography>
           
                  {users
                    .filter((x, i) => i > 0 && i < 5)
                    .map((card, i) => {
                      console.log(card)
                      const image = card.userPhotos[0]
                        ? card.userPhotos[0]
                        : "https://naturalhistory.si.edu/themes/gesso/images/default-avatar.jpg";

                      return (
                        <Box my={1} key={i + "-avatar"} display="flex">
                          <Avatar
                            alt="Remy Sharp"
                            src={image}
                            component="span"
                          />
                          <Box style={{textDecoration: "none"}} to={`/otherPhotos/${card._id}/${card.username}`} component={Link} display="flex" flexWrap="wrap">
                            <Typography
                              align="center"
                              classes={{ root: classes.username }}
                            >
                              {card.username}'s photos
                            </Typography>
                          </Box>
                        </Box>
                      );
                    })}
                    <Tab                    
                      label="Click here for my PawPals"
                      to="./following"
                      component={Link}
                      style={{
                        "color": "rgb(41,189,193)",
                        "alignText": "center"
                      }}
                    />               
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
            PawPals!
        </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            {/* We will give Pawpals users some info here */}
        </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
    </React.Fragment>
  );
}
