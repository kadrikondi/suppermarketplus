import { useState, useEffect } from "react";
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
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function SignUp() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // usehistory is using what we have in our saved history in our database
  const history = useHistory();

  const handleUserName = (e) => {
    setUserName(e.target.value);
    console.log(username);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (password !== confirmpassword) {
        setErrorMessage("passsword not match");
        setLoading(false);
        return;
      }

      const user = {
        username,
        email,
        password,
        confirmpassword,
      };

      const response = await axios.post("http://localhost:8000/register", user);
      setLoading(false);
      if (response.status === 200) {
        history.push("/signin");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
        console.log(error.response.data.message);
        console.log(error.response.data);
        setLoading(false);
      } else {
        setErrorMessage("Signup failed");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [errorMessage]);
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
              <input
                type="text"
                required
                value={username}
                onChange={handleUserName}
              />
              <label>Username</label>
            </div>
            <div class="field">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(email);
                }}
              />
              <label>Email Address</label>
            </div>

            <div class="field">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>

            <div class="field">
              <input
                type="password"
                required
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label> Confirm Password</label>
            </div>

            {errorMessage && (
              <div className=" mt-5 alert alert-danger rounded">
                {errorMessage}
              </div>
            )}
            <div class="mt-3">
              <input type="checkbox" required /> By clicking, you agree to
              Suppermartplus <Link to="/Terms"> Terms</Link> &{" "}
              <Link to="/Privacypolicy">Privacy Policy⁠</Link>
            </div>
            {/* this is a loading from boostrap */}
            <div class="field">
              {loading ? (
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Accountis creating...
                </Button>
              ) : (
                <input type="submit" value="Signup"></input>
              )}
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
