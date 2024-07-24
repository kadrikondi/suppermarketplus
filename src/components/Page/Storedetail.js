// import Carousel from "react-bootstrap/Carousel"; // Correct import
// import ExampleCarouselImage from "../../components/Storedetail/Homeslider3.jpg";
// import CarouselImage from "../../components/Storedetail/Homeslider7.jpg";
// import Productimage from "../../components/Storedetail/Homeslide6.jpg";
// import Col from "react-bootstrap/Col";
// import ListGroup from "react-bootstrap/ListGroup";
// import Row from "react-bootstrap/Row";
// import Tab from "react-bootstrap/Tab";
// // import Card from 'react-bootstrap/Card';
// import Homeplaceholderanimation from "./Homeplaceholderanimation";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// // import Homecarousel from '../../components/Page/Homecarousel';
// import Homesidebar from "../../components/Page/Homesidebar";
// // import Homestorelist from './Homestorelist';
// import Homeleftbar from "./Homeleftbar";
// import Homesidebarrequestform from "./Homesidebarrequestform";
// import Homemiddleanimation from "./Homemiddleanimation";
// import Homeleftbarcustomerrepresentativebox from "./Homeleftbarcustomerrepresentativebox";
// import Homesidebarcarousel from "./Homesidebarcarousel";
// import Storedetailmiddlebar from "./Storedetailmiddlebar";
// import Storedetailcenterbarmodal from "../Storedetail/Storedetailcenterbarmodal";

// function Storedetail() {
//   const { id } = useParams(); // Get ID from URL parameters
//   const [supermarket, setSupermarket] = useState(null); // State to hold supermarket details

//   useEffect(() => {
//     // Function to fetch supermarket details
//     const fetchSupermarket = async () => {
//       try {
//         const response = await fetch(`/api/supermarkets/${id}`);
//         const data = await response.json();
//         setSupermarket(data);
//       } catch (error) {
//         console.error("Error fetching supermarket details:", error);
//       }
//     };

//     fetchSupermarket();
//   }, [id]);
//   const modalBodyStyle = {
//     maxWidth: "100%",
//     width: "300px",
//   };

//   return (
//     <div>
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={ExampleCarouselImage}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <marquee direction="right">
//               <h3>Supermarketplus</h3>
//               <p>Find everything you need.</p>
//             </marquee>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={CarouselImage}
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h3>Supermarketplus</h3>
//             <p>Find everything you need.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100" src={Productimage} alt="Third slide" />
//           <Carousel.Caption>
//             <h3>Supermarketplus</h3>
//             <p>Find everything you need.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//       <Col>
//         <Homeplaceholderanimation />
//       </Col>
//       <Row>
//         <Col>
//           <Homesidebar /> <Homesidebarcarousel /> <br /> <Homesidebarcarousel />{" "}
//           <Homesidebarrequestform />{" "}
//         </Col>

//         <Col xs={6}>
//           {" "}
//           <Homemiddleanimation />
//           <Storedetailcenterbarmodal style={modalBodyStyle} />{" "}
//           <Homemiddleanimation /> <Storedetailmiddlebar />{" "}
//           <Homemiddleanimation /> <Homemiddleanimation />{" "}
//           <Homeplaceholderanimation />
//         </Col>

//         <Col>
//           {" "}
//           <Homeleftbar /> <Homeleftbarcustomerrepresentativebox />{" "}
//         </Col>
//       </Row>

//       <br />
//       <br />

//       <div
//         style={{
//           width: "1600px",
//           height: "250px",
//           textAlign: "center",
//           border: "1px solid #ccc",
//           padding: "1rem",
//           boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//           backgroundColor: "black",
//           color: "white",
//           fontFamily: "Arial, sans-serif",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
//         }}
//       >
//         <h1 style={{ margin: "0.5rem", fontSize: "2rem" }}>Store Name</h1>
//         <p style={{ margin: "0.5rem", fontSize: "1.2rem" }}>
//           Address: 123 Main Street, City, State, ZIP
//         </p>
//         <p style={{ margin: "0.5rem", fontSize: "1.2rem" }}>
//           Phone: (123) 456-7890
//         </p>
//         <p style={{ margin: "0.5rem", fontSize: "1.2rem" }}>
//           Email: contact@store.com
//         </p>
//         <p style={{ margin: "0.5rem", fontSize: "1.2rem" }}>
//           Hours: Mon-Fri: 9am - 9pm, Sat-Sun: 10am - 6pm
//         </p>
//       </div>

