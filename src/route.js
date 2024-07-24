import { Switch, Route } from "react-router-dom";
import React from "react";
import Signin from "./components/Page/Signin";
import Signup from "./components/Page/Signup";
import Contact from "./components/Page/Contact";
import About from "./components/Page/About";
// import UserProfile from "./components/Page/Userprofile";
import Storedetail from "./components/Page/Storedetail";
import Createstore from "./components/Page/Createstore";
import Home from "./components/Page/Home";
import Homepageheader from "./components/layout/Userpageheader";

import Profile from "./components/Page/Profile";
import Settings from "./components/Page/Settings";
import Security from "./components/Page/Security";
import LandingPage from "./components/layout/Landingpage";
// import FAQ from "./components/Page/FAQ";

import Terms from "./components/Page/Terms";
import Privacypolicy from "./components/Page/Privacypolicy";
import Faq from "./components/Page/Faq";
import UploadSupermarketImages from "./components/Page/uploadSupermarket";

export default function Approute() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/security">
          <Security />
        </Route>

        {/* <Route exact path="/FAQ">
          <FAQ />
        </Route> */}

        <Route exact path="/profile/:userId">
          <Profile />
        </Route>

        <Route exact path="/settings">
          <Settings />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        {/* <Route exact path="/UserProfile/:id">
          <UserProfile />
        </Route> */}

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/storedetail/:id">
          <Storedetail />
        </Route>
        <Route exact path="/upload-supermarket-images/:storeId/">
          <UploadSupermarketImages />
        </Route>

        <Route exact path="/signin">
          <Signin />
        </Route>

        <Route exact path="/createstore">
          <Createstore />
        </Route>

        <Route exact path="/homepageheader">
          <Homepageheader />
        </Route>

        <Route exact path="/terms">
          <Terms />
        </Route>

        <Route exact path="/privacypolicy">
          <Privacypolicy />
        </Route>

        <Route exact path="/faq">
          <Faq />
        </Route>
      </Switch>
    </>
  );
}
