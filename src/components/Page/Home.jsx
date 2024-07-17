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
import { fetchSupermarket } from "../api/api"; // Adjust the import path as needed

export default function Home() {
  const [supermarkets, setSupermarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const history = useHistory();

  useEffect(() => {
    let userid = localStorage.getItem("userid");
    if (!userid) {
      history.push("/signin");
      return;
    }
    const getSupermarkets = async () => {
      try {
        const data = await fetchSupermarket();
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
        <Homesidebar />
        <Homesidebar />
        <Homesidebarcarousel />
        <br />
        <Homesidebarcarousel />
        <Homesidebarrequestform />
      </Col>

      <Col xs={6}>
        <Homemiddleanimation />
        <Homemiddleanimation />
        <Homestorelist supermarkets={supermarkets} /> {/* Pass the data here */}
        <Homeplaceholderanimation />
      </Col>

      <Col>
        <Homeleftbar />
        <Homeleftbarcustomerrepresentativebox />
      </Col>
    </Row>
  );
}
