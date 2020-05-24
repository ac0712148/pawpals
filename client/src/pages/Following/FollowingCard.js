import React from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import API from '../../utils/API'

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2)
    },
    heroContent: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        padding: theme.spacing(6)
    },
    section1: {
        margin: theme.spacing(3, 2)
    },
    section2: {
        margin: theme.spacing(2)
    }
}));

export default function FollowingCard(props) {
    const classes = useStyles();

    const {card, i, handleunFollow} = props;



    return (
        <Grid item key={i} xs={12} sm={6} md={4}>
            {/* {console.log(card)} */}
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={card.userPhotos[0] ? card.userPhotos[0] : "https://naturalhistory.si.edu/themes/gesso/images/default-avatar.jpg"}
                    title="Image title"/>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.username}
                    </Typography>
                    <Typography>
                        This is a little information about me.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => handleunFollow(card._id)}>
                        Unfollow
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}