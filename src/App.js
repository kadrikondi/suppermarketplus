import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Approute from "./route";
import About from "./components/pages/About";
import Signin from "./components/pages/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Header} />
        <Route component={Approute} />
        <Route component={Footer} />
        <Route component={About} />
        <Route component={Signin} />
      </Router>
    </div>
  );
}

export default App;
