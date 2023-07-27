import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainTopCarousel from "./components/MainTopCarousel";
import MainPageModels from "./components/MainPageModels";
import MainFindReserve from "./components/MainFindReserve";

import ShoppingTools from "./components/ShoppingTools";
// import Discover from "./components/Discover";
import MainFooterLinks from "./components/MainFooterLinks";
import ZCodeTestArea from "./components/ZCodeTestArea";
import ImageMainTopCarousel from "./Images/AAAOriginalPorscheUkSite/ImageMainTopCarousel.jpg";
import ImageFindAndReserve from "./Images/AAAOriginalPorscheUkSite/ImageFindAndReserve.jpg";
import ImageMainFooterLinks from "./Images/AAAOriginalPorscheUkSite/ImageMainFooterLinks.jpg";
import ImageShoppingTools from "./Images/AAAOriginalPorscheUkSite/ImageShoppingTools.jpg";
import ImageMainPageModels from "./Images/AAAOriginalPorscheUkSite/ImageMainPageModels.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <MainTopCarousel />
      <MainPageModels />
      <MainFindReserve />

      <ShoppingTools />
      {/* <Discover /> */}
      {/* <MainFooterLinks /> */}
      <ZCodeTestArea />

      <h1
        style={{
          textAlign: "center",
          color: "red",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        Explanation
      </h1>

      <h1 style={{ color: "rgb(00,99,102)" }}>
        Below is how the Porsche homepage looked while I was part way through
        replicating it.
      </h1>
      <h1 style={{ color: "rgb(00,99,102)" }}>
        Their mobile site changed first to something completely different so I
        decided to take computer screenshots.
      </h1>
      <h1 style={{ color: "rgb(00,99,102)" }}>
        15minutes later the site i was referencing had changed too.
      </h1>
      <div className="screenshotsDiv">
        <div>
          <img src={ImageMainTopCarousel} alt="Image of original carousel" />
        </div>
        <div>
          <img src={ImageMainPageModels} alt="Image of original carousel" />
        </div>
        <div>
          <img src={ImageFindAndReserve} alt="Image of original carousel" />
        </div>
        <div>
          <img src={ImageShoppingTools} alt="Image of original carousel" />
        </div>

        <div>
          <img src={ImageMainFooterLinks} alt="Image of original carousel" />
        </div>
      </div>
    </div>
  );
}

export default App;
