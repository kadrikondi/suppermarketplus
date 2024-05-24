import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../App.css'; // Make sure to import your CSS file
// import Supermarketicon from '../../components/Storedetail/suppermarketpluslogosmall.png'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" >Nav</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Storedetails" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Createstore</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action4">
                Createstore
              </NavDropdown.Item> */}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#" >
              Contact us
            </Nav.Link>
            <Nav.Link href="#" >
              Userprofile
            </Nav.Link>
          </Nav>
          <Form className="d-flex navbar-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 custom-search-input" // Use the custom CSS class
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-2">Search</Button>
          </Form>
          <div className="d-flex">
            <Button variant="outline-primary" className="me-2">Sign Up</Button>
            <Button variant="outline-secondary">Sign In</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

// Afeez