import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Homecarousel from "../../components/Page/Homecarousel";
import Homesidebar from "../../components/Page/Homesidebar";
import Homestorelist from "./Homestorelist";
import Homeplaceholderanimation from "./Homeplaceholderanimation";
import Homeleftbar from "./Homeleftbar";
import Homesidebarrequestform from "./Homesidebarrequestform";
import Homemiddleanimation from "./Homemiddleanimation";
import Homeleftbarcustomerrepresentativebox from "./Homeleftbarcustomerrepresentativebox";
import Homesidebarcarousel from "./Homesidebarcarousel";

export default function Home() {
  return (
    <Row>
      <Homecarousel />
      <Homeplaceholderanimation />

      <Col>
        <Homesidebar />
        <Homesidebar />
        <Homesidebar /> <Homesidebarcarousel /> <br /> <Homesidebarcarousel />{" "}
        <Homesidebarrequestform />{" "}
      </Col>

      <Col xs={6}>
        {" "}
        <Homemiddleanimation /> <Homemiddleanimation /> <Homestorelist />{" "}
        <Homeplaceholderanimation />
      </Col>

      <Col>
        {" "}
        <Homeleftbar /> <Homeleftbarcustomerrepresentativebox />{" "}
      </Col>
    </Row>
  );
}
