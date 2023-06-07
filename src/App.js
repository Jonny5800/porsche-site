import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainTopCarousel from "./components/MainTopCarousel";
import MainPageModels from "./components/MainPageModels";
import ShoppingTools from "./components/ShoppingTools";
function App() {
  return (
    <div className="App">
      {/* <Tester /> */}

      <MainTopCarousel />
      <MainPageModels />
      <ShoppingTools />
    </div>
  );
}

export default App;
