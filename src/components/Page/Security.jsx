import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card, Form, Navbar, Nav } from 'react-bootstrap';
import '../../App.css'; // Import your CSS file
import Logo from '../../assets/images/suppermarketpluslogosmall.png';

function Security() {
  const logoStyle = {
    width: '150px',
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

      {/* Security Sections */}
      <Container className="mt-5">
        <Card>
          <Card.Header>Security Settings</Card.Header>
          <Card.Body>
            {/* Change Password */}
            <h5>Change Password</h5>
            <Form>
              <Row>
                <Col md={4}>
                  <Form.Group controlId="currentPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter current password" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="newPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter new password" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="confirmNewPassword">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm new password" />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" type="submit" className="mt-3">
                Change Password
              </Button>
            </Form>

            {/* Two-Factor Authentication */}
            <h5 className="mt-4">Two-Factor Authentication (2FA)</h5>
            <Form.Group controlId="enable2FA">
              <Form.Check type="checkbox" label="Enable 2FA" />
            </Form.Group>
            <Form.Group controlId="2FAMethod" className="mt-3">
              <Form.Label>2FA Method</Form.Label>
              <Form.Control as="select">
                <option>SMS</option>
                <option>Authenticator App</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Update 2FA Settings
            </Button>

            {/* Login Activity */}
            <h5 className="mt-4">Login Activity</h5>
            <Card className="mt-3">
              <Card.Body>
                <Card.Text>Device: MacBook Pro</Card.Text>
                <Card.Text>Location: New York, USA</Card.Text>
                <Card.Text>Time: 2 hours ago</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Text>Device: iPhone 12</Card.Text>
                <Card.Text>Location: San Francisco, USA</Card.Text>
                <Card.Text>Time: 1 day ago</Card.Text>
              </Card.Body>
            </Card>

            {/* Security Questions */}
            <h5 className="mt-4">Security Questions</h5>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="securityQuestion1">
                    <Form.Label>Security Question 1</Form.Label>
                    <Form.Control type="text" placeholder="Enter your security question" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="securityAnswer1">
                    <Form.Label>Answer</Form.Label>
                    <Form.Control type="text" placeholder="Enter your answer" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="securityQuestion2">
                    <Form.Label>Security Question 2</Form.Label>
                    <Form.Control type="text" placeholder="Enter your security question" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="securityAnswer2">
                    <Form.Label>Answer</Form.Label>
                    <Form.Control type="text" placeholder="Enter your answer" />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" type="submit" className="mt-3">
                Update Security Questions
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Security;
// afeez
