  
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 125,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { landingPageCard } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {landingPageCard.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
           
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {landingPageCard.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
           
              </Typography>
            </CardContent>
          </div>
          <Hidden>
            <CardMedia className={classes.cardMedia} image={landingPageCard.image} title={landingPageCard.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  landingPageCard: PropTypes.object,
};