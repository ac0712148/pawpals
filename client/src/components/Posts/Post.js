import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {CardHeader} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';
import CommentIcon from '@material-ui/icons/Comment';

const styles = {
    card: {
        display: 'flex',
        marginBottom: 10
    },
    content: {
        // padding: 1
    },
    textBody: {
        paddingLeft: 25
    }
}

class Post extends Component {
    render() {
        const {
            classes,
            post: {
                text,
                timeStamp,
                authorId,
                likers,
                likesCount,
                comments
            }
        } = this.props;
        console.log(timeStamp)
        const date = new Date(timeStamp);
        console.log(date.toString())
        let finalDate = date.toString();

        return (
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <CardHeader title={authorId} subheader={finalDate }/>
                    <Typography variant="body1" className={classes.textBody}>
                        {text}
                    </Typography>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add a like/paw">
                            <PetsIcon/>
                            
                        </IconButton>
                        {likesCount}
                        <IconButton aria-label="show comments">
                            <CommentIcon/>
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Post);