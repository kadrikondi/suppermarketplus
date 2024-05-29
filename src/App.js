import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Headers from "./components/layout/Headers";
import Footer from "./components/layout/Footer";
import Approute from "./route";
import Homepageheader from "./components/layout/Userpageheader";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Headers} />
        <Route component={Approute} />
        <Route component={Footer} />
      </Router>
    </div>
  );
}

export default App;
