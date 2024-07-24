// import React from "react";
// import { Stack } from "react-bootstrap"; // Ensure you have react-bootstrap installed

// const Contact = () => {
//   const containerStyle = {
//     display: "flex",
//     borderRadius: "10px",
//     padding: "10px",
//     maxWidth: "1000px",
//     margin: "20px auto",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     backgroundColor: "#e5e5e5",
//   };

//   const formContainerStyle = {
//     flex: 2,
//     paddingRight: "10px,",
//   };

//   const sidebarStyle = {
//     flex: 1,
//     borderLeft: "2px solid #ddd",
//     paddingLeft: "120px",
//     paddingTop: "140px",
//     color: "#555",
//   };

//   const headingStyle = {
//     textAlign: "center",
//     color: "#333",
//     margin: "10px 0",
//   };

//   const subHeadingStyle = {
//     textAlign: 'center',
//     color: '#666',
//     marginBottom: '10px'
//   };

//   const itemStyle = {
//     padding: "5px 0", // Adjusted padding for better layout
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "8px", // Reduced padding
//     margin: "5px 0",
//     border: "1px solid #ddd",
//     borderRadius: "5px",
//     backgroundColor: "#fff",
//   };

//   const buttonStyle = {
//     width: "50%",
//     padding: "10px", // Reduced padding
//     margin: "10px 0 0 110px", // Reduced margin top
//     border: "none",
//     borderRadius: "5px",
//     backgroundColor: "#0077b6", // Green background color
//     color: "#fff",
//     fontSize: "16px",
//     // cursor: 'pointer',
//     boxShadow: "0 4px 8px rgb(0, 0, 0, 0.2)", // Adding a more pronounced shadow for the button
//   };

//   const footerStyle = {
//     backgroundColor: "#0077b6",
//     color: "#fff",
//     textAlign: "center",
//     padding: "10px 0, 0, 40px",
//     marginTop: "20px",
//     borderRadius: "0 0 10px 10px",
//   };

//   return (
//     // // omogbolahan//

//     <div>
//       <div style={containerStyle}>
//         <div style={formContainerStyle}>
//           <Stack gap={3}>
//             <h1 style={headingStyle}>Contact Us</h1>
//             <h5 style={subHeadingStyle}>CONTACT US TODAY FOR AVAILABILITY</h5>
//             <div style={itemStyle}>
//               <input style={inputStyle} type="text" placeholder="Name" />
//             </div>
//             <div style={itemStyle}>
//               <input style={inputStyle} type="email" placeholder="Email" />
//             </div>
//             <div style={itemStyle}>
//               <input
//                 style={inputStyle}
//                 type="email"
//                 placeholder="Confirm Email"
//               />
//             </div>
//             <div style={itemStyle}>
//               <input style={inputStyle} type="tel" placeholder="Phone" />
//             </div>
//             <div style={itemStyle}>
//               <button style={buttonStyle} type="submit">
//                 Submit
//               </button>
//             </div>
//           </Stack>
//         </div>
//         <div style={sidebarStyle}>
//           <h4 style={{ margin: "10px 0" }}>Suppermarket Plus</h4>
//           <p style={{ margin: "5px 0" }}>
//             Lagos island Street
//             <br />
//             Airport Residential
//             <br />
//             NIGERIA
//           </p>
//           <p style={{ margin: "5px 0" }}>
//             +234 (0)20 4677 033
//             <br />
//             +234 (0)30 278 6726
//           </p>
//           <p style={{ margin: "5px 0" }}>
//             <a href="#">info@suppermarketplus.com</a>
//           </p>
//           <p style={{ margin: "5px 0" }}>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               www..info@suppermarketplus.com
//             </a>
//           </p>
//         </div>
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default Contact;

// //omogbolahan//

import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import axios from "axios";
import "../../App.css"; // Import your CSS file

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const loggedInUserId = localStorage.getItem("userId");
    if (loggedInUserId) {
      setUserId(loggedInUserId);
      fetchUserProfile(loggedInUserId);
    }
  }, []);

  const fetchUserProfile = async (id) => {
    try {
      const response = await axios.get(`/api/profile/${id}`);
      setEmail(response.data.email);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await axios.post(`/apiv1/contactus`, contactData);
      console.log(response.data);
      // Handle success (e.g., show a success message, clear the form)
    } catch (error) {
      console.error("Error sending contact data:", error);
      // Handle error (e.g., show an error message)
    }
  };

  const containerStyle = {
    display: "flex",
    borderRadius: "10px",
    padding: "10px",
    maxWidth: "1000px",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#e5e5e5",
  };

  const formContainerStyle = {
    flex: 2,
    paddingRight: "10px,",
  };

  const sidebarStyle = {
    flex: 1,
    borderLeft: "2px solid #ddd",
    paddingLeft: "120px",
    paddingTop: "140px",
    color: "#555",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333",
    margin: "10px 0",
  };

  const subHeadingStyle = {
    textAlign: "center",
    color: "#666",
    marginBottom: "10px",
  };

  const itemStyle = {
    padding: "5px 0", // Adjusted padding for better layout
  };

  const inputStyle = {
    width: "100%",
    padding: "8px", // Reduced padding
    margin: "5px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#fff",
  };

  const buttonStyle = {
    width: "50%",
    padding: "10px", // Reduced padding
    margin: "10px 0 0 110px", // Reduced margin top
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#0077b6", // Green background color
    color: "#fff",
    fontSize: "16px",
    // cursor: 'pointer',
    boxShadow: "0 4px 8px rgb(0, 0, 0, 0.2)", // Adding a more pronounced shadow for the button
  };

  const footerStyle = {
    backgroundColor: "#0077b6",
    color: "#fff",
    textAlign: "center",
    padding: "10px 0, 0, 40px",
    marginTop: "20px",
    borderRadius: "0 0 10px 10px",
  };
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>Contact Us</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    readOnly={userId !== null} // Make it read-only if the user is logged in
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="subject" className="mt-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="message" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Send Message
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          <div style={sidebarStyle}>
            <h4 style={{ margin: "10px 0" }}>Suppermarket Plus</h4>{" "}
            <p style={{ margin: "5px 0" }}>
              Lagos island Street <br />
              Airport Residential <br />
              NIGERIA
            </p>
            <p style={{ margin: "5px 0" }}>
              +234 (0)20 4677 033 <br />
              +234 (0)30 278 6726
            </p>
            <p style={{ margin: "5px 0" }}>
              <a href="#">info@suppermarketplus.com</a>
            </p>
            <p style={{ margin: "5px 0" }}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                www..info@suppermarketplus.com
              </a>
            </p>
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default ContactUs;
