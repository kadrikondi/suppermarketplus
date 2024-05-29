import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  Navbar,
  Nav,
} from "react-bootstrap";
import "../../App.css"; // Import your CSS file
import Logo from "../../assets/images/suppermarketpluslogosmall.png";

function Settings() {
  const logoStyle = {
    width: "150px",
  };

  return (
    <div>
      {/* Settings Sections */}
      <Container className="mt-5">
        <Card>
          <Card.Header>Settings</Card.Header>
          <Card.Body>
            <Form>
              {/* Profile Settings */}
              <h5>Profile Settings</h5>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="profileName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="profileEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="profilePhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Account Settings */}
              <h5 className="mt-4">Account Settings</h5>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="accountUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your username"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="accountPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                    />
                    <Button
                      variant="link"
                      as={Link}
                      to="/change-password"
                      className="mt-2"
                    >
                      Change Password
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="securityQuestion1">
                    <Form.Label>Security Question 1</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your security question"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="securityQuestion2">
                    <Form.Label>Security Question 2</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your security question"
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Privacy Settings */}
              <h5 className="mt-4">Privacy Settings</h5>
              <Form.Group controlId="privacyProfileVisibility" className="mt-3">
                <Form.Label>Profile Visibility</Form.Label>
                <Form.Control as="select">
                  <option>Public</option>
                  <option>Private</option>
                  <option>Friends Only</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="privacyDataSharing" className="mt-3">
                <Form.Check
                  type="checkbox"
                  label="Allow data sharing with third parties"
                />
              </Form.Group>

              {/* Notification Settings */}
              <h5 className="mt-4">Notification Settings</h5>
              <Form.Group controlId="notificationsEmail" className="mt-3">
                <Form.Check
                  type="checkbox"
                  label="Receive email notifications"
                />
              </Form.Group>
              <Form.Group controlId="notificationsSMS" className="mt-3">
                <Form.Check type="checkbox" label="Receive SMS notifications" />
              </Form.Group>
              <Form.Group controlId="notificationsPush" className="mt-3">
                <Form.Check
                  type="checkbox"
                  label="Receive push notifications"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4">
                Save Changes
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Settings;
// afeez
