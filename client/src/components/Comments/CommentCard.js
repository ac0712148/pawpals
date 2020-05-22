import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import Chip from '@material-ui/core/Chip';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
// import Typography from '@material-ui/core/Typography';
import CommentInput from './CommentInput'
import CommentBody from "./CommentBody"
import axios from "axios";
import {useAuth} from "../../utils/auth";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    chip: {
        margin: theme.spacing(0.5)
    },
    section1: {
        margin: theme.spacing(2, 2)
    },
    section2: {
        margin: theme.spacing(1)
    },
    section3: {
        margin: theme.spacing(3, 1, 1)
    }
}));

export default function CommentCard(props) {
    const {post} = props;
    const { user } = useAuth(); //user.id is the commenterId
    // console.log(user)
    // console.log(post)
    // console.log(post.comments)
    const classes = useStyles();

    const [ comments, setComments ] = useState([post.comments]);

    // async function fetchData() {}

    const [textFieldValue, setTextFieldValue] = useState(""); // This is the text
    const [username, setUserName] = useState(""); //Contains the commenterName

    const newCommentInputChange = (e) => {
        setTextFieldValue(e.target.value)
        // console.log(e.target.value)
    };


    async function fetchUserData() {
        const res = await axios.get(`/api/user/${user.id}`);
        // console.log(res.data.username)
        setUserName(res.data.username)
    }

    async function fetchData() {
        const res = await axios.get(`/api/post/${post._id}`)
        setComments(res.data.comments);
    }
    useEffect(() => {
        fetchUserData();
        fetchData();

    }, []);

    const handleSubmitNewComment = (e) => {
        console.log("On click value: " + textFieldValue);
        e.preventDefault();
        // console.log("Ready for patch...");
        // console.log("postId: " + post._id)
        // console.log("commenterId: " + user.id);
        // console.log("commenterName: " + username);
        // console.log("text: " + textFieldValue);
        // console.log("updateAction: addComment" );
        axios
            .patch(`/api/post/${post._id}`, {
                commenterId: user.id,
                commenterName: username,
                text: textFieldValue,
                updateAction: "addComment"
            }).then(() => {
                fetchData();
            })
    }

    return (
        <div className={classes.root}>
            {/* <CommentBody />
            <CommentBody /> */}
            {comments.map((comment, i) => <CommentBody comment={comment} key={i}/>)}
            <div className={classes.section2}>
                <CommentInput onChange={newCommentInputChange} onSubmit={handleSubmitNewComment} value={textFieldValue}/>
            </div>

        </div>
    );
}
