import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Need the MoreVerticon and FavoriteIcon for the settings and likes when we implement them later when we
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Comments from "../Comments/CommentCard";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        // display: 'flex',
        marginBottom: 10
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme
            .transitions
            .create('transform', { duration: theme.transitions.duration.shortest })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

export default function Post(props) {
    const { post, id } = props
    const classes = useStyles();
    const [expanded,
        setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    function convertTimestampToDate(unix_timestamp) {
        var formattedTime = new Date(unix_timestamp).toLocaleDateString("en-US")
        return formattedTime;
    }

    return (
        <div id={id}>
            <Card className={classes.root}>
                <CardHeader // avatar={Error: no source code supplied to jspretty!} //   <Avatar aria-label="recipe" className={classes.avatar}>
                    //     R
                    //   </Avatar>
                    // }
                    // IconButton is the setting icon that we have not used for now.
                    // action={< IconButton aria-label = "settings" > <MoreVertIcon/> </IconButton>} 
                    title={post.authorId.username} subheader={convertTimestampToDate(post.timeStamp)}/>

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.text}
                    </Typography>
                </CardContent>
                <CardActions
                    disableSpacing
                    style={{
                        display: "contents"
                    }}>
                    {/* FavouriteIcon is the heart icon that we will use when we implement post likes */}
                    {/* <IconButton aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton> */}
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {/* <MuiPickersUtilsProvider utils={MomentUtils}>
                            <DateTimePicker value={selectedDate} onChange={handleDateChange} />
                        </MuiPickersUtilsProvider> */}
                        <Comments post={post} />
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}
