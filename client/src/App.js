import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

// Our Components
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, useAuth } from "./utils/auth";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Following from "./pages/Following/Following";
import MyPhotos from "./pages/MyPhotos/MyPhotos";
import Posts from "./pages/Posts/Posts";

// JSX requires uppercase Components, so we alias the component property to Component using ":"
function ProtectedRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useAuth();

  //THIS IS THE BOILER PLATE
  // if (isLoggedIn) {
  //   return children;
  // }
  // return <Redirect to="/landingpage" />;
  // return isLoggedIn ? children : <Redirect to="/landingpage" />;

  //THIS CODE SETS THE ROUTES UP TO KEEP THE BROWSER (PROPS HISTORY)
  // BOILER PLATE DID NOT DO THIS
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/landingpage" />
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
            <Route exact path="/landingpage" component={LandingPage} />
            {/* <Route exact path="/landingpage" render={props => <LandingPage {...props}/>} /> */}

            <ProtectedRoute exact path="/" component={Home} />

            <Route exact path="/login" component={Login} />

            <Route exact path="/signup" component={Signup} />
                      
            <ProtectedRoute exact path="/profile" component={Profile} />
                        
            <ProtectedRoute exact path="/following" component={Following} />
              
            <ProtectedRoute exact path="/myphotos" component={MyPhotos} />
            
            <ProtectedRoute exact path="/posts" component={Posts} />
          
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
