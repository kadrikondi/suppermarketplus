import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import React from "react";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Storedetail from "./components/pages/Storedetail";
import Createstore from "./components/pages/Createstore";
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

        <Route exact path="/Storedetail/id:">
          <Storedetail />
        </Route>

        <Route exact path="/Createstore">
          <Createstore />
          </Route>

         <Route exact path="/urserprofile/:id">
          <Userprofile />
        </Route>
      </Switch>
    </>
  );
<<<<<<< HEAD
}

import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import React from "react";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";

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
      </Switch>
    </>
  );
}
=======
}
>>>>>>> 3c6e086e57b2a1f219abc2b0e57645a7bd4e5560
