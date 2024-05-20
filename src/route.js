import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import React from "react";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import Userprofile from "./components/pages/Userprofile";

export default function Approute() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        
        <Route exact path="/signin">
          <Signin />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/Home">
          <Home />
        </Route>

        <Route exact path="/urserprofile/:id">
          <Userprofile />
        </Route>
      </Switch>
    </>
  );
}
