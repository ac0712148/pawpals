import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CommentInput from './CommentInput'
import CommentBody from "./CommentBody"

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
    console.log(post.comments)
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CommentBody />
            <CommentBody />
            <div className={classes.section2}>
                <CommentInput/>
            </div>

        </div>
    );
}
