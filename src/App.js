import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainTopCarousel from "./components/MainTopCarousel";
import MainPageModels from "./components/MainPageModels";
import MainFindReserve from "./components/MainFindReserve";

// import ShoppingTools from "./components/ShoppingTools";
// import Discover from "./components/Discover";
import MainFooterLinks from "./components/MainFooterLinks";
// import ZCodeTestArea from "./components/ZCodeTestArea";

function App() {
  return (
    <div className="App">
      <Header />
      <MainTopCarousel />
      <MainPageModels />
      <MainFindReserve />

      {/* <ShoppingTools /> */}
      {/* <Discover /> */}
      <MainFooterLinks />
      {/* <ZCodeTestArea /> */}
    </div>
  );
}

export default App;
