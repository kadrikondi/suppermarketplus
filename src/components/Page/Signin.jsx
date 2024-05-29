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

function Signin() {
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      let userid = "232";

      if (userid) {
        localStorage.setItem("userid", userid);
        await history.push("/home");
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
            <h5 className="card-title">Sign-in</h5>
          </div>

          <form onSubmit={handleSignin}>
            <div class="field">
              <input type="email" required></input>
              <label>Email Address</label>
            </div>

            <div class="field">
              <input type="password" required></input>
              <label>Password</label>
            </div>

            <div class="field">
              <input type="submit" value="Login"></input>
            </div>
            <div class="signup-link">
              Not a member?{" "}
              <Link to="/Signup">
                <a href="#">Signup now</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
