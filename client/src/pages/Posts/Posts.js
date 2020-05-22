import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import Post from "../../components/Posts/Post"
import PostInput from '../../components/Posts/PostInput';
import {useAuth} from "../../utils/auth";

export default function Posts() {
    const {user} = useAuth();
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
        // setTextFieldValue(e.target.value);
        console.log("On click value: " + textFieldValue);
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
                        value={textFieldValue}/>
                    <div
                        className="post-content"
                        style={{
                        maxWidth: "100%",
                        justifyContent: "center"
                    }}>
                        {posts
                            ? (posts.map((post, i) => <Post key={i} post={post} id={post._id}/>))
                            : (
                                <p>Loading...</p>
                            )}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}