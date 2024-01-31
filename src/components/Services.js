
// import {motion, AnimationPresence} from "framer-motion";
import React from "react";
import Card from "./Card";
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
      text: "Egg Albumen powder is specially developed for use in curing, delicatessen, preserves, pasta, batter mixes, fish products (surimi), ham and sausage industries…",
      route: '/egg-powder',
    },
    {
      title: "Banana Powder",
      img: ban,
      text: "This powder is developed for use in bakery products (doughnuts), pastry making products, noodles, convenience foods/read meals, glazing, delicatessen, desserts, ice cream, pasta, mayonnaise and dressings…",
      route:'/banana-powder',
    },
    {
      title: "Onion Powder/Oil",
      img: on,
      text: "Egg Albumen powder is specially developed for use in curing, delicatessen, preserves, pasta, batter mixes, fish products (surimi), ham and sausage industries…",
      route:'/onion-powder',
    },
    // {
    //     title: "Banana Powder",
    //     img: Banana,
    //     text: "We manufacture & supply Banana Powder / Green Banana Powder / Unripe Banana powder in large volume for Food Industries, Baby Foods, Pharma Sector & Bakery Industries. It is manufactured by Hot air drying in a dryer and is a very nutritious fruit"
    //   },
    //   {
    //     title: "Green Banana Powder",
    //     img: GreenB,
    //     text: "We manufacture & supply Banana Powder / Green Banana Powder / Unripe Banana powder in large volume for Food Industries, Baby Foods, Pharma Sector & Bakery Industries. It is manufactured by Hot air drying in a dryer and is a very nutritious fruit"
    //   },
    //   {
    //     title: "Unripe Banana Powder",
    //     img: Unripe,
    //     text: "We manufacture & supply Banana Powder / Green Banana Powder / Unripe Banana powder in large volume for Food Industries, Baby Foods, Pharma Sector & Bakery Industries. It is manufactured by Hot air drying in a dryer and is a very nutritious fruit"
    //   },
    //   {
    //     title: "Dehydrated Onion Powder",
    //     img: DeOnion,
    //     text: "With the customer-focused approach and vast industrial experience, we are occupied in providing a wide assortment of Dehydrated White Onion Powder. We are manufacturers and suppliers of the finest quality of Dehydrated Onion Powder. Dehydrated Onion Powder is largely used in varied food preparations."
    //   },
    //   {
    //     title: "White Onion Powder",
    //     img: Whiteo,
    //     text: "Its characteristics strong flavour when raw makes it great addition on salad. Its sweet flavour when cooked is a key element for meats, poultry, seafood and all kind of side dishes."
    //   },
    //   {
    //     title: "Red Onion Powder",
    //     img: DeRed,
    //     text: "Its characteristics strong flavour when raw makes it great addition on salad. Its sweet flavour when cooked is a key element for meats, poultry, seafood and all kind of side dishes."
    //   },
    //   {
    //     title: "Onion Oil",
    //     img: OnionO,
    //     text: "Onion oil is rich in sulfur which prevents breakage, split ends and thinning of hair. Other nutrients present in onion prevents oxidation of hair. It also maintains the regular pH of the hair, preventing premature greying."
    //   }
    // Add more product data as needed
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
            <Card title={product.title} img={product.img} text={product.text} route={product.route} />
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <div className="container services">
      <h2 className="main-title text-center">OUR PRODUCTS</h2>
      <div className="card-cover">
        <div className="col-md-12 ">
          {generateProductCards()}
        </div>
      </div>
    </div>
  );
}

export default Services;


