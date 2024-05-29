import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card, Form, Navbar, Nav, Image } from 'react-bootstrap';
import '../../App.css'; // Import your CSS file
import Logo from '../../assets/images/logomain.png';
import ProfilePic from '../../assets/images/Best-Online-Marketplaces.jpg'; // Example profile picture

function Profile() {
  const logoStyle = {
    width: '150px',
  };

  const profilePicStyle = {
    width: '150px',
    height: '150px',
  };

  return (
    <div>
      {/* Header */}
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Logo" style={logoStyle} />
          </Navbar.Brand>
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

      {/* Profile Sections */}
      <Container className="mt-5">
        <Card>
          <Card.Header>Profile</Card.Header>
          <Card.Body>
            {/* Profile Header */}
            <div className="text-center mb-4">
              <Image src={ProfilePic} roundedCircle style={profilePicStyle} />
              <h2 className="mt-3">John Doe</h2>
              <p className="text-muted">Web Developer</p>
            </div>

            {/* Personal Information */}
            <h5>Personal Information</h5>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="profileName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" disabled />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="profileEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="john.doe@example.com" disabled />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="profilePhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="(123) 456-7890" disabled />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="profileAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="123 Main St, City, Country" disabled />
                  </Form.Group>
                </Col>
              </Row>
            </Form>

            {/* Account Information */}
            <h5 className="mt-4">Account Information</h5>
            <Row>
              <Col md={6}>
                <Form.Group controlId="accountUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="johndoe" disabled />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="accountDateJoined">
                  <Form.Label>Date Joined</Form.Label>
                  <Form.Control type="text" placeholder="January 1, 2020" disabled />
                </Form.Group>
              </Col>
            </Row>

            {/* Activity Feed */}
            <h5 className="mt-4">Activity Feed</h5>
            <Card className="mt-3">
              <Card.Body>
                <Card.Text>Posted a new blog article: "Understanding React Hooks"</Card.Text>
                <Card.Text>Joined the group "React Developers"</Card.Text>
                <Card.Text>Updated profile picture</Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </Container>

    </div>
  );
}

export default Profile;
// afeez