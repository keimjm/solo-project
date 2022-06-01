import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './Home.js'
import RoomDetail from "./components/RoomDetail";

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
      path="/"
        exact
      >
        <Home />
      </Route>
      <Route path="/rooms/:roomId" exact>
        <RoomDetail />
      </Route>
    </Switch>
     
      
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
