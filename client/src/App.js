import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/index";
import LoginFormPage from "./components/LoginForm/index";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './Home.js'
import RoomDetail from "./components/RoomDetail";
import ProfilePage from "./components/ProfilePage";
import CreateRoom from "./components/CreateRoom";
import SearchPage from "./components/SearchPage";
import NotFound from "./components/NotFound";
import Map from "./components/Map";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="app">
    <Navigation isLoaded={isLoaded} />
    <Switch>
      <Route
       exact path="/"  
      >
        <Home />
      </Route>
      <Route exact path="/rooms/:roomId" >
        <RoomDetail />
      </Route>
      <Route exact path="/rooms/" >
        <CreateRoom />
      </Route>
      <Route exact path="/search" >
        <SearchPage />
      </Route  >
      <Route exact path="/map">
        <Map />
      </Route>
      <Route exact path="/users/:userId">
        <ProfilePage />
      </Route>

      
      {isLoaded && (
        <Switch>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/login">
        <LoginFormPage />
      </Route>  
      <Route path="*"> 
        <NotFound />
      </Route>
      </Switch>
      )}

      <Route path="*"> 
        <NotFound />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
