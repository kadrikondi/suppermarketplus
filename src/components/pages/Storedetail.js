import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

 function Storedetail() {
  return (
    <div>
    {/* <h1>Store Name</h1>
    <p>Address: 123 Main Street, City, State, ZIP</p>
    <p>Phone: (123) 456-7890</p>
    <p>Email: contact@store.com</p>
    <p>Hours: Mon-Fri: 9am - 9pm, Sat-Sun: 10am - 6pm</p>
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?..."></iframe>
    </div> */}
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Storedetail;

// Afeez


// src/components/StoreInfo.js
// import React from 'react';

// const Storedetail = () => (
//   <section className="store-info">
//     <h1>Store Name</h1>
//     <p>Address: 123 Main Street, City, State, ZIP</p>
//     <p>Phone: (123) 456-7890</p>
//     <p>Email: contact@store.com</p>
//     <p>Hours: Mon-Fri: 9am - 9pm, Sat-Sun: 10am - 6pm</p>
//     <div className="map">
//       <iframe src="https://www.google.com/maps/embed?..."></iframe>
//     </div>
//   </section>
// );

// export default Storedetail;