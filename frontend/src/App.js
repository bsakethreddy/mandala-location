import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GetLocation from "./CurrentLocation/GetLocation";
import GeoFence from "./CurrentLocation/GeoFencing";

function App() {
  return (
    <div className="Container">
      Hi
      {/* <Route exact path="/" component={GetLocation} /> */}
      <Route exact path="/" component={GeoFence} />
    </div>
  );
}

export default App;
