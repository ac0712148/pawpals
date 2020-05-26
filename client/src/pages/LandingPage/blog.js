import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));



const mainFeaturedPost = {
  title: 'Pawpals!',
  // description:
  //   "uncomment this and write here if you want anything text on the banner or first image other than the title",
  image: 'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  imgText: 'dog banner',
  linkText:
    <Button variant="contained" size="small">
          Sign up
        </Button>
  
};

const featuredPosts = [
  {
    title: 'About us',
    description:
      'Pawpals is a user friendly social media app that provides a dedicated and safe place to share about their furry friends.',
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    imageText: 'Image Text',
  },
  {
    title: 'Why pick us',
    description:
      'Users will find Pawpals is an excellent place to show of their doggo, and meet other dog friends! Users may share photos, ideas and find friends here on pawpwals.',
    image: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
    imageText: 'Image Text',
  },
];

const sidebar = {
  title: 'Benefits',
  description:
    'Private, Zero ads, User friendly interface, and Fun to use. Pawpals is an excellent home for you and your pet',
  social: [
    { name: 'Pawpals', icon: GitHubIcon, github : "https://github.com/ac0712148/pawpals" },
    { name: 'michaelleojacob', icon: GitHubIcon, github : "https://github.com/Michaelleojacob" },
    { name: 'albertcervantes', icon: GitHubIcon, github : "https://github.com/ac0712148" },
    { name: 'markprodehl', icon: GitHubIcon, github : "https://github.com/markprodehl"},
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" spacing={1}>
        <main>
        <br></br>
          <MainFeaturedPost post={mainFeaturedPost} />
       
          <Grid container spacing={3}>
            {featuredPosts.map((landingPageCard, index1) => (
              <FeaturedPost key={index1} landingPageCard={landingPageCard} />
            ))}
          </Grid>
          <Grid container spacing={3} className={classes.mainGrid}>
                                    
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}