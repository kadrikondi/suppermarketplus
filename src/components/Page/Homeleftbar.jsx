import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../components/Storedetail/Homeslider3.jpg';
import CarouselImage from '../../components/Storedetail/Homeslider7.jpg';
import Productimage from '../../components/Storedetail/Homeslide6.jpg';
import Accordion from 'react-bootstrap/Accordion';

function Homeleftbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

      <ListGroup as="ul" className="w-100 mb-2">
        <ListGroup.Item as="li" active>
          Get Familiar
        </ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>

      <Button variant="primary" onClick={handleShow} className="w-100 mb-2">
        Get More Familiar
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Get More Familiar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      <h3
        style={{
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        Advert
      </h3>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={ExampleCarouselImage} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={CarouselImage} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Productimage} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <br />

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={ExampleCarouselImage} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={CarouselImage} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Productimage} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <br />

      <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Cras justo odio
      </ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li" disabled>
        Morbi leo risus
      </ListGroup.Item>
      <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>

    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Cras justo odio
      </ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item as="li" disabled>
        Morbi leo risus
      </ListGroup.Item>
      <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>


    </>
  );
}

export default Homeleftbar;

// Afeez
