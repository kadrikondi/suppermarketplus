import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import ReactDOM from 'react-dom'
import { faGoogle } from '@fortawesome/free-solid-svg-icons'
import Styled from './Style.css'
import Signup from './Signup'
import { Link } from 'react-router-dom';


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
<><div style={{marginLeft: '500px', alignItems: 'center'}}>
<div class="wrapper">
         <div class="title">
            Login Now
         </div>
         <form action="#">
            <div class="field">
               <input type="email" required></input>
               <label>Email Address</label>
            </div>

            <div class="field">
               <input type="text" required></input>
               <label>Username</label>
            </div>

            <div class="field">
               <input type="password" required></input>
               <label>Password</label>
            </div>
            
            <div class="field">
               <input type="submit" value="Login"></input>
            </div>
            <div class="signup-link">
               Not a member? <Link to="/Signup"><a href="#">Signup now</a></Link>
            </div>
         </form>
      </div></div>
    </>
  );
} 
  
    export default Signin ;
