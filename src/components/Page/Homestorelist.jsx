import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Supperfirst from "../../assets/images/marketplace.png";
import { Link } from "react-router-dom";

function Homestorelist({ supermarkets }) {
  const user = localStorage.getItem("user");
  return (
    <div>
      {/* CardGroup Section */}
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          <marquee behavior="" direction="alternative">
            WELCOME {user.toUpperCase()}
          </marquee>
        </ListGroup.Item>
        {/* <CardGroup>
          <Card>
            <Card.Img variant="top" src={Supperfirst} />
            <Card.Body>
              <Card.Title>BENNYCOOL SUPPERMARKET</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Supperfirst} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Supperfirst} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup> */}

        {/* {supermarkets.map((supermarket) => (
          <div key={supermarket._id}>
            <h3>{supermarket.name}</h3>
            <p>{supermarket.description}</p>
          </div>
        ))} */}
        {/* Row and Col Section */}
        <Row xs={1} md={2} className="g-4 mt-4">
          {supermarkets.map((supermarket) => {
            const {
              name,
              building,
              images,
              state,
              description,
              email,
              phone,
              whatsappno,
              _id,
            } = supermarket;
            const filteredImages = images.filter((image) => image !== null);

            // Get the last image URL
            const lastImage = filteredImages[filteredImages.length - 1];

            return (
              <Col key={_id}>
                <Card>
                  {/* {  supermarket.image.filter(image => image !== null) */}

                  <Card.Img variant="top" src={lastImage} />
                  <Card.Body>
                    {/* {console.log(lastImage)} */}
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description?.substring(0, 50)}</Card.Text>
                  </Card.Body>

                  <Card.Footer>
                    {" "}
                    <div className="text-center">
                      <Link to={`/storedetail/${_id}`}>
                        {" "}
                        <Button> Visit SupperMart</Button>
                      </Link>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>

        {/* Row and Col Section */}
        {/* <Row xs={1} md={2} className="g-4 mt-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={Supperfirst} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}

        {/* <CardGroup className="mt-5">
          <Card>
            <Card.Img variant="top" src={Supperfirst} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Supperfirst} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Supperfirst} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup> */}

        {/* Bootstrap Button */}
        {/* <Button variant="primary">Click me</Button> */}
      </ListGroup>
    </div>
  );
}

export default Homestorelist;
// Afeez
