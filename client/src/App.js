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
import LandingPage from "./pages/LandingPage/LandingPage";
import Following from "./pages/Following/Following";
import MyPhotos from "./pages/MyPhotos/MyPhotos";
import Posts from "./pages/Posts/Posts"

function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return children;
  }
  return <Redirect to="/landingpage" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
       
        <div>
          <Navbar />
          <Switch>
          {/* added this new landing page route */}
          <Route exact path="/landingpage">
              <LandingPage />
            </Route>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <ProtectedRoute exact path="/profile">
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute exact path="/following">
              <Following />
            </ProtectedRoute>
            <ProtectedRoute exact path="/myphotos">
              <MyPhotos />
            </ProtectedRoute>
            <ProtectedRoute exact path="/posts">
              <Posts />
            </ProtectedRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
