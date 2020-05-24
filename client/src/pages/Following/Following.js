import React, {useState, useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider'
import { useAuth } from '../../utils/auth'
import Axios from "axios";

import FollowingHeader from './FollowingHeader'
import FollowingCard from './FollowingCard'
import AllUsers from './AllUsers'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2)
    },
    heroContent: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        padding: theme.spacing(6)
    },
    section1: {
        margin: theme.spacing(3, 2)
    },
    section2: {
        margin: theme.spacing(2)
    }
}));

export default function Following() {
    const classes = useStyles();

    const { user } = useAuth(); // user.id
    const [ currentUser, setCurrentUser] = useState([])
    const [others, setOthers] = useState([])
    const [users, setUsers] = useState([]);

    
    useEffect(() => {
        function filterUsers(usersData) {
            return usersData.filter((userData => {
                return userData._id !== user.id
            }))
        }
        const newArr = filterUsers(users);
        setOthers(newArr);
    }, [users, user.id])
    useEffect(() => {
        function getCurrentUser(userID) {
            Axios
                .get(`/api/user/${userID}`)
                .then(res => {
                    setCurrentUser(res.data)
                })
        }
        function getAllUsers() {
            Axios
                .get(`/api/users/`)
                .then(res => {
                    setUsers(res.data)
                })
        }
        getAllUsers();
        getCurrentUser(user.id)
    },[user.id]);

    function handleFollow(id) {
        console.log(id)
    }
    function handleunFollow(id) {
        console.log(id)
    }


    return (
        <div className="followers">
            {console.log(currentUser)}
            {console.log(others)}
            <main>
                <FollowingHeader />
                <div className="pageContent">
                    <Container className={classes.cardGrid} maxWidth="md">
                        <div className={classes.section1}>
                            <Typography variant="h3" align="center"> Following </Typography>
                            <Grid item sm />
                            <Grid container spacing={4}>
                                {currentUser.followers ? currentUser.followers.map((card, i) => (<FollowingCard key={Math.random()} card={card} i={i} handleunFollow={handleunFollow}/>)) : <h1>Loadings....</h1> }
                                {/* {users.map((card, i) => (
                                    <FollowingCard card={card} i={i} />
                                ))} */}
                            </Grid>
                        </div>
                        <Divider variant="middle"/>
                        <div className={classes.section2}>
                            <Grid container spacing={4}>
                                {others ? others.map((card, i) => (<AllUsers key={Math.random()} card={card} i={i} handleFollow={handleFollow}/>)) : <h1>Loadings....</h1> }
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
            <Footer />
        </div>


        // <React.Fragment>
        //     <CssBaseline/>
        //     {console.log(currentUser.followers)}
        //     <main>
        //         {/* Hero unit */}
        //         <div className={classes.heroContent}>
        //             <Container maxWidth="sm">
        //                 <Typography
        //                     component="h1"
        //                     variant="h2"
        //                     align="center"
        //                     color="textPrimary"
        //                     gutterBottom>
        //                     My Paw Pals
        //                 </Typography>
        //                 <div className={classes.heroButtons}>
        //                     <Grid container spacing={2} justify="center">
        //                         <Grid item>
        //                             <Button variant="outlined" color="primary">
        //                                 Search Pals
        //                             </Button>
        //                         </Grid>
        //                     </Grid>
        //                 </div>
        //             </Container>
        //         </div>
                // <Container className={classes.cardGrid} maxWidth="md">
                //     <div className={classes.section1}>
                //         <Typography variant="h3" align="center"> Following </Typography>
                //         <Grid item sm />
                //         <Grid container spacing={4}>
                //             {/* {console.log(currentUser.followers)} */}
                //             {users.map((card, i) => (
                //                 <Grid item key={i} xs={12} sm={6} md={4}>
                //                     <Card className={classes.card}>
                //                         <CardMedia
                //                             className={classes.cardMedia}
                //                             image={card.userPhotos[0]}
                //                             title="Image title"/>
                //                         <CardContent className={classes.cardContent}>
                //                             <Typography gutterBottom variant="h5" component="h2">
                //                                 {card.username}
                //                             </Typography>
                //                             <Typography>
                //                                 This is a little information about me.
                //                             </Typography>
                //                         </CardContent>
                //                         <CardActions>
                //                             <Button size="small" color="primary">
                //                                 View
                //                             </Button>
                //                             <Button size="small" color="primary" onClick={() => {console.log("Unfollow Clicked")}}>
                //                                 Unfollow
                //                             </Button>
                //                         </CardActions>
                //                     </Card>
                //                 </Grid>
                //             ))}
                //         </Grid>
                //     </div>
                //     <Divider variant="middle"/>
                //     <div className={classes.section2}>
                //         <Grid container spacing={4}>
                //             {users.map((card, i) => (
                //                 <Grid item key={i} xs={12} sm={6} md={4}>
                //                     <Card className={classes.card}>
                //                         <CardMedia
                //                             className={classes.cardMedia}
                //                             image={card.userPhotos[0]}
                //                             title="Image title"/>
                //                         <CardContent className={classes.cardContent}>
                //                             <Typography gutterBottom variant="h5" component="h2">
                //                                 {card.username}
                //                             </Typography>
                //                             <Typography>
                //                                 This is a little information about me.
                //                             </Typography>
                //                         </CardContent>
                //                         <CardActions>
                //                             <Button size="small" color="primary">
                //                                 View
                //                             </Button>
                //                             <Button size="small" color="primary" onClick={() => {console.log("Follow Clicked")}}>
                //                                 follow
                //                             </Button>
                //                         </CardActions>
                //                     </Card>
                //                 </Grid>
                //             ))}
                //         </Grid>
                //     </div>
                // </Container>
        //     </main>
        //     {/* Footer */}
        //     <footer className={classes.footer}>
        //         <Typography variant="h6" align="center" gutterBottom>
        //             Paw Pals
        //         </Typography>
        //         <Typography
        //             variant="subtitle1"
        //             align="center"
        //             color="textSecondary"
        //             component="p">
        //             We will give Paw Pals users some info here
        //         </Typography>
        //         <Copyright/>
        //     </footer>
        //     {/* End footer */}
        // </React.Fragment>
    );
}