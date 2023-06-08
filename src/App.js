import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainTopCarousel from "./components/MainTopCarousel";
import MainPageModels from "./components/MainPageModels";
import ShoppingTools from "./components/ShoppingTools";
import Discover from "./components/Discover";
import MainFooterLinks from "./components/MainFooterLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <div className="App">
      {/* <Tester /> */}

      <MainTopCarousel />
      <MainPageModels />
      <ShoppingTools />
      <Discover />
      <MainFooterLinks />
    </div>
  );
}

export default App;
