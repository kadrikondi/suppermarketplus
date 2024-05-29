// import { Switch, Route } from "react-router-dom";
// // import LandingPage from "./components/Page/LandingPage";
// import React from "react";
// // import Signin from "./components/Page/Signin";
// // import Signup from "./components/Page/Signup";
// // import Contact from "./components/Page/Contact";
// // import About from "./components/Page/About";
// // import Userprofile from "./components/Page/Userprofile";
// // import Storedetail from "./components/Page/Storedetail";
// // import Createstore from "./components/Page/Createstore";
// // import Home from "./components/Page/Home";
// // import Homepageheader from "./components/layout/Homepageheader";

// export default function Landingroute() {
//   return (
//     <>
//       aaasaa
//     </>
//   );
// }



import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card, Form, Navbar, Nav, Image } from 'react-bootstrap';
// import '../../App.css'; // Import your CSS file
import ProfilePic from './assets/images/Best-Online-Marketplaces.jpg';
import ProfilePicc from './assets/images/suppermarketpluslogosmall.png'

function UserProfile() {
  const profileImageStyle = {
    width: '150px',
    height: '150px',
  };

  const profilePicStyle = {
    width: '170px',
    height: '100px',

  }

  return (
    <div>
      {/* Header */}
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand as={Link} to="/"> <Image src={ProfilePicc} roundedCircle style={profilePicStyle} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Profile Header */}
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center">
            <Image src={ProfilePic} roundedCircle style={profileImageStyle} />
          </Col>
          <Col xs={12} md={8}>
            <h2>John Doe</h2>
            <Button variant="primary" as={Link} to="/edit-profile">Edit Profile</Button>
          </Col>
        </Row>
      </Container>

      {/* Profile Information */}
      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>Personal Information</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" readOnly />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="mt-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="john.doe@example.com" readOnly />
                  </Form.Group>
                  <Form.Group controlId="formPhone" className="mt-2">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="123-456-7890" readOnly />
                  </Form.Group>
                  <Form.Group controlId="formAddress" className="mt-2">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="123 Main St, Springfield, IL" readOnly />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>Account Information</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="johndoe" readOnly />
                  </Form.Group>
                  <Form.Group controlId="formPassword" className="mt-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="******" readOnly />
                    <Button variant="link" as={Link} to="/change-password" className="mt-2">Change Password</Button>
                  </Form.Group>
                  <Form.Group controlId="formSecurity" className="mt-2">
                    <Form.Label>Security Settings</Form.Label>
                    <Button variant="link" as={Link} to="/security-settings">Manage</Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Activity */}
      <Container className="mt-4">
        <Row>
          <Col>
            <Card>
              <Card.Header>Recent Activity</Card.Header>
              <Card.Body>
                <p>No recent activity</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      {/* <footer className="bg-light text-center text-lg-start mt-4">
        <Container className="p-4">
          <Row>
            <Col>
              <h5>Footer Content</h5>
              <p>Some content in the footer</p>
            </Col>
          </Row>
        </Container>
      </footer> */}
    </div>
  );
}

export default UserProfile;
