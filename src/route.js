import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import React from "react";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";

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
        <Route exact path="/urserprofile/:id">
          <Signup />
        </Route>
      </Switch>
    </>
  );
}
