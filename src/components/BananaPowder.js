import React from 'react'
import Card from './Card';
function BananaPowder() {
  const productsData =[
        {
        title: "Banana Powder",
        // img: Banana,
        text: "We manufacture & supply Banana Powder / Green Banana Powder / Unripe Banana powder in large volume for Food Industries, Baby Foods, Pharma Sector & Bakery Industries. It is manufactured by Hot air drying in a dryer and is a very nutritious fruit"
      },
      {
        title: "Green Banana Powder",
        // img: GreenB,
        text: "We manufacture & supply Banana Powder / Green Banana Powder / Unripe Banana powder in large volume for Food Industries, Baby Foods, Pharma Sector & Bakery Industries. It is manufactured by Hot air drying in a dryer and is a very nutritious fruit"
      },
      {
        title: "Unripe Banana Powder",
        // img: Unripe,
        text: "We manufacture & supply Banana Powder / Green Banana Powder / Unripe Banana powder in large volume for Food Industries, Baby Foods, Pharma Sector & Bakery Industries. It is manufactured by Hot air drying in a dryer and is a very nutritious fruit"
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
    <div className="container services">
    <h2 className="main-title text-center" style={{marginTop:'10rem'}}>BANANA POWDER</h2>
    <div className="card-cover">
      <div className="col-md-12 ">
        {generateProductCards()}
      </div>
    </div>
  </div>
  )
}

export default BananaPowder