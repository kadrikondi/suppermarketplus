import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import ReactDOM from "react-dom";
import { faGoogle } from "@fortawesome/free-solid-svg-icons";
import Styled from "./Signin.css";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logoblacknobg.png";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      let user = "user";

      if (user) {
        history.push("/signin");
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <>
      <div
        style={{ marginLeft: "500px", alignItems: "center" }}
        className="mt-5"
      >
        <div class="wrapper">
          <div class="title card-header py-2">
            {" "}
            <img src={Logo} alt="" style={{ width: "160px" }} />
            <h5 className="card-title">Sign-Up</h5>
          </div>

          <form onSubmit={handleSignup}>
            <div class="field">
              <input type="text" required></input>
              <label>Username</label>
            </div>
            <div class="field">
              <input type="email" required></input>
              <label>Email Address</label>
            </div>

            <div class="field">
              <input type="password" required></input>
              <label>Password</label>
            </div>

            <div class="mt-5">
              <input type="checkbox" required /> By clicking, you agree to
              Suppermartplus <Link to="/Terms"> Terms</Link> &{" "}
              <Link to="/Privacypolicy">Privacy Policy⁠</Link>
            </div>

            <div class="field">
              <input type="submit" value="Signup"></input>
            </div>
            <div class="signup-link">
              Already a member?{" "}
              <Link to="/Signin">
                <a href="#">Signin</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
