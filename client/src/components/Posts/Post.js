import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CommentIcon from '@material-ui/icons/Comment';
import PetsIcon from '@material-ui/icons/Pets';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vh",
    marginTop: "30px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PostCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

  return (
    
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            A
          </Avatar>
        }
        action={
            <>  
                <IconButton 
                    aria-label="settings"
                    // aria-owns={open ? 'long-menu' : null}
                    aria-haspopup="true"
                    // onClick={this.handleClick}
                    >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                //   anchorEl={anchorEl}
                //   open={open}
                //   onClose={this.handleClose}
                  PaperProps={{
                    style: {
                    //   maxHeight: ITEM_HEIGHT * 4.5,
                      width: 200
                    }
                  }}
                >
                    <MenuItem 
                    // onClick={() =>
                    //     this.handleClose()}
                    > 
                        Edit
                    </MenuItem>
                    <MenuItem onClick={() =>
                        this.handleClose()}
                    > 
                        Delete
                    </MenuItem>
                </Menu>
            </>
        }
        title="Name of Poster Goes Here"
        subheader="TimeStamp Goes Here"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This would be the post content/text
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add a like/paw">
          <PetsIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show comments"
        >
          <CommentIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Comments go here
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
