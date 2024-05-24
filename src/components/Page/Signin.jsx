import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Signin() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div style={{height: '250px', borderRadius: '50px', backgroundColor: '#ccc', width: '500px', margin: 'auto', color: 'black', alignItem: 'center'}}><br></br><div style={{fontSize: '30px', fontWeight: 'bolder', textAlign: 'center'}}><span style={{color: 'green'}}>L</ span><span style={{color: 'red'}}>O</ span><span style={{color: 'blue'}}>G</ span><span style={{color: 'yellow'}}>I</ span><span style={{color: 'black'}}>N</ span> </div>
 <Form>
      <Form.Group style={{width: '500px', margin: 'auto'}} as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="@" />
        </Col>
      </Form.Group>
      
      <Form.Group style={{width: '500px', margin: 'auto'}}as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col><br /><br />
       
     


      <Button style={{marginTop: '15px', marginLeft: '140px', color: 'White', borderRadius: '50px', backgroundColor: 'Skyblue', width: '230px'}} type="submit">Submit</Button>{' '}
      </Form.Group>
     

    </Form>

  
   

    </div>
  );
}

export default Signin;















