
// import {motion, AnimationPresence} from "framer-motion";
import React from "react";
// import Card from "./Card";
import MCard from "./mainCard";
import { useNavigate } from "react-router-dom";
import egg from "../img/nest.png"
import on from "../img/onion.png"
import ban from "../img/bananas.png"
function Services() {
  const navigate = useNavigate();
  const productsData = [
    {
      title: "Onion Powder",
      img: on,
      text: "Agri Earth Exports offers top-quality onion powder: convenient, flavorful, enhances any dish effortlessly.",
      route:'/onion-powder',
    },
    {
      title: "Banana Powder",
      img: ban,
      text: "Elevate your menu with our premium banana powder—a versatile ingredient for culinary innovation.",
      route:'/banana-powder',
    },
    {
      title: "Egg Powder",
      img: egg,
      text: "Explore superior egg powder: a convenient, nutritious addition for cooking and baking adventures.",
      route: '/egg-powder',
    },
  ];
  
  const handleCardClick = (route) => {
    navigate(route);
  };

  const generateProductCards = () => {
    return (
      <div className="row">
        {productsData.map((product, index) => (
          <div key={index} className="col-md-4 mb-2" onClick={() => handleCardClick(product.route)}>

            <MCard title={product.title} img={product.img} text={product.text} route={product.route} />
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <div className="container services" style={{paddingTop:'120px'}}>
      <h2 className="main-title text-center" >OUR PRODUCTS</h2>
      {/* <div className="bg-img">      */}
      <div className="card-cover">
        <div className="col-md-12 ">
          {generateProductCards()}
        </div>
      {/* </div> */}
       </div>
    </div>
  );
}

export default Services;


