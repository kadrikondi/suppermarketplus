import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card, Form, Navbar, Nav } from 'react-bootstrap';
import '../../App.css'; // Import your CSS file
import Logo from '../../assets/images/logomain.png';

function CreateStore() {
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

      {/* Create Store Form */}
      <Container className="mt-5">
        <Card>
          <Card.Header>Create Your Store</Card.Header>
          <Card.Body>
            <Form>
              {/* Store Details */}
              <h5>Store Details</h5>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="storeName">
                    <Form.Label>Store Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter store name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="storeCategory">
                    <Form.Label>Store Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter store category" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="storeDescription" className="mt-3">
                <Form.Label>Store Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter store description" />
              </Form.Group>

              {/* Location Details */}
              <h5 className="mt-4">Location Details</h5>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Enter state" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="zipCode">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter zip code" />
                  </Form.Group>
                </Col>
              </Row>

              {/* Contact Details */}
              <h5 className="mt-4">Contact Details</h5>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Col>
              </Row>

              {/* Business Hours */}
              <h5 className="mt-4">Business Hours</h5>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="openHours">
                    <Form.Label>Open Hours</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="closeHours">
                    <Form.Label>Close Hours</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>
                </Col>
              </Row>

              {/* Store Image Upload */}
              <h5 className="mt-4">Store Image</h5>
              <Form.Group controlId="storeImage" className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Create Store
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CreateStore;
