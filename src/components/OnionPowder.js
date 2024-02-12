import React from 'react'
import Card from './Card';
import OnionOil from "../img/OnionOil.png"
import redOnion from "../img/redOnion.png"
import whiteOn from "../img/whiteOnion.png"
import DeOnion from "../img/deOnion.png"
function OnionPowder() {
  const productsData =[
          {
        title: "Dehydrated Onion Powder",
        img: DeOnion,
        text:'A versatile seasoning essential for enhancing the flavors of soups, salads, pizzas, garlic bread, and sandwiches. Sourced from premium-quality onions and meticulously dehydrated, it adds depth and aroma to your culinary creations.',
        // text: "With the customer-focused approach and vast industrial experience, we are occupied in providing a wide assortment of Dehydrated White Onion Powder. We are manufacturers and suppliers of the finest quality of Dehydrated Onion Powder. Dehydrated Onion Powder is largely used in varied food preparations."
      },
      {
        title: "White Onion Powder",
        img: whiteOn,
        text:'Our White Onion powder is packed with antioxidants, it aids in cancer prevention, regulates blood sugar, supports digestion, boosts bone health, fights inflammation, bolsters immunity, enhances sleep, and nurtures a healthy heart.',
        // text: "Its characteristics strong flavour when raw makes it great addition on salad. Its sweet flavour when cooked is a key element for meats, poultry, seafood and all kind of side dishes."
      },
      {
        title: "Red Onion Powder",
        img: redOnion,
        text:'Elevate your culinary creations with our Red Onion Powder. Sourced from the finest red onions, this convenient and versatile powder adds rich flavor without the tears. Perfect for soups, stews, and marinades. Time-saving, long shelf life, and packed with health benefits. Farm-to-table transparency in every sprinkle. Upgrade your dishes with ease!',
        // ext: "Made from finest quality dehydrated Indian pink/red onions. The flavour is slightly stronger and sweeter than regular onion powder, and it is especially good to use in seasoning mixes, dry rubs and dressings.Elevate your culinary creations with our Premium Red Onion Powder. Sourced from the finest red onions, this convenient and versatile powder adds rich flavor without the tears. Perfect for soups, stews, and marinades. Time-saving, long shelf life, and packed with health benefits. Farm-to-table transparency in every sprinkle. Upgrade your dishes with ease!Elevate your culinary creations with our Premium Red Onion Powder. Sourced from the finest red onions, this convenient and versatile powder adds rich flavor without the tears. Perfect for soups, stews, and marinades. Time-saving, long shelf life, and packed with health benefits. Farm-to-table transparency in every sprinkle. Upgrade your dishes with ease!"
      }
  ];
  const generateProductCards = () => {
    const rows = [];
    for (let i = 0; i < productsData.length; i += 3) {
      const row = (
        <div key={i / 3} className="row">
          {productsData.slice(i, i + 3).map((product, index) => (
            <div key={index} className="col-md-4 mb-2">
              <Card title={product.title} img={product.img} text={product.text} />
            </div>
          ))}
        </div>
      );
      rows.push(row);
    }
    return rows;
  };

  return (
    <div className="container services product">
    <h2 className="main-title text-center" style={{marginTop:'10rem',fontSize:'24px',fontWeight:'500'}}>ONION POWDER</h2>
    <div className="card-cover">
      <div className="col-md-12 ">
        {generateProductCards()}
      </div>
    </div>
  </div>
  )
}

export default OnionPowder