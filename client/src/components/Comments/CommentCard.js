import React, {useState, useEffect, useCallback} from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
    const {user} = useAuth(); //user.id is the commenterId
    const classes = useStyles();

    const [comments,
        setComments] = useState([post.comments]);

    const [textFieldValue,
        setTextFieldValue] = useState(""); // This is the text
    const [username,
        setUserName] = useState(""); //Contains the commenterName

    const newCommentInputChange = (e) => {
        setTextFieldValue(e.target.value)
    };

    

    const fetchData = useCallback(() => {
        axios
            .get(`/api/post/${post._id}`)
            .then((res) => setComments(res.data.comments))

    }, [post._id])

    useEffect(() => {
        async function fetchUserData() {
            const res = await axios.get(`/api/user/${user.id}`);
            setUserName(res.data.username)
        }
        fetchUserData();
        fetchData();

    }, [fetchData, user.id]);

    const handleSubmitNewComment = (e) => {
        e.preventDefault();
        axios
            .patch(`/api/post/${post._id}`, {
            commenterId: user.id,
            commenterName: username,
            text: textFieldValue,
            updateAction: "addComment"
        })
            .then(() => {
                fetchData();
            })
            setTextFieldValue("")
    }

    return (
        <div className={classes.root}>
            {comments.map((comment, i) => <CommentBody comment={comment} key={i}/>)}
            <div className={classes.section2}>
                <CommentInput
                    onChange={newCommentInputChange}
                    onSubmit={handleSubmitNewComment}
                    value={textFieldValue}/>
            </div>

        </div>
    );
}
