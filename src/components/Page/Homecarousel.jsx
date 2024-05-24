import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../components/Storedetail/Homeslider3.jpg';
import CarouselImage from '../../components/Storedetail/Homeslider7.jpg';
import Productimage from '../../components/Storedetail/Homeslide6.jpg';

function Homecarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={ExampleCarouselImage} alt="First slide" />
        <Carousel.Caption>
          <marquee direction="right">
            <h3>Supermarketplus</h3>
            <p>Find everything you need.</p>
          </marquee>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CarouselImage} alt="Second slide" />
        <Carousel.Caption>
        
            <h3>Supermarketplus</h3>
            <p>Find everything you need.</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Productimage} alt="Third slide" />
        <Carousel.Caption>
    
          <h3>Supermarketplus</h3>
          <p>Find everything you need.</p>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Homecarousel;

// Afeez

