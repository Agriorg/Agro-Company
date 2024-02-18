import React from 'react'
import Card from './Card';
import banana from "../img/banana.png"
import unripe from "../img/unripe.png"
import greeenBanana from "../img/gb.png"
function BananaPowder() {
  const productsData =[
        {
        title: "Banana Powder",
        img: banana,
        text:'Transform your crops with the goodness of ripe bananas. Our Premium Banana Powder, sourced from the finest bananas, is a natural and nutrient-packed solution for healthier, thriving plants. Use it as a fertilizer or soil conditioner to promote growth. Elevate your agriculture game with simplicity and sustainability. Order now for a farm-to-jar experience! 🌱🍌',
      },
      {
        title: "Green Banana Powder",
        img: greeenBanana,
        text: 'Fuel your well-being with our Green Banana Powder - a gluten-free, nutrient-packed superfood bursting with vitamins and minerals. Versatile, sustainably sourced, and conveniently packaged, it is the perfect addition to elevate your meals. Enhance your health effortlessly – order now!'
      },
      {
        title: "Unripe Banana Powder",
        img: unripe,
        text: "Unleash natural growth potential with our Unripe Banana Powder! Packed with potassium, it boosts plant growth, enhances soil fertility, and is versatile for all crops. Easy, chemical-free nourishment for a bountiful harvest!"
      },
  ]
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
    <div className="container services product">
    <h2 className="main-title text-center" style={{marginTop:'10rem',fontSize:'24px',fontWeight:'500'}}>BANANA POWDER</h2>
    <div className="card-cover">
      <div className="col-md-12 ">
        {generateProductCards()}
      </div>
    </div>
  </div>
  )
}

export default BananaPowder