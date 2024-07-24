import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Card,
  Carousel,
} from "react-bootstrap";
import "../../App.css"; // Import your CSS file
import Logo from "../../assets/images/suppermarketpluslogosmall.png";
import Slide1 from "../../assets/images/Homeslider3.jpg"; // Replace with your carousel images
import Slide2 from "../../assets/images/Homeslider7.jpg"; // Replace with your carousel images
import Slide3 from "../../components/Storedetail/Homeslide6.jpg"; // Replace with your carousel images

function LandingPage() {
  const logoStyle = {
    width: "150px",
  };

  const heroStyle = {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "linear-gradient(to right, #6a11cb, #2575fc)", // Nicer background
    color: "white",
  };

  const sectionStyle = {
    background: "#f8f9fa",
    padding: "50px 0",
  };

  const cardStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
  };

  const carouselItemStyle = {
    height: "80vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const footerStyle = {
    background: "#343a40",
    color: "white",
    padding: "20px 0",
  };

  const socialIconStyle = {
    color: "white",
    margin: "0 10px",
    transition: "color 0.3s",
  };

  return (
    <div>
      {/* Hero Section with Carousel */}
      <div style={heroStyle}>
        <Container fluid>
          <Carousel>
            <Carousel.Item style={carouselItemStyle}>
              <img className="d-block w-100" src={Slide1} alt="First slide" />
              <Carousel.Caption>
                <marquee direction="right" style={{ color: "white" }}>
                  <h3 style={{ color: "white" }}>Supermarketplus</h3>
                </marquee>
                <marquee direction="left" style={{ color: "white" }}>
                  <p style={{ color: "white" }}>Find everything you need.</p>
                </marquee>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselItemStyle}>
              <img className="d-block w-100" src={Slide2} alt="Second slide" />
              <Carousel.Caption>
                <h3 style={{ color: "white" }}>Supermarketplus</h3>
                <p style={{ color: "white" }}>Find everything you need.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselItemStyle}>
              <img className="d-block w-100" src={Slide3} alt="Third slide" />
              <Carousel.Caption>
                <h3 style={{ color: "white" }}>Supermarketplus</h3>
                <p style={{ color: "white" }}>Find everything you need.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      {/* Features Section */}
      <div style={sectionStyle}>
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <Card style={cardStyle} className="card-hover">
                <Card.Body>
                  <Card.Title>Feature One</Card.Title>
                  <Card.Text>Brief description of the first feature.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={cardStyle} className="card-hover">
                <Card.Body>
                  <Card.Title>Feature Two</Card.Title>
                  <Card.Text>
                    Brief description of the second feature.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={cardStyle} className="card-hover">
                <Card.Body>
                  <Card.Title>Feature Three</Card.Title>
                  <Card.Text>Brief description of the third feature.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonials Section */}
      <div style={sectionStyle}>
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">What Our Customers Say</h2>
              <Row className="text-center">
                <Col md={4}>
                  <Card style={cardStyle} className="card-hover">
                    <Card.Body>
                      <Card.Text>
                        "This service is amazing! Highly recommend."
                      </Card.Text>
                      <Card.Footer>- John Doe</Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={cardStyle} className="card-hover">
                    <Card.Body>
                      <Card.Text>
                        "I couldn't be happier with the results."
                      </Card.Text>
                      <Card.Footer>- Jane Smith</Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={cardStyle} className="card-hover">
                    <Card.Body>
                      <Card.Text>
                        "Exceptional quality and great support."
                      </Card.Text>
                      <Card.Footer>- Bob Johnson</Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Call-to-Action Section */}
      <div style={sectionStyle}>
        <Container className="text-center">
          <Row>
            <Col>
              <h2>Ready to Get Started?</h2>
              {localStorage.getItem("userId") ? (
                <Button variant="primary" size="lg" as={Link} to="/home">
                  Exploare
                </Button>
              ) : (
                <>
                  {" "}
                  <p>Sign up for an account now!</p>
                  <Button variant="primary" size="lg" as={Link} to="/signup">
                    Join Now
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
      {/* <footer style={footerStyle} className="text-center text-lg-start mt-4">
        <Container className="p-4">
          <Row>
            <Col>
              <h5>Footer Content</h5>
              <p>Some content in the footer</p>
              <Nav className="justify-content-center">
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/privacy">Privacy Policy</Nav.Link>
              </Nav>
              <div className="mt-2">
                <Link to="#"><i className="fab fa-facebook-f" style={socialIconStyle}></i></Link>
                <Link to="#" className="mx-3"><i className="fab fa-twitter" style={socialIconStyle}></i></Link>
                <Link to="#"><i className="fab fa-linkedin-in" style={socialIconStyle}></i></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer> */}
    </div>
  );
}

export default LandingPage;
// afeez
