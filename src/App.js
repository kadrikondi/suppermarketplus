import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Approute from "./route";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Header} />
        <Route component={Approute} />
        <Route component={Footer} />
      </Router>
    </div>
  );
}
home, about, contact, storedeatail, userprofile, createstore;
export default App;