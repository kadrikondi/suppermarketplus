import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/Page/LandingPage";
import React from "react";
import Signin from "./components/Page/Signin";
import Signup from "./components/Page/Signup";
import Contact from "./components/Page/Contact";
import About from "./components/Page/About";
import Userprofile from "./components/Page/Userprofile";
import Storedetail from "./components/Page/Storedetail";
import Createstore from "./components/Page/Createstore";
import Home from "./components/Page/Home";

export default function Approute() {
  return (
    <>
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>

        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/userprofile/:id">
          <Userprofile />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/storedetail">
          <Storedetail />
        </Route>

        <Route exact path="/signin">
          <Signin />
        </Route>

        <Route exact path="/createstore">
          <Createstore />
        </Route>
      </Switch>
    </>
  );
}
