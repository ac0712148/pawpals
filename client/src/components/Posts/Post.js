import React, {Component} from 'react';
import clsx from 'clsx';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
    textBody: {
        paddingLeft: 25
    }
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            username: "",
            email: ""
        }
    }

    render() {
        const {
            classes,
            post: {
                text,
                timeStamp,
                authorId,
                // likers,
                likesCount
                // comments
            }
        } = this.props;
        const date = new Date(timeStamp);
        let finalDate = date.toString();

        return (
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <CardHeader title={authorId.username} subheader={finalDate}/>

                    <Typography variant="body1" className={classes.textBody}>
                        {text}
                    </Typography>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add a like/paw">
                            <PetsIcon/>
                        </IconButton>
                        {likesCount}
                        <IconButton
                            className={clsx(classes.expand, {
                            [classes.expandOpen]: this.state.expanded
                        })}
                            onClick={() => this.setState({
                            expanded: !this.state.expanded
                        })}
                            aria-expanded={this.state.expanded}
                            aria-label="show comments">
                            <CommentIcon/> {/* {console.log(this.state.expanded)} */}
                        </IconButton>
                    </CardActions>
                    {/* <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                Comments go here
                            </Typography>
                        </CardContent>
                    </Collapse> */}
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Post);