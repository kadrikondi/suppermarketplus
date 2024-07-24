import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Container, Card, Form } from "react-bootstrap";
import axios from "axios";

function UploadSupermarketImages() {
  const { storeId } = useParams(); // Get store ID from URL parameters
  const history = useHistory();
  const [storeImages, setStoreImages] = useState([]);
  const userId = localStorage.getItem("userId");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleImageChange = (e) => {
    setStoreImages(e.target.files);
    console.log(storeId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    for (let i = 0; i < storeImages.length; i++) {
      formData.append("images", storeImages[i]);
    }

    try {
      const response = await axios.put(
        `http://localhost:8000/apiv1/suppermarket/supphotoscloud/${userId}/${storeId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setIsLoading(false);
      history.push(`/storedetail/${storeId}`); // Redirect to the store detail page
    } catch (error) {
      setIsLoading(false);
      console.error("Error uploading images:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div>
      {/* Upload Images Form */}
      <Container className="mt-5">
        <Card>
          <Card.Header>Upload Store Images</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="storeImage" className="mb-3">
                <Form.Label>Upload Images</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  onChange={handleImageChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {" "}
                {isLoading ? "Uploading..." : "Upload Images"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default UploadSupermarketImages;