//       <div className="map">
//         <iframe
//           src="https://www.google.com/maps/embed?..."
//           title="Store Location"
//           width="1600"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default Storedetail;
// // Afeez

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../components/Storedetail/Homeslider3.jpg";
import CarouselImage from "../../components/Storedetail/Homeslider7.jpg";
import Productimage from "../../components/Storedetail/Homeslide6.jpg";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Homeplaceholderanimation from "./Homeplaceholderanimation";
import Homesidebar from "../../components/Page/Homesidebar";
import Homeleftbar from "./Homeleftbar";
import Homesidebarrequestform from "./Homesidebarrequestform";
import Homemiddleanimation from "./Homemiddleanimation";
import Homeleftbarcustomerrepresentativebox from "./Homeleftbarcustomerrepresentativebox";
import Homesidebarcarousel from "./Homesidebarcarousel";
import Storedetailmiddlebar from "./Storedetailmiddlebar";
import { fetchSingleSupermarket } from "../api/api";
import Storedetailcenterbarmodal from "../Storedetail/Storedetailcenterbarmodal";

function Storedetail() {
  const { id } = useParams(); // Get ID from URL parameters
  const [supermarket, setSupermarket] = useState(null); // State to hold supermarket details

  useEffect(() => {
    // Function to fetch supermarket details
    const fetchData = async () => {
      try {
        const data = await fetchSingleSupermarket(id);
        setSupermarket(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching supermarket details:", error);
      }
    };

    fetchData();
  }, [id]);

  const modalBodyStyle = {
    maxWidth: "100%",
    width: "300px",
  };

  if (!supermarket) {
    return <div>Loading...</div>; // Loading state while fetching data
  }

  return (
    <div>
      <Carousel>
        {supermarket.images.map(
          (image, index) =>
            image && (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  style={{ height: "400px" }}
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
                <Carousel.Caption>
                  <h3>{supermarket.name}</h3>
                  <p>Find everything you need.</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
        )}
      </Carousel>
      <Col>
        <Homeplaceholderanimation />
      </Col>

      <h3>{supermarket.name}</h3>
      <Row>
        <Col>
          <Homesidebar />
          <Homesidebarcarousel />
          <br />
          <Homesidebarcarousel />
          <Homesidebarrequestform />
        </Col>

        <Col xs={6}>
          <Homemiddleanimation />
          <Storedetailcenterbarmodal style={modalBodyStyle} />
          <Homemiddleanimation />
          <Storedetailmiddlebar suppermarket={supermarket} />
          <Homemiddleanimation />
          <Homemiddleanimation />
          <Homeplaceholderanimation />
        </Col>

        <Col>
          <Homeleftbar />
          <Homeleftbarcustomerrepresentativebox />
        </Col>
      </Row>

      <br />
      <br />

      <div
        style={{
          width: "1600px",
          height: "250px",
          textAlign: "center",
          border: "1px solid #ccc",
          padding: "1rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "black",
          color: "white",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1 style={{ margin: "0.5rem", fontSize: "2rem" }}>
          {supermarket.name}
        </h1>
        <p style={{ margin: "0.5rem", fontSize: "1.2rem" }}>
          Address: {supermarket.address}
        </p>
        <p style={{ margin: "0.5rem", fontSize: "1.2rem" }}>
          Phone: {supermarket.phone}
        </p>
        <p style={{ margin: "0.5rem", fontSize: "1.2rem" }}>
          Email: {supermarket.email}
        </p>
        <p style={{ margin: "0.5rem", fontSize: "1.2rem" }}>
          Hours: {supermarket.hours}
        </p>
      </div>

      <div className="map">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${supermarket.mapEmbedCode}`}
          title="Store Location"
          width="1600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Storedetail;
