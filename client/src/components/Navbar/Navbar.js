import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const createLink = ({ text, to, ...rest }) => {
  const className = "nav-link";
  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {text}
      </Link>
    );
  }
  return (
    <span
      role="button"
      className={className}
      style={{ cursor: "pointer" }}
      {...rest}
    >
      {text}
    </span>
  );
};

// function NavLinks() {
//   const { isLoggedIn, logout } = useAuth();
//   const links = [];
//   if (isLoggedIn) {
//     links.push({ text: "Profile", to: "/newprofile" });
//     links.push({ text: "Logout", onClick: () => logout() });
//     links.push({ text: "Following", to: "/following" });
//     links.push({ text: "MyPhotos", to: "/myphotos" });
//     links.push({ text: "Forum", to: "/newprofile" });
    
//   } else {
//     links.push({ text: "Signup", to: "/signup" });
//     links.push({ text: "Login", to: "/login" });
//   }
//   return (
//     <ul className="navbar-nav">
//       {links.map((link, i) => (
//         <li key={i} className="nav-item">
//           {createLink(link)}
//         </li>
//       ))}
//     </ul>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  const { isLoggedIn, logout } = useAuth();
  const links = [];
  if (isLoggedIn) {
    links.push({ text: "Profile", to: "/newprofile" });
    links.push({ text: "Logout", onClick: () => logout() });
    links.push({ text: "Following", to: "/following" });
    links.push({ text: "MyPhotos", to: "/myphotos" });
    links.push({ text: "Forum", to: "/posts" });
    
  } else {
    links.push({ text: "Signup", to: "/signup" });
    links.push({ text: "Login", to: "/login" });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        {links.map((link, i) => (
        <div key={i} className="nav-item">
          {createLink(link)}
        </div>
      ))}
          
        </Toolbar>
      </AppBar>
    </div>

    // <nav className="navbar navbar-expand navbar-dark">
    //   <div className="container navbar-container">
    //     <Link className="navbar-nav nav-item text-white" to="/profile">
    //       Paw Pals (old profile)
    //       <i className="fas fa-dog fa-2x" />
    //     </Link>
    //     <Link className="text-white" to="/newprofile">
    //       NewProfile       
    //     </Link>
    //     <Link className="text-white" to="/following">
    //       Following       
    //     </Link>
    //     <Link className="text-white" to="/myphotos">
    //       Photos      
    //     </Link>
    //     <Link className="text-white" to="/posts">
    //       Posts       
    //     </Link>
        
    //     <NavLinks />
    //   </div>
    // </nav>
  );
}

export default Navbar;
