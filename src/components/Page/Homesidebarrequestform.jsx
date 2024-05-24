import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function Homesidebarrequestform() {
  return (
    <>
      <br />
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Send Request
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <FloatingLabel
            controlId="floatingTextarea"
            label="Send Request Subject"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Text" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Send Request Text">
            <Form.Control
              as="textarea"
              placeholder="Text"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <Button variant="primary" className="mt-3">Submit</Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default Homesidebarrequestform;

// Afeez

