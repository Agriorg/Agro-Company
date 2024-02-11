import React from 'react'
import fssai from "../img/fssai.png"
import apeda from "../img/apeda.png"
import spices from "../img/spices.png"
import certification from "../img/certification.png"
function Certificate() {
  return (
    <div className='container' style={{marginTop:'90px'}}>
        <div className='main-title text-center  certi '>
          <img src={certification} className='certilogo' />
          <h2 className='main-title text-center' style={{fontSize:'28px'}}>Certifications</h2>
            <div className='certiimg'>
        <img src={fssai} alt='fssai-logo' className='cimg' />
        <img src={apeda} alt='apeda-logo' className='cimg' />
        <img src={spices} alt='spices-india-logo' className='cimg'/>
            </div>
        </div>
    </div>
  )
}


export default Certificate



