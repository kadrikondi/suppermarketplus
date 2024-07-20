import { useState } from 'react';
import { FormSelect } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {
    Button,
    Container,
    Row,
    Col,
    Card,
    Form,
    Image,
} from "react-bootstrap";
import "../../App.css"; // Import your CSS file
import ProfilePic from "../../assets/images/Best-Online-Marketplaces.jpg"; // Example profile picture

function Profilemodelpopup() {
    const [show, setShow] = useState(false);
    const [profileImage, setProfileImage] = useState(ProfilePic);

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
                        {/* Profile Sections */}
                        <Container className="mt-5">
                            <Card>
                                <Card.Header>Profile</Card.Header>
                                <Card.Body>
                                    {/* Profile Header */}
                                    <div className="text-center mb-4">
                                        <div style={{ position: 'relative', display: 'inline-block' }}>
                                            <Image
                                                src={profileImage}
                                                roundedCircle
                                                style={{ width: "150px", height: "150px" }}
                                            />
                                            <input
                                                type="file"
                                                accept="image/*"
                                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                                                onChange={handleImageChange}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                color: '#fff',
                                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                padding: '5px',
                                                borderRadius: '5px',
                                                textAlign: 'center',
                                                fontSize: '14px',
                                                pointerEvents: 'none'
                                            }}>
                                                Edit Image
                                            </div>
                                        </div>
                                        <h2 className="mt-3">John Doe</h2>
                                        <p className="text-muted">Web Developer</p>
                                    </div>

                                    {/* Personal Information */}
                                    <h5>Personal Information</h5>
                                    <Form>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group controlId="profileName">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="profileEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="john.doe@example.com" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col md={6}>
                                                <Form.Group controlId="profilePhone">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control type="text" placeholder="(000) 000-0000" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="profileAddress">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control type="text" placeholder="123 Main St, City, Country" />
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
                                                <Form.Control type="text" placeholder="Username" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="accountDateJoined">
                                                <Form.Label>Date Joined</Form.Label>
                                                <Form.Control type="text" placeholder="January 1, 2020" />
                                            </Form.Group>
                                        </Col>
                                        <Row className="mt-3">
                                            <Col md={6}>
                                                <Form.Group controlId="profileGender">
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Control as="select">
                                                        <option>Select</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Others</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Row>

                                    {/* Activity Feed */}
                                </Card.Body>
                            </Card>
                        </Container>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Profilemodelpopup;
