// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Homecarousel from "../../components/Page/Homecarousel";
// import Homesidebar from "../../components/Page/Homesidebar";
// import Homestorelist from "./Homestorelist";
// import Homeplaceholderanimation from "./Homeplaceholderanimation";
// import Homeleftbar from "./Homeleftbar";
// import Homesidebarrequestform from "./Homesidebarrequestform";
// import Homemiddleanimation from "./Homemiddleanimation";
// import Homeleftbarcustomerrepresentativebox from "./Homeleftbarcustomerrepresentativebox";
// import Homesidebarcarousel from "./Homesidebarcarousel";

// export default function Home() {
//   return (
//     <Row>
//       <Homecarousel />
//       <Homeplaceholderanimation />

//       <Col>
//         <Homesidebar />
//         <Homesidebar />
//         <Homesidebar /> <Homesidebarcarousel /> <br /> <Homesidebarcarousel />{" "}
//         <Homesidebarrequestform />{" "}
//       </Col>

//       <Col xs={6}>
//         {" "}
//         <Homemiddleanimation /> <Homemiddleanimation /> <Homestorelist />{" "}
//         <Homeplaceholderanimation />
//       </Col>

//       <Col>
//         {" "}
//         <Homeleftbar /> <Homeleftbarcustomerrepresentativebox />{" "}
//       </Col>
//     </Row>
//   );
// }

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Homecarousel from "../../components/Page/Homecarousel";
import Homesidebar from "../../components/Page/Homesidebar";
import Homestorelist from "./Homestorelist";
import Homeplaceholderanimation from "./Homeplaceholderanimation";
import Homeleftbar from "./Homeleftbar";
import Homesidebarrequestform from "./Homesidebarrequestform";
import Homemiddleanimation from "./Homemiddleanimation";
import { useHistory } from "react-router-dom";
import Homeleftbarcustomerrepresentativebox from "./Homeleftbarcustomerrepresentativebox";
import Homesidebarcarousel from "./Homesidebarcarousel";
// the fetchSupermarket import here is from the api folder api file exporting all supermarkets to show in the list of stores we have
import { fetchAllSupermarket } from "../api/api"; // Adjust the import path as needed

// i passed the const supermarkets  here, to get all the supermarket from my backend, which i am fechting to show in my export </Homestorelist> below
export default function Home() {
  const [supermarkets, setSupermarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This is used to get information from saved history from our localstorage which is our backend data, when login, knowing we have the user as a customer in the app
  const history = useHistory();

  // In React, useEffect is a Hook that allows you to perform side effects in functional components. Side effects are operations that occur outside the main flow of data and rendering, such as fetching data, directly manipulating the DOM, setting up subscriptions, or manually changing the state in ways that need to be controlled.
  // this was passed here to get registered user id from our location storage that has already registered to decide if he his eligible to login to the app
  useEffect(() => {
    let userid = localStorage.getItem("userId");
    if (!userid) {
      history.push("/signin");
      return;
    }
    const getSupermarkets = async () => {
      try {
        // This fetchSupermarket is from created api from our backend fetching all supermarkets we have in our app,which the fetchSupermarket named here was from an export from our api folder which has an api file where we have the export, which is where we added our created api from the backend

        //         Fetch Data: fetchSupermarket() fetches data from a source and waits for the result using await.
        // Update State: setSupermarkets(data) updates the supermarkets state with the fetched data.
        // Stop Loading: setLoading(false) updates the loading state to false, indicating that the data fetching is complete.
        const data = await fetchAllSupermarket();
        setSupermarkets(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getSupermarkets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Row>
      <Homecarousel />
      <Homeplaceholderanimation />

      <Col>
        <Homesidebar />
        {/* <Homesidebar /> */}
        <Homesidebarcarousel />
        <br />
        <Homesidebarcarousel />
        <Homesidebarrequestform />
      </Col>
      {/* This was passed like a props */}
      <Col xs={6}>
        <Homemiddleanimation />
        <Homemiddleanimation />
        <Homestorelist supermarkets={supermarkets} /> {/* Pass the data here */}
        {/* <Homeplaceholderanimation /> */}
      </Col>

      <Col>
        <Homeleftbar />
        <Homeleftbarcustomerrepresentativebox />
      </Col>
    </Row>
  );
}
