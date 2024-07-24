// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import {
// //   Button,
// //   Container,
// //   Row,
// //   Col,
// //   Card,
// //   Form,
// //   Image,
// // } from "react-bootstrap";
// // import "../../App.css"; // Import your CSS file
// // import ProfilePic from "../../assets/images/Best-Online-Marketplaces.jpg"; // Example profile picture
// // import Profilemodelpopup from "../Page/Profilemodelpopup";
// // import { fetchUser } from "../api/api";

// // function Profile() {
// //   const { userId } = useParams();
// //   const [user, setUser] = useState("");

// //   useEffect(() => {
// //     const getUser = async () => {
// //       console.log(userId + "sdsadasdadasdas");
// //       try {
// //         const userData = await fetchUser(userId);
// //         setUser(userData);
// //         console.log(userData);
// //       } catch (error) {
// //         console.error("Error fetching user data:", error);
// //       }
// //     };

// //     getUser();
// //   }, [userId]);

// //   const profilePicStyle = {
// //     width: "150px",
// //     height: "150px",
// //   };

// //   if (!user) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       {/* Profile Sections */}
// //       <Container className="mt-5">
// //         <Card>
// //           <Card.Header>Profile {user.username}</Card.Header>

// //           <Card.Body>
// //             {/* Profile Header */}
// //             <div className="text-center mb-4">
// //               <Image src={user.pic} roundedCircle style={profilePicStyle} />
// //               <h2 className="mt-3">{user.username}</h2>
// //               <p className="text-muted">{user.bio}</p>
// //             </div>

// //             {/* Personal Information */}
// //             <h5>Personal Information</h5>
// //             <Form>
// //               <Row>
// //                 <Col md={6}>
// //                   <Form.Group controlId="profileName">
// //                     <Form.Label>Name</Form.Label>
// //                     <Form.Control type="text" value={user.username} disabled />
// //                   </Form.Group>
// //                 </Col>
// //                 <Col md={6}>
// //                   <Form.Group controlId="profileEmail">
// //                     <Form.Label>Email</Form.Label>
// //                     <Form.Control type="email" value={user.email} disabled />
// //                   </Form.Group>
// //                 </Col>
// //               </Row>
// //               <Row className="mt-3">
// //                 <Col md={6}>
// //                   <Form.Group controlId="profilePhone">
// //                     <Form.Label>Phone</Form.Label>
// //                     <Form.Control type="text" value={user.phone} disabled />
// //                   </Form.Group>
// //                 </Col>
// //                 <Col md={6}>
// //                   <Form.Group controlId="profileAddress">
// //                     <Form.Label>Address</Form.Label>
// //                     <Form.Control type="text" value={user.address} disabled />
// //                   </Form.Group>
// //                 </Col>
// //               </Row>
// //             </Form>

// //             {/* Account Information */}
// //             <h5 className="mt-4">Account Information</h5>
// //             <Row>
// //               <Col md={6}>
// //                 <Form.Group controlId="accountUsername">
// //                   <Form.Label>Username</Form.Label>
// //                   <Form.Control type="text" value={user.username} disabled />
// //                 </Form.Group>
// //               </Col>
// //               <Col md={6}>
// //                 <Form.Group controlId="accountDateJoined">
// //                   <Form.Label>Date Joined</Form.Label>
// //                   <Form.Control type="text" value={user.dateJoined} disabled />
// //                 </Form.Group>
// //               </Col>
// //               <Row className="mt-3">
// //                 <Col md={6}>
// //                   <Form.Group controlId="profileGender">
// //                     <Form.Label>Gender</Form.Label>
// //                     <Form.Control as="select" value={user.gender} disabled>
// //                       <option>Select</option>
// //                       <option>Male</option>
// //                       <option>Female</option>
// //                       <option>Others</option>
// //                     </Form.Control>
// //                   </Form.Group>
// //                 </Col>
// //               </Row>
// //               {/* Centered Edit Button */}
// //               <div className="text-center mt-3">
// //                 <Profilemodelpopup />
// //               </div>
// //             </Row>

// //             {/* Activity Feed */}
// //             <h5 className="mt-4">Activity Feed</h5>
// //             <Card className="mt-3">
// //               <Card.Body>
// //                 <Card.Text>{user.activityFeed}</Card.Text>
// //               </Card.Body>
// //             </Card>
// //           </Card.Body>
// //         </Card>
// //       </Container>
// //     </div>
// //   );
// // }

// // export default Profile;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col, Card, Form, Image } from "react-bootstrap";
// import "../../App.css"; // Import your CSS file
// import ProfilePic from "../../assets/images/Best-Online-Marketplaces.jpg"; // Example profile picture
// import Profilemodelpopup from "../Page/Profilemodelpopup";
// import { fetchUser } from "../api/api";

