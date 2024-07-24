import { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  Image,
  Modal,
  FormSelect,
} from "react-bootstrap";
import "../../App.css"; // Import your CSS file

function Profilemodelpopup({ userprofile }) {
  const [show, setShow] = useState(false);
  const [profileImage, setProfileImage] = useState(userprofile.pic);
  const [formData, setFormData] = useState({
    username: userprofile.username || "",
    email: userprofile.email || "",
    phone: userprofile.phone || "",
    address: userprofile.address || "",
    dateJoined: userprofile.dateJoined || "",
    gender: userprofile.gender || "Select",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextSubmit = async () => {
    try {
      const data = await axios.put(
        `http://localhost:8000/user/update/${userprofile._id}`,
        formData
      );
      console.log(data);
      console.log("Profile text data updated:", formData);
      setShow(false);
    } catch (error) {
      console.error("Error updating profile text:", error);
    }
  };

  const handleImageSubmit = async () => {
    try {
      const formDataImage = new FormData();
      formDataImage.append("pic", profileImage);
      const data = await axios.put(
        `http://localhost:8000/user/updateprofile/${userprofile._id}`,
        formDataImage
      );

      console.log(data);
      console.log("Profile image updated:", profileImage);
      setShow(false);
    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {/* Profile Image Section */}
            <Container className="mt-5">
              <Card>
                <Card.Header>Profile Image</Card.Header>
                <Card.Body className="text-center">
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <Image
                      src={profileImage}
                      roundedCircle
                      style={{ width: "150px", height: "150px" }}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        cursor: "pointer",
                      }}
                      onChange={handleImageChange}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "#fff",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: "5px",
                        borderRadius: "5px",
                        textAlign: "center",
                        fontSize: "14px",
                        pointerEvents: "none",
                      }}
                    >
                      Edit Image
                    </div>
                  </div>
                  <Button
                    className="mt-3"
                    variant="primary"
                    onClick={handleImageSubmit}
                  >
                    Save Image
                  </Button>
                </Card.Body>
              </Card>
            </Container>

            {/* Profile Text Section */}
            <Container className="mt-5">
              <Card>
                <Card.Header>Profile Text</Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="profileName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="profileEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={6}>
                        <Form.Group controlId="profilePhone">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="profileAddress">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={6}>
                        <Form.Group controlId="accountDateJoined">
                          <Form.Label>Date Joined</Form.Label>
                          <Form.Control
                            type="text"
                            name="dateJoined"
                            value={formData.dateJoined}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="profileGender">
                          <Form.Label>Gender</Form.Label>
                          <FormSelect
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                          >
                            <option>Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                          </FormSelect>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      className="mt-3"
                      variant="primary"
                      onClick={handleTextSubmit}
                    >
                      Save Text
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Container>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Profilemodelpopup;
