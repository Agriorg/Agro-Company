import React from 'react'
import best from "../img/best-product.png"
import standard from "../img/standard.png"
import relation from "../img/friendship.png"
import WCard from './WhyCard'
function Why() {
  const WhyData = [
    {
      title:'bbkb',
      img: best,
      text: 'Highest quality standards even at source level',
    },
    {
      title:'bkjk',
      img: standard,
      text: 'We follow International standards in processing',
    },
    {
      title:'hljh',
      img: relation,
      text: 'kjkj',
    },
  ]
  const generateWhyCards = () => {
    return (
      <div className="row">
        {WhyData.map((why, index) => (
          <div key={index} className="col-md-4 mb-2" >

            <WCard title={why.title} img={why.img} text={why.text}  />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className='container why'>
      <h2 className='main-title text-center'>Why Us?</h2>
      <div className='card-cover'>
        <div className='col-md-12'>
          {generateWhyCards()}
        </div>
      </div>
    </div>
  )
}

export default Why