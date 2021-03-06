import React, {useState, useEffect, useCallback} from "react";
import Grid from '@material-ui/core/Grid';
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
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
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
    const [followersData,
        setFollowersData] = useState([]);

    useEffect(() => {
        function filterUsers(usersData) {
            return usersData.filter((userData) => {
                return (followers.includes(userData._id))
            })
        }
        const arr = filterUsers(users)
        setFollowersData(arr);
    }, [followers, users, currentUser])

    useEffect(() => {
        function filterUsersFromFollowers(usersData) {
            return usersData.filter((userData) => {
                return (!(followers.includes(userData._id)) && (userData._id !== user.id))
            })
        }
        const arr = filterUsersFromFollowers(users)
        // const arr = filterUsersFromMyUser(users)
        setOthers(arr)
    }, [users, user.id, followers, currentUser])

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
        Axios
            .patch(`/api/followers/${user.id}`, {followers: id})
            .then((res => {
                setFollowers(res.data.followers)
            }))
    }
    const handleunFollow = useCallback((id) => {
        Axios
            .patch(`/api/unfollowers/${user.id}`, {followers: id})
            .then((res => {
                setFollowers(res.data.followers)
            }))
    }, [user.id])

    return (
        <div className="followers">
            <main>
                <FollowingHeader/>
                <div className="pageContent">
                    <Container className={classes.cardGrid} maxWidth="md">
                        <div className={classes.section1}>
                            {/* <Typography variant="h3" align="center" style={{paddingBottom: "20px"}}>
                                Following
                            </Typography> */}
                            <Grid item sm/>
                            <Grid container spacing={4}>
                                {followersData
                                    ? followersData.map((card, i) => (<FollowingCard
                                        key={Math.random()}
                                        card={card}
                                        i={i}
                                        handleunFollow={handleunFollow}/>))
                                    : <h1>Loading....</h1>}
                                {/* {users.map((card, i) => (
                                    <FollowingCard card={card} i={i} />
                                ))} */}
                            </Grid>
                        </div>
                        <Divider/>
                        <div className={classes.section2}>
                            <Grid container spacing={4}>
                                {others
                                    ? others.map((card, i) => (<AllUsers key={Math.random()} card={card} i={i} handleFollow={handleFollow}/>))
                                    : <h1>Loading....</h1>}
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
            <Footer/>
        </div>
    );
}