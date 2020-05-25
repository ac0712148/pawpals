import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

// Our Components
import { AuthProvider, useAuth } from "./utils/auth";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage/blog";
import Following from "./pages/Following/Following";
import MyPhotos from "./pages/MyPhotos/MyPhotos";
import Posts from "./pages/Posts/Posts";
import NewProfile from "./pages/NewProfilePage/NewProfilePage";

// JSX requires uppercase Components, so we alias the component property to Component using ":"
function ProtectedRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useAuth();


  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            {/* <Route exact path="/landingpage" render={props => <LandingPage {...props}/>} /> */}
              
              {/* For now {Home} is a redundant route. Did not delete as we may use it at a later stage
            <ProtectedRoute exact path="/" component={Home} /> */}
           
            <ProtectedRoute exact path="/" component={Home} />

            <Route exact path="/login" component={Login} />

            <Route exact path="/signup" component={Signup} />
                      
            <ProtectedRoute exact path="/profile" component={Profile} />
                        
            <ProtectedRoute exact path="/following" component={Following} />
              
            <ProtectedRoute exact path="/myphotos" component={MyPhotos} />
            
            <ProtectedRoute exact path="/posts" component={Posts} />

            <ProtectedRoute exact path="/newprofile" component={NewProfile} />
          
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
