// import { useState } from "react";
// // import Button from "react-bootstrap/Button";
// // import Col from "react-bootstrap/Col";
// // import Form from "react-bootstrap/Form";
// // import InputGroup from "react-bootstrap/InputGroup";
// // import Row from "react-bootstrap/Row";
// // import ReactDOM from "react-dom";
// // import { faGoogle } from "@fortawesome/free-solid-svg-icons";
// // import Styled from "./Signin.css";
// // import Signup from "./Signup";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/images/logoblacknobg.png";
// import { useHistory } from "react-router-dom";

// function Signin() {
//   const [validated, setValidated] = useState(false);
//   const history = useHistory();

//   const handleSignin = async (event) => {
//     event.preventDefault();
//     try {
//       let userid = "232";

//       if (userid) {
//         localStorage.setItem("userid", userid);
//         await history.push("/home");
//       }
//     } catch (error) {
//       console.error("Signup failed:", error);
//     }
//   };

//   return (
//     <>
//       <div
//         style={{ marginLeft: "500px", alignItems: "center" }}
//         className="mt-5"
//       >
//         <div class="wrapper">
//           <div class="title card-header py-2">
//             {" "}
//             <img src={Logo} alt="" style={{ width: "160px" }} />
//             <h5 className="card-title">Sign-in</h5>
//           </div>

//           <form onSubmit={handleSignin}>
//             <div class="field">
//               <input type="email" required></input>
//               <label>Email Address</label>
//             </div>

//             <div class="field">
//               <input type="password" required></input>
//               <label>Password</label>
//             </div>

//             <div class="field">
//               <input type="submit" value="Login"></input>
//             </div>
//             <div class="signup-link">
//               Not a member?{" "}
//               <Link to="/Signup">
//                 <a href="#">Signup now</a>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Signin;

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

      if (response.data.message === "Login successful") {
        localStorage.setItem("userid", response.data.user.id);
        localStorage.setItem("token", response.data.token);

        history.push("/home");
      }
    } catch (error) {
      // this is the  error that will show when the login is incorrect 
      console.error("Signin failed:", error);
      setErrorMessage("Signin failed. Please check your credentials.");
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
