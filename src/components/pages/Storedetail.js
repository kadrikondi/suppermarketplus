import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; // Correct import
import ExampleCarouselImage from '../../components/Storedetail/e71a9d3c-5727-420b-9711-b6f67bf99bea-cover.png';
import CarouselImage from '../../components/Storedetail/storedetail2.jpg';
import Productimage from '../../components/Storedetail/stroredetail1.webp';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';

function Storedetail() {
  return (
    <div>
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
      <br/>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={3}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Marketplace
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                More products
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={6}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <div>
                  <h4>Welcome to Melodiareact2024marketplace: Your One-Stop Shop for Everything You Need!</h4>
                  At SuperMart, we pride ourselves on being more than just a supermarket. We're your ultimate shopping destination, offering a vast selection of products to meet all your daily needs and special occasions. Explore the diverse range of items we have in store for you:
                  <br/>
                  <h4>Clothing for Everyone</h4>
                  <ul>
                    <li><h5>Men's Fashion:</h5> From casual wear to formal attire, discover a stylish collection of shirts, trousers, jeans, jackets, and accessories that cater to every man's wardrobe.</li>
                    <li><h5>Women's Fashion:</h5> Shop the latest trends in women's clothing, including dresses, blouses, skirts, pants, and outerwear. We also offer a variety of lingerie and sleepwear.</li>
                    <li><h5>Children's Apparel:</h5> Keep your kids looking cute and comfortable with our range of children's clothing, including baby wear, school uniforms, and casual outfits.</li>
                    <li><h5>Undergarments:</h5> Find the perfect fit with our selection of undergarments for men, women, and children, including bras, panties, briefs, and socks.</li>
                  </ul>
                  <h5>Food Stuffs</h5>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
            </Tab.Content>
          </Col>
          <Col sm={3}>
            <div style={{ height: '100%', overflowY: 'auto', paddingRight: '15px' }}>
              {[...Array(4)].map((_, index) => (
                <Card key={index} style={{ marginBottom: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                  <Card.Body>
                    <Card.Title>Card Title {index + 1}</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Tab.Container>

      <br/><br/>

      <div style={{ 
        width: '1600px', 
        height: '250px',
        textAlign: 'center', 
        border: '1px solid #ccc', 
        padding: '1rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'black', 
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
      }}>
        <h1 style={{ margin: '0.5rem', fontSize: '2rem' }}>Store Name</h1>
        <p style={{ margin: '0.5rem', fontSize: '1.2rem' }}>Address: 123 Main Street, City, State, ZIP</p>
        <p style={{ margin: '0.5rem', fontSize: '1.2rem' }}>Phone: (123) 456-7890</p>
        <p style={{ margin: '0.5rem', fontSize: '1.2rem' }}>Email: contact@store.com</p>
        <p style={{ margin: '0.5rem', fontSize: '1.2rem' }}>Hours: Mon-Fri: 9am - 9pm, Sat-Sun: 10am - 6pm</p>
      </div>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?..." title="Store Location" width="1600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default Storedetail;

// Afeez