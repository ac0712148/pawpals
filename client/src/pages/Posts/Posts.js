import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import Post from "../../components/Posts/Post"
import PostInput from '../../components/Posts/PostInput';

export default function Posts() {
    const [posts,
        setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('/api/post');
            setPosts(res.data);
        }
        fetchData();

    }, []);

    return (
        <div className="posts">
            <Grid container justify="center" >
                <Grid item>
                    <PostInput/>
                    <div className="post-content" style={{maxWidth: "100%", justifyContent: "center"}}>
                        {posts
                            ? (posts.map((post, i) => <Post key={i} post={post}/>))
                            : (
                                <p>Loading...</p>
                            )}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}