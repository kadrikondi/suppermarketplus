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
        <Accordion.Header>Key Features</Accordion.Header>
        <Accordion.Body>
         We allow users to set preferences and receive personalized supermarket recommendations. Our platform ensures that only the best supermarkets, as rated by our community, are referred to our users.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>More Key Features</Accordion.Header>
        <Accordion.Body>
        We make personalized supermarket recommendations based on your past purchases and browsing history, ensuring the supermarkets we suggest are a perfect fit for your needs. Our platform prioritizes customer satisfaction, and we carefully vet each supermarket to guarantee top quality and service.
        <br />
        <br />
        In addition to personalized recommendations, we offer continuous support to address any issues you may encounter with our referred supermarkets. Our dedicated customer service team is always available through our app to provide prompt assistance and resolve any concerns.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

      <ListGroup as="ul" className="w-100 mb-2">
        <ListGroup.Item as="li" active>
        Additional Benefits
        For Customers
        </ListGroup.Item>
        <ListGroup.Item as="li"> <b>Exclusive Discounts:</b> Special offers from supermarkets.</ListGroup.Item>
        <ListGroup.Item as="li">
        <b>Comprehensive Info:</b> Details on products and services.
        </ListGroup.Item>
        <ListGroup.Item as="li"> <b>Enhanced Safety:</b> Assurance of compliance with health standards.</ListGroup.Item>
      </ListGroup>

      <Button variant="primary" onClick={handleShow} className="w-100 mb-2">
        Get More Familiar
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Get More Familiar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <h2>Additional Benefits</h2>
<ul>
    <li><strong>Exclusive Discounts:</strong> Access to special offers and promotions from partner supermarkets.</li>
    <li><strong>Comprehensive Info:</strong> Detailed insights into product availability, store services, and amenities.</li>
    <li><strong>Enhanced Safety:</strong> Assurance that supermarkets meet health and safety standards.</li>
    <li><strong>Convenient Access:</strong> Effortless navigation to find nearby supermarkets.</li>
    <li><strong>Customer Reviews:</strong> Read and contribute feedback to help others make informed decisions.</li>
    <li><strong>Real-Time Updates:</strong> Get the latest information on deals, store events, and product availability.</li>
    <li><strong>Personalized Recommendations:</strong> Discover supermarkets and products tailored to your preferences.</li>
    <li><strong>Easy Comparison:</strong> Compare supermarket features and deals to find the best options.</li>
    <li><strong>Order and Pickup Options:</strong> Access services like curbside pickup or delivery where available.</li>
    <li><strong>Loyalty Programs:</strong> Benefit from rewards and loyalty points through partnered supermarkets.</li>
    <li><strong>Interactive Maps:</strong> Use maps to locate stores and explore nearby amenities.</li>
    <li><strong>Event Notifications:</strong> Stay informed about in-store events, sales, and special promotions.</li>
    <li><strong>Health & Wellness Tips:</strong> Receive advice and tips related to healthy eating and product choices.</li>
    <li><strong>Customer Support:</strong> Access dedicated support for any issues or questions related to supermarket services.</li>
    <li><strong>Sustainable Choices:</strong> Find supermarkets that offer eco-friendly products and practices.</li>
    <li><strong>Exclusive Access:</strong> Get early or exclusive access to new products and store openings.</li>
    <li><strong>Product Reviews:</strong> View detailed reviews and ratings of individual products.</li>
    <li><strong>Dietary Information:</strong> Access information on allergens, nutritional content, and dietary preferences.</li>
    <li><strong>Virtual Store Tours:</strong> Explore stores online to get a feel for their layout and offerings before visiting.</li>
    <li><strong>Price Alerts:</strong> Set notifications for price changes on specific items or categories.</li>
    <li><strong>Personalized Alerts:</strong> Receive updates tailored to your shopping habits and preferences.</li>
    <li><strong>Community Engagement:</strong> Participate in local store events, workshops, or charity initiatives.</li>
</ul>
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

      {/* <ListGroup as="ul">
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
    </ListGroup> */}

    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Most Popular Supermarkets
      </ListGroup.Item>
      <ListGroup.Item as="li">Walmart</ListGroup.Item>
      <ListGroup.Item as="li">Kroger</ListGroup.Item>
      <ListGroup.Item as="li">Costco</ListGroup.Item>
      <ListGroup.Item as="li">Publix</ListGroup.Item>
      <ListGroup.Item as="li">Safeway</ListGroup.Item>
      <ListGroup.Item as="li"> Albertsons</ListGroup.Item>
      <ListGroup.Item as="li" >
      Trader Joe's
      </ListGroup.Item>
      <ListGroup.Item as="li">Whole Foods Market
      </ListGroup.Item>
      <ListGroup.Item as="li">Amazon</ListGroup.Item>
    </ListGroup>


    </>
  );
}

export default Homeleftbar;

// Afeez
