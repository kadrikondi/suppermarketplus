import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../components/Storedetail/Homeslider3.jpg';
import CarouselImage from '../../components/Storedetail/Homeslider7.jpg';
import Productimage from '../../components/Storedetail/Homeslide6.jpg';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';


function Homeleftbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="w-100 mb-2">
        Customer Representative
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Talk to a representative</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Customer Representative</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Typing....</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Send</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </div>
        </Offcanvas.Body>
      </Offcanvas>

    


    </>
  );
}

export default Homeleftbar;
// Afeez