// function Profile() {
//   const { userId } = useParams();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         const userData = await fetchUser(userId);
//         setUser(userData);
//         console.log(userData);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     getUser();
//   }, [userId]);

//   const profilePicStyle = {
//     width: "150px",
//     height: "150px",
//   };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {/* Profile Sections */}
//       <Container className="mt-5">
//         <Card>
//           <Card.Header>Profile {user.username}</Card.Header>

//           <Card.Body>
//             {/* Profile Header */}
//             <div className="text-center mb-4">
//               <Image
//                 src={user.pic || ProfilePic}
//                 roundedCircle
//                 style={profilePicStyle}
//               />
//               <h2 className="mt-3">{user.username}</h2>
//               <p className="text-muted">{user.bio}</p>
//             </div>

//             {/* Personal Information */}
//             <h5>Personal Information</h5>
//             <Form>
//               <Row>
//                 <Col md={6}>
//                   <Form.Group controlId="profileName">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control type="text" value={user.username} />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="profileEmail">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control type="email" value={user.email} disabled />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Row className="mt-3">
//                 <Col md={6}>
//                   <Form.Group controlId="profilePhone">
//                     <Form.Label>Phone</Form.Label>
//                     <Form.Control type="text" value={user.phone} disabled />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="profileAddress">
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control type="text" value={user.address} disabled />
//                   </Form.Group>
//                 </Col>
//               </Row>
//             </Form>

//             {/* Account Information */}
//             <h5 className="mt-4">Account Information</h5>
//             <Row>
//               <Col md={6}>
//                 <Form.Group controlId="accountUsername">
//                   <Form.Label>Username</Form.Label>
//                   <Form.Control type="text" value={user.username} disabled />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group controlId="accountDateJoined">
//                   <Form.Label>Date Joined</Form.Label>
//                   <Form.Control type="text" value={user.dateJoined} disabled />
//                 </Form.Group>
//               </Col>
//               <Row className="mt-3">
//                 <Col md={6}>
//                   <Form.Group controlId="profileGender">
//                     <Form.Label>Gender</Form.Label>
//                     <Form.Control as="select" value={user.gender} disabled>
//                       <option>Select</option>
//                       <option>Male</option>
//                       <option>Female</option>
//                       <option>Others</option>
//                     </Form.Control>
//                   </Form.Group>
//                 </Col>
//               </Row>
//               {/* Centered Edit Button */}
//               <div className="text-center mt-3">
//                 <Profilemodelpopup />
//               </div>
//             </Row>

//             {/* Activity Feed */}
//             <h5 className="mt-4">Activity Feed</h5>
//             <Card className="mt-3">
//               <Card.Body>
//                 <Card.Text>{user.activityFeed}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// }

// export default Profile;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Form, Image } from "react-bootstrap";
import "../../App.css"; // Import your CSS file
import ProfilePic from "../../assets/images/Best-Online-Marketplaces.jpg"; // Example profile picture
import Profilemodelpopup from "../Page/Profilemodelpopup";
import { fetchUser } from "../api/api";

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        console.log("Fetching user with ID:", userId);
        const userData = await fetchUser(userId);
        console.log("User data fetched:", userData.user.username);
        setUser(userData.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUser();
  }, [userId]);

  const profilePicStyle = {
    width: "150px",
    height: "150px",
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user.username + "gooodoodoododoo"}
      {/* Profile Sections */}
      <Container className="mt-5">
        <Card>
          <Card.Header>Profile {user.username}</Card.Header>

          <Card.Body>
            {/* Profile Header */}
            <div className="text-center mb-4">
              <Image
                src={user.pic || ProfilePic}
                roundedCircle
                style={profilePicStyle}
              />
              <h2 className="mt-3">{user.username}</h2>
              <p className="text-muted">{user.bio}</p>
            </div>

            {/* Personal Information */}
            <h5>Personal Information</h5>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="profileName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={user.username} disabled />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="profileEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={user.email} disabled />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="profilePhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" value={user.phone} disabled />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="profileAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" value={user.address} disabled />
                  </Form.Group>
                </Col>
              </Row>
            </Form>

            {/* Account Information */}
            <h5 className="mt-4">Account Information</h5>
            <Row>
              <Col md={6}>
                <Form.Group controlId="accountUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" value={user.username} disabled />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="accountDateJoined">
                  <Form.Label>Date Joined</Form.Label>
                  <Form.Control type="text" value={user.dateJoined} disabled />
                </Form.Group>
              </Col>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="profileGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" value={user.gender} disabled>
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              {/* Centered Edit Button */}
              <div className="text-center mt-3">
                <Profilemodelpopup userprofile={user} />
              </div>
            </Row>

            {/* Activity Feed */}
            <h5 className="mt-4">Activity Feed</h5>
            <Card className="mt-3">
              <Card.Body>
                <Card.Text>{user.activityFeed}</Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Profile;
