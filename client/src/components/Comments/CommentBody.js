import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
// import CommentInput from './CommentInput'

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

export default function CommentBody() {
    // const {post} = props;
    // console.log(post.comments)
    const classes = useStyles();

    return (
        <div>
            <Divider/>
            <div className={classes.section1}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom>
                            Toothbrush
                        </Typography>
                    </Grid>
                </Grid>
                <Typography color="textSecondary" variant="body2">
                    Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just
                    down the hall.
                </Typography>
            </div>
        </div>
    )
}