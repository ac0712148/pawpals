import React, {useState, useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider'
import {useAuth} from '../../utils/auth'
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

    const {user} = useAuth(); // user.id
    const [currentUser,
        setCurrentUser] = useState([])
    const [others,
        setOthers] = useState([]);
    const [users,
        setUsers] = useState([]);
    const [followers,
        setFollowers] = useState([]);
    const [followersData, setFollowersData] = useState([]);

    
    // console.log(arr)

    useEffect(() => {
        function filterUsers(usersData) {
            return usersData.filter((userData) => {
                return (followers.includes(userData._id))
            })
        }
        const arr = filterUsers(users)
        setFollowersData(arr);
    }, [followers, users])

    useEffect(() => {
        function filterUsersFromFollowers(usersData) {
            return usersData.filter((userData) => {
                return (!(followers.includes(userData._id)) && (userData._id !== user.id))
            })
        }
        const arr = filterUsersFromFollowers(users)
        // const arr = filterUsersFromMyUser(users)
        setOthers(arr)
    }, [users, user.id, followers])
    
    useEffect(() => {
        function getCurrentUser(userID) {
            Axios
                .get(`/api/user/${userID}`)
                .then(res => {
                    setCurrentUser(res.data)
                    setFollowers(res.data.followers)
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
    }, [user.id]);

    function handleFollow(id) {
        console.log(id)
    }
    function handleunFollow(id) {
        console.log(id)
    }

    return (
        <div className="followers">
            {console.log(followers)}
            <main>
                <FollowingHeader/>
                <div className="pageContent">
                    <Container className={classes.cardGrid} maxWidth="md">
                        <div className={classes.section1}>
                            <Typography variant="h3" align="center">
                                Following
                            </Typography>
                            <Grid item sm/>
                            <Grid container spacing={4}>
                                {/* {console.log(others)} */}
                                {followersData
                                    ? followersData.map((card, i) => (<FollowingCard
                                        key={Math.random()}
                                        card={card}
                                        i={i}
                                        handleunFollow={handleunFollow}/>))
                                    : <h1>Loadings....</h1>}
                                {/* {users.map((card, i) => (
                                    <FollowingCard card={card} i={i} />
                                ))} */}
                            </Grid>
                        </div>
                        <Divider />
                        <div className={classes.section2}>
                            <Grid container spacing={4}>
                                {others
                                    ? others.map((card, i) => (<AllUsers key={Math.random()} card={card} i={i} handleFollow={handleFollow}/>))
                                    : <h1>Loadings....</h1>}
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
            <Footer/>
        </div>
    );
}