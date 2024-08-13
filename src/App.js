import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Info from "./components/info";
import Product from "./components/Product";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Info />
      <Product />
      <Blog />
      <Newsletter />
      <CustomFooter />
    </>
  );
}

export default App;
