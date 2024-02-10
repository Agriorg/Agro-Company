import React from 'react'
import fssai from "../img/fssai.png"
import apeda from "../img/apeda.png"
import spices from "../img/spices.png"
function Certificate() {
  return (
    <div className='container' style={{marginTop:'90px'}}>
        <div className='main-title text-center'>
          <h2 className='main-title text-center'>Certifications</h2>
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