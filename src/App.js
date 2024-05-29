import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Approute from "./route";
import Homepageheader from "./components/layout/Homepageheader"

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Homepageheader} />
        <Route component={Approute} />
        <Route component={Footer} />
      </Router>
    </div>
  );
}

export default App;
