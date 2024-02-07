import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductNav from "./components/productNav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BananaPowder from "./components/BananaPowder";
import EggPowder from "./components/EggPowder"
import OnionPowder from "./components/OnionPowder"
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/egg-powder" element={<EggDetail />} />
      <Route path="/banana-powder" element={<BananaDetail />} />
      <Route path="/onion-powder" element={<OnionDetail />} />
      {/* Add more routes as needed */}
    </Routes>
    {/* <Footer/> */}
  </Router>
    // <>
    //   <Navbar />
    //   <Header />
    //   <Main />
    //   <Footer />
    // </>
  );
}
const Home = () => (
  <>
    <Navbar />
    <Header />
    <Main />
    <Footer />
  </>
);
const EggDetail = () => (
  <>
    <ProductNav/>
    <EggPowder/>
    <Footer />
  </>
);
const BananaDetail = () =>(
  <>
  <ProductNav/>
  <BananaPowder/>
  <Footer/>
  </>
)
const OnionDetail =() =>(
  <>
  <ProductNav/>
  <OnionPowder/>
  <Footer/>
  </>
)
export default App;
