import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/images/logoblacknobg.png";
import "./Signin.css"; // Ensure the CSS import is correct

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  // this is a variable handling something below, the handleEmailChange, which is what i will use to call the function in my main code form function
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log(response.data);

      if (response.data.message === "Login successful") {
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user.username);
        history.push("/home");
      }

      setErrorMessage(response.data.message);
    } catch (error) {
      // this is the  error that will show when the login is incorrect
      console.error("Signin failed:", error);
      setErrorMessage("Signin failed !" + error.response.data.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 10000); // Clear error message after 10 seconds
    }
  };

  return (
    <>
      <div
        style={{ marginLeft: "500px", alignItems: "center" }}
        className="mt-5"
      >
        <div className="wrapper">
          <div className="title card-header py-2">
            <img src={Logo} alt="" style={{ width: "160px" }} />
            <h5 className="card-title">Sign-in</h5>
          </div>

          <form onSubmit={handleSignin}>
            <div className="field">
              <input
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <label>Email Address</label>
            </div>

            <div className="field">
              <input
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <label>Password</label>
            </div>
            {/* this is handling an error pop when they try to sign in and we don't have them as a user to bring an err alert  */}
            {/* the error alert write up that will show is from our catch (error) above */}
            {errorMessage && (
              <div className="error-message mt-5 alert alert-danger">
                {errorMessage}
              </div>
            )}

            <div className="field">
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <Link to="/Signup">Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
