import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "../../App.css"; // Make sure to import your CSS file
import Logo from "../../assets/images/logomain.png";

function Header() {
  const logoStyle = {
    width: "150px",
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={Logo} alt="Logo" style={logoStyle} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact us
            </Nav.Link>
          </Nav>
          <Form className="d-flex navbar-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 custom-search-input"
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-2">
              Search
            </Button>
          </Form>
          <div className="d-flex">
            <Link to="/signup">
              <Button variant="outline-primary" className="me-2">
                Sign Up
              </Button>
            </Link>
            <Link to="/signin">
              <Button variant="outline-secondary">Sign In</Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
