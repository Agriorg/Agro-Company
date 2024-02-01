import React from 'react'
import Card from './Card'
import eggYolk from "../img/eggYolk.png"
import Albumen from "../img/Albumen.png"
import wholeEgg from "../img/wholeegg.png"
function EggPowder() {
  const productsData = [
    {
      title: "Whole Egg Powder",
      img: wholeEgg,
      text: "Egg Albumen powder is specially developed for use in curing, delicatessen, preserves, pasta, batter mixes, fish products (surimi), ham and sausage industries…",
    },
    {
      title: "Egg Yolk Powder",
      img: eggYolk,
      text: "This powder is developed for use in bakery products (doughnuts), pastry making products, noodles, convenience foods/read meals, glazing, delicatessen, desserts, ice cream, pasta, mayonnaise and dressings…",
    },
    {
      title: "Albumen Powder",
      img: Albumen,
      text: "Egg Albumen powder is specially developed for use in curing, delicatessen, preserves, pasta, batter mixes, fish products (surimi), ham and sausage industries…",
    },
  ];
  const generateProductCards = () => {
    return (
      <div className="row">
        {productsData.map((product, index) => (
          <div key={index} className="col-md-4 mb-2" >
            <Card title={product.title} img={product.img} text={product.text}  />
          </div>
        ))}
      </div>
    );
  };

  return (
        <div className="container services">
      <h2 className="main-title text-center" style={{marginTop:'10rem'}}>EGG POWDER</h2>
      <div className="card-cover">
        <div className="col-md-12 ">
          {generateProductCards()}
        </div>
      </div>
    </div>
  )
}

export default EggPowder