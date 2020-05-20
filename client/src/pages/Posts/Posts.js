import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import Post from "../../components/Posts/Post"

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        axios
            .get('/api/post')
            .then((res) => {
                console.log(res)
                this.setState({posts: res.data});
            })
            .catch((err) => console.log(err));
    }

    render() {
        let i
        let recentPostsMarkup = this.state.posts
            ? (this.state.posts.map((post, i) => <Post key={i} post={post}/>))
            : (
                <p>Loading...</p>
            )
        return (
            <div className="posts">
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item sm={8}>
                        {recentPostsMarkup}
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Posts