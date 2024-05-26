import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../App.css'; // Make sure to import your CSS file
// import Supermarketicon from '../../components/Storedetail/suppermarketpluslogosmall.png'
import Logo from '../../assets/images/logomain.png'
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import {Link } from "react-router-dom"


function Header() {
  const logoStyle={
    width:'150px'
    
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand  ><Link to='/'><img src={Logo} alt=""  style={logoStyle}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link ><Link to='/about'>About</Link></Nav.Link>
           
            <Nav.Link  >
              <Link  to='/contact'>
              Contact us</Link>
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
          <Link to="/signup"> <Button variant="outline-primary" className="me-2">Sign Up</Button></Link>
          <Link to='/signin'><Button variant="outline-secondary"> Sign In</Button></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

// Afeez