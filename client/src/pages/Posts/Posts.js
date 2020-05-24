import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import Post from "../../components/Posts/Post"
import PostInput from '../../components/Posts/PostInput';
import { useAuth } from "../../utils/auth";

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
  
    footer: {
        padding: theme.spacing(6),
    },
}));

export default function Posts() {
    const classes = useStyles();

    const { user } = useAuth();
    const [posts,
        setPosts] = useState([]);

    async function fetchData() {
        const res = await axios.get('/api/post');
        setPosts(res.data);
    }
    useEffect(() => {
        fetchData();

    }, []);

    const [textFieldValue,
        setTextFieldValue] = useState("");

    const newPostInputChange = (e) => {
        setTextFieldValue(e.target.value);
    };

    const handleSubmitNewPost = (e) => {
        e.preventDefault()
        axios
            .post('/api/post', {
                authorId: user.id,
                text: textFieldValue
            })
            .then(() => {
                fetchData();
            })
    };

    return (
        <div className="posts">
            <Grid container justify="center">
                <Grid item>
                    <PostInput
                        onChange={newPostInputChange}
                        onSubmit={handleSubmitNewPost}
                        value={textFieldValue} />
                    <div
                        className="post-content"
                        style={{
                            maxWidth: "100%",
                            justifyContent: "center"
                        }}>
                        {posts
                            ? (posts.map((post, i) => <Post key={i} post={post} id={post.id} />))
                            : (
                                <p>Loading...</p>
                            )}
                    </div>
                </Grid>
            </Grid>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Paw Pals
        </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    We will give Paw Pals users some info here
        </Typography>
                <Copyright />
            </footer>
        </div>

    );
}