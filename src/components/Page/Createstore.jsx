// //

// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
// import axios from "axios";
// import "../../App.css"; // Import your CSS file
// import Logo from "../../assets/images/logomain.png";

// function CreateStore() {
//   const history = useHistory();
//   const [storeName, setStoreName] = useState("");
//   const [storeCategory, setStoreCategory] = useState("");
//   const [storeDescription, setStoreDescription] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [zipCode, setZipCode] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [openHours, setOpenHours] = useState("");
//   const [closeHours, setCloseHours] = useState("");
//   const [storeImages, setStoreImages] = useState([]);

//   // Check if user is authenticated
//   useEffect(() => {
//     const checkAuth = () => {
//       const userId = localStorage.getItem("userId");
//       if (!userId) {
//         history.push("/login"); // Redirect to login if not authenticated
//       }
//     };
//     checkAuth();
//   }, [history]);

//   const handleImageChange = (e) => {
//     setStoreImages(e.target.files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("storeName", storeName);
//     formData.append("storeCategory", storeCategory);
//     formData.append("storeDescription", storeDescription);
//     formData.append("address", address);
//     formData.append("city", city);
//     formData.append("state", state);
//     formData.append("zipCode", zipCode);
//     formData.append("phoneNumber", phoneNumber);
//     formData.append("email", email);
//     formData.append("openHours", openHours);
//     formData.append("closeHours", closeHours);
//     for (let i = 0; i < storeImages.length; i++) {
//       formData.append("storeImages", storeImages[i]);
//     }

//     try {
//       const userId = localStorage.getItem("userId");
//       const response = await axios.post(
//         `http://localhost:8000/apiv1/registersupermarket/${userId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log(response.data);
//       // Handle success (e.g., show a success message, redirect to another page)
//     } catch (error) {
//       console.error("Error creating store:", error);
//       // Handle error (e.g., show an error message)
//     }
//   };

//   return (
//     <div>
//       {/* Header */}

//       {/* Create Store Form */}
//       <Container className="mt-5">
//         <Card>
//           <Card.Header>Create Your Store</Card.Header>
//           <Card.Body>
//             <Form onSubmit={handleSubmit}>
//               {/* Store Details */}
//               <h5>Store Details</h5>
//               <Row>
//                 <Col md={6}>
//                   <Form.Group controlId="storeName">
//                     <Form.Label>Store Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter store name"
//                       value={storeName}
//                       onChange={(e) => setStoreName(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="storeCategory">
//                     <Form.Label>Store Category</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter store category"
//                       value={storeCategory}
//                       onChange={(e) => setStoreCategory(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Form.Group controlId="storeDescription" className="mt-3">
//                 <Form.Label>Store Description</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   placeholder="Enter store description"
//                   value={storeDescription}
//                   onChange={(e) => setStoreDescription(e.target.value)}
//                 />
//               </Form.Group>

//               {/* Location Details */}
//               <h5 className="mt-4">Location Details</h5>
//               <Row>
//                 <Col md={6}>
//                   <Form.Group controlId="address">
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter address"
//                       value={address}
//                       onChange={(e) => setAddress(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="city">
//                     <Form.Label>City</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter city"
//                       value={city}
//                       onChange={(e) => setCity(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Row className="mt-3">
//                 <Col md={6}>
//                   <Form.Group controlId="state">
//                     <Form.Label>State</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter state"
//                       value={state}
//                       onChange={(e) => setState(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="zipCode">
//                     <Form.Label>Zip Code</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter zip code"
//                       value={zipCode}
//                       onChange={(e) => setZipCode(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               {/* Contact Details */}
//               <h5 className="mt-4">Contact Details</h5>
//               <Row>
//                 <Col md={6}>
//                   <Form.Group controlId="phoneNumber">
//                     <Form.Label>Phone Number</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter phone number"
//                       value={phoneNumber}
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="email">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                       type="email"
//                       placeholder="Enter email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               {/* Business Hours */}
//               <h5 className="mt-4">Business Hours</h5>
//               <Row>
//                 <Col md={6}>
//                   <Form.Group controlId="openHours">
//                     <Form.Label>Open Hours</Form.Label>
//                     <Form.Control
//                       type="time"
//                       value={openHours}
//                       onChange={(e) => setOpenHours(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="closeHours">
//                     <Form.Label>Close Hours</Form.Label>
//                     <Form.Control
//                       type="time"
//                       value={closeHours}
//                       onChange={(e) => setCloseHours(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               {/* Store Image Upload */}
//               <h5 className="mt-4">Store Image</h5>
//               <Form.Group controlId="storeImage" className="mb-3">
//                 <Form.Label>Upload Images</Form.Label>
//                 <Form.Control
//                   type="file"
//                   multiple
//                   onChange={handleImageChange}
//                 />
//               </Form.Group>

//               <Button variant="primary" type="submit">
//                 Create Store
//               </Button>
//             </Form>
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// }

// export default CreateStore;

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import axios from "axios";
import "../../App.css"; // Import your CSS file

function CreateStore() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [building, setBuilding] = useState("");
  const [whatsappno, setWhatsappNo] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        history.push("/signin"); // Redirect to login if not authenticated
      } else {
        setCreatedBy(userId);
      }
    };
    checkAuth();
  }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storeData = {
      name,
      phone,
      email,
      street,
      city,
      state,
      building,
      whatsappno,
      description,
      createdBy,
    };

    try {
      const response = await axios.post(
        `http://localhost:8000/apiv1/registersupermarket/${createdBy}`,
        storeData
      );
      alert(response.data.message);
      console.log(response.data);
      history.push(`/upload-supermarket-images/${response.data.store._id}`); // Redirect to the image upload page
    } catch (error) {
      console.error("Error creating store:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div>
      {/* Create Store Form */}
      <Container className="mt-5">
        <Card>
          <Card.Header>Create Your Store</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              {/* Store Details */}
              <h5>Store Details</h5>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="name">
                    <Form.Label>Store Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter store name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="whatsappNo">
                    <Form.Label>WhatsApp Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter WhatsApp number"
                      value={whatsappno}
                      onChange={(e) => setWhatsappNo(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Location Details */}
              <h5 className="mt-4">Location Details</h5>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="street">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="building">
                    <Form.Label>Building</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter building"
                      value={building}
                      onChange={(e) => setBuilding(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Description */}
              <h5 className="mt-4">Description</h5>
              <Form.Group controlId="description" className="mt-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4">
                Create Store
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CreateStore;
