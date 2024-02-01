import React from 'react'
import Card from './Card';
function OnionPowder() {
  const productsData =[
          {
        title: "Dehydrated Onion Powder",
        // img: DeOnion,
        text: "With the customer-focused approach and vast industrial experience, we are occupied in providing a wide assortment of Dehydrated White Onion Powder. We are manufacturers and suppliers of the finest quality of Dehydrated Onion Powder. Dehydrated Onion Powder is largely used in varied food preparations."
      },
      {
        title: "White Onion Powder",
        // img: Whiteo,
        text: "Its characteristics strong flavour when raw makes it great addition on salad. Its sweet flavour when cooked is a key element for meats, poultry, seafood and all kind of side dishes."
      },
      {
        title: "Red Onion Powder",
        // img: DeRed,
        text: "Its characteristics strong flavour when raw makes it great addition on salad. Its sweet flavour when cooked is a key element for meats, poultry, seafood and all kind of side dishes."
      },
      {
        title: "Onion Oil",
        // img: OnionO,
        text: "Onion oil is rich in sulfur which prevents breakage, split ends and thinning of hair. Other nutrients present in onion prevents oxidation of hair. It also maintains the regular pH of the hair, preventing premature greying."
      }
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
    <h2 className="main-title text-center" style={{marginTop:'10rem'}}>ONIONPOWDER</h2>
    <div className="card-cover">
      <div className="col-md-12 ">
        {generateProductCards()}
      </div>
    </div>
  </div>
  )
}

export default OnionPowder