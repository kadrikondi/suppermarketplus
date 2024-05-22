import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import React from "react";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Userprofile from "./components/pages/Userprofile";
import Storedetail from "./components/pages/Storedetail"
// import Createstore from "./components/pages/Createstore"

export default function route() {
  return (
    <>
      <Switch>
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
        <Route exact path="/Contact">
          <Contact />
        </Route>

        <Route exact path="/Storedetail">
          <Storedetail />
        </Route>

        {/* <Route exact path="/Storedetail">
        <Storedetail />
        </Route> */}
      </Switch>
    </>
  );
}
