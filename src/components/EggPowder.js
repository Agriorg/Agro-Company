import React from 'react'
import Card from './Card'
import ban from "../img/bananaa.png"
import on from "../img/onion.png"
import egg from "../img/egg.png"
function EggPowder() {
  const productsData = [
    {
      title: "Egg Powder",
      img: egg,
      text: "Egg Albumen powder is specially developed for use in curing, delicatessen, preserves, pasta, batter mixes, fish products (surimi), ham and sausage industries…",
      // route: '/egg-powder',
    },
    {
      title: "Banana Powder",
      img: ban,
      text: "This powder is developed for use in bakery products (doughnuts), pastry making products, noodles, convenience foods/read meals, glazing, delicatessen, desserts, ice cream, pasta, mayonnaise and dressings…",
      // route:'/banana-powder',
    },
    {
      title: "Onion Powder/Oil",
      img: on,
      text: "Egg Albumen powder is specially developed for use in curing, delicatessen, preserves, pasta, batter mixes, fish products (surimi), ham and sausage industries…",
      // route:'/onion-powder',
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