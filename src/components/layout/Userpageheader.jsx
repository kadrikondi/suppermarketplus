import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Col,
  Image,
  Dropdown,
} from "react-bootstrap";
import "../../App.css";
import Logo from "../../assets/images/logomain.png";
import profileimg from "../../assets/images/Best-Online-Marketplaces.jpg";

function Header() {
  const logoStyle = {
    width: "150px",
  };

  const headerImageStyle = {
    width: "50px",
    height: "50px",
  };

  const navbarStyle = {
    backgroundColor: "#f0f0f0",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    color: "black",
  };

  const linkStyle = {
    color: "black", // Set the link color to white
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", // Add text shadow
  };

  return (
    <Navbar expand="lg" style={navbarStyle}>
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
            <Nav.Link as={Link} to="/Home" style={linkStyle}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={linkStyle}>
              About
            </Nav.Link>
            <NavDropdown
              as={Link}
              to="/Storedetail"
              title={
                <span style={linkStyle}>
                  <Link to="#">Storedetail</Link>
                </span>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">
                <Link to="/Createstore">Createstore</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link as={Link} to="/contact" style={linkStyle}>
              Contact us
            </Nav.Link>
          </Nav>
          <Form className="d-flex navbar-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 custom-search-input" // Use the custom CSS class
              aria-label="Search"
            />
            <Button variant="outline-light" className="me-2">
              Search
            </Button>
          </Form>
          <div className="d-flex">
            {/* <Link to="/signup">
              <Button variant="outline-primary" className="me-2">Sign Up</Button>
            </Link> */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <Col xs={6} md={4}>
                  <Image
                    src={profileimg}
                    roundedCircle
                    style={headerImageStyle}
                  />
                </Col>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/profile/${localStorage.getItem("userId")}`}
                >
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/settings">
                  Settings
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/security">
                  Security
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/signin"
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
