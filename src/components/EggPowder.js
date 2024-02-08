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
      text: "Introducing our premium Whole Egg Powder – the perfect solution for hassle-free and nutritious egg preparation! Sourced from the finest quality eggs, our Whole Egg Powder is a versatile and convenient addition to your kitchen, ensuring you have the goodness of fresh eggs at your fingertips, anytime, anywhere.",
    },
    {
      title: "Egg Yolk Powder",
      img: eggYolk,
      text: "Introducing our high-quality Egg Yolk Powder – the perfect solution for all your poultry needs! Sourced from fresh, premium-quality eggs, our Egg Yolk Powder is a convenient and versatile addition to your poultry products.",
    },
    {
      title: "Albumen Powder",
      img: Albumen,
      text: " Introducing our premium Albumen Powder – the ideal solution for poultry enthusiasts seeking top-notch nutrition for their feathered companions. Sourced from high-quality egg whites, our Albumen Powder is a protein-packed powerhouse designed to support the health and vitality of your flock.",
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
      <h2 className="main-title text-center" style={{marginTop:'10rem',fontSize:'24px',fontWeight:'500'}}>EGG POWDER</h2>
      <div className="card-cover">
        <div className="col-md-12 ">
          {generateProductCards()}
        </div>
      </div>
    </div>
  )
}

export default EggPowder