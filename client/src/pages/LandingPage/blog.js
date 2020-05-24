import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
// import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
// import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

// const sections = [
  // { title: 'Technology', url: '#' },
  // { title: 'Design', url: '#' },
  // { title: 'Culture', url: '#' },
  // { title: 'Business', url: '#' },
  // { title: 'Politics', url: '#' },
  // { title: 'Opinion', url: '#' },
  // { title: 'Science', url: '#' },
  // { title: 'Health', url: '#' },
  // { title: 'Style', url: '#' },
  // { title: 'Travel', url: '#' },
// ];

const mainFeaturedPost = {
  title: 'Pawpals!',
  // description:
  //   "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  imgText: 'main image description',
  linkText:
    <Button variant="contained" size="small">
          Sign up
        </Button>
  
};

const featuredPosts = [
  {
    title: 'About us',
    // date: 'Nov 12',
    description:
      'Pawpals is a user friendly social media app that provides a dedicated and safe place to share about their furry friends.',
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    imageText: 'Image Text',
  },
  {
    title: 'Why pick us',
    // date: 'Nov 11',
    description:
      'Users will find Pawpals is an excellent place to show of their doggo, and meet other dog friends! Users may share photos, ideas and find friends here on pawpwals.',
    image: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
    imageText: 'Image Text',
  },
];

// const posts = [post1, post2, post3];

const sidebar = {
  title: 'Benefits',
  description:
    'Private, Zero ads, User friendly interface, and Fun to use. Pawpals is an excellent home for you and your pet',
  // archives: [
  //   { title: 'March 2020', url: '#' },
  //   { title: 'February 2020', url: '#' },
  //   { title: 'January 2020', url: '#' },
  //   { title: 'November 1999', url: '#' },
  //   { title: 'October 1999', url: '#' },
  //   { title: 'September 1999', url: '#' },
  //   { title: 'August 1999', url: '#' },
  //   { title: 'July 1999', url: '#' },
  //   { title: 'June 1999', url: '#' },
  //   { title: 'May 1999', url: '#' },
  //   { title: 'April 1999', url: '#' },
  // ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" spacing={1}>
        {/* <Header/> */}
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
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}