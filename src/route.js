import { Switch, Route } from "react-router-dom";
// import LandingPage from "./components/Page/LandingPage";
import React from "react";
import Signin from "./components/Page/Signin";
import Signup from "./components/Page/Signup";
import Contact from "./components/Page/Contact";
import About from "./components/Page/About";
// import UserProfile from "./components/Page/Userprofile";
import Storedetail from "./components/Page/Storedetail";
import Createstore from "./components/Page/Createstore";
import Home from "./components/Page/Home";
import Homepageheader from "./components/layout/Homepageheader";
import UserProfil from "./UserProfil";
import Profile from "./components/Page/Profile"
import Settings from "./components/Page/Settings"
import Security from "./components/Page/Security";
import LandingPage from './components/layout/Landingpage'
// import FAQ from "./components/Page/FAQ";


export default function Approute() {
  return (
    <>
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>

        {/* <Route exact path="/">
          <LandingPage />
        </Route> */}
         
         <Route exact path="/Security">
          <Security />
        </Route>

        {/* <Route exact path="/FAQ">
          <FAQ />
        </Route> */}

        
         

         <Route exact path="/Profile">
          <Profile />
        </Route>

        <Route exact path="/Settings">
          <Settings />
        </Route>

        


        <Route exact path="/UserProfil">
          <UserProfil />
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

        <Route exact path="/storedetail">
          <Storedetail />
        </Route>

        <Route exact path="/signin">
          <Signin />
        </Route>

        <Route exact path="/createstore">
          <Createstore />
        </Route>

        <Route exact path="/Homepageheader">
          <Homepageheader />
        </Route>
        
        <Route exact path="/LandingPage">
          <LandingPage />
        </Route>

      </Switch>
    </>
  );
}
