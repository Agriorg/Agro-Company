import React from 'react'
import task from "../img/task_alt.png"
import receipt from "../img/receipt_long.png"
import group from "../img/groups.png"
import WCard from './WhyCard'
function Why() {
  const WhyData = [
    {
      title:'bbkb',
      img: task,
      text: 'Highest quality standards even at source level',
    },
    {
      title:'bkjk',
      img: receipt,
      text: 'We follow International standards in processing',
    },
    {
      title:'hljh',
      img: group,
      text: 'We believes in having a healthy and long term relationship with its suppliers ',
    },
  ]
  const generateWhyCards = () => {
    return (
      <div className="wrow" >
        {WhyData.map((why, index) => (
          <div key={index} className="col-md-4 mb-2" >

            <WCard title={why.title} img={why.img} text={why.text}  />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className='  why'>
      <div className='card-cover' style={{backgroundColor:'#12372a', borderRadius:'0'}}>
      <h2 className='main-title text-center' style={{color:'#ffffff'}}>Why Us?</h2>
        <div className='col-md-12'>
          {generateWhyCards()}
        </div>
      </div>
    </div>
  )
}

export default Why