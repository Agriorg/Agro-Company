
// import {motion, AnimationPresence} from "framer-motion";
import React from "react";
// import Card from "./Card";
import MCard from "./mainCard";
import { useNavigate } from "react-router-dom";
// import Albu from "../img/Albumen.png"
// import Banana from "../img/Banana.jpg"
// import DeOnion from "../img/DeOnion.jpg"
// import DeRed from "../img/DeRedO.jpg"
// import EggYolk from "../img/EggYolk.jpg"
// import GreenB from "../img/GreenB.jpg"
// import OnionO from "../img/OnionOil.jpg"
// import Unripe from "../img/Unripe.jpg"
// import Whiteo from "../img/WhiteOnion.webp"
// import WholeE from "../img/WholeEgg.jpg"
import ban from "../img/bananaa.png"
import on from "../img/onion.png"
import egg from "../img/egg.png"
function Services() {
  const navigate = useNavigate();
  const productsData = [
    {
      title: "Egg Powder",
      img: egg,
      // text: "Egg Albumen powder is specially developed for use in curing, delicatessen, preserves, pasta, batter mixes, fish products (surimi), ham and sausage industries…",
      route: '/egg-powder',
    },
    {
      title: "Banana Powder",
      img: ban,
      // text: "This powder is developed for use in bakery products (doughnuts), pastry making products, noodles, convenience foods/read meals, glazing, delicatessen, desserts, ice cream, pasta, mayonnaise and dressings…",
      route:'/banana-powder',
    },
    {
      title: "Onion Powder/Oil",
      img: on,
      // text: "Egg Albumen powder is specially developed for use in curing, delicatessen, preserves, pasta, batter mixes, fish products (surimi), ham and sausage industries…",
      route:'/onion-powder',
    },
  ];
  
  const handleCardClick = (route) => {
    navigate(route);
  };


  // const generateProductCards = () => {
  //   const rows = [];
  //   for (let i = 0; i < productsData.length; i += 3) {
  //     const row = (
  //       <div key={i / 3} className="row">
  //         {productsData.slice(i, i + 3).map((product, index) => (
  //           <div key={index} className=" col-md-4 mb-2">
  //             <Card title={product.title} img={product.img} text={product.text} route={product.route} />
  //           </div>
  //         ))}
  //       </div>
  //     );
  //     rows.push(row);
  //   }
  //   return rows;
  // };
  // const generateProductCards = () => {
  //   return productsData.map((product, index) => (
  //     <div className="row">

  //     <div key={index} className="col-md-4 mb-2" onClick={() => handleCardClick(product.route)}>
  //       <Card title={product.title} img={product.img} text={product.text} route={product.route} />
  //     </div>
  //     </div>
  //   ));
  // };
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
    <div className="container services">
      <h2 className="main-title text-center">OUR PRODUCTS</h2>
      <div className="bg-img">     
      <div className="card-cover">
        <div className="col-md-12 ">
          {generateProductCards()}
        </div>
      </div>
       </div>
    </div>
  );
}

export default Services;


