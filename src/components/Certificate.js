import React from 'react'
import fssai from "../img/fssai.png"
import apeda from "../img/apeda.png"
import spices from "../img/spices.png"
import dot from "../img/Ellipse 11.png"
import line from "../img/Line 2.png"
function Certificate() {
  return (
    <div className='container' style={{marginTop:'90px'}}>
        <div className='main-title text-center  certi '>
          {/* <img src={certification} className='certilogo' /> */}
          <h2 className='main-title text-center' style={{fontSize:'28px'}}>Certifications</h2>
            <div className='certiimg'>
              <img src={dot} className='breaker' />
        <img src={fssai} alt='fssai-logo' className='cimg' />
        <img src={line}  className='breaker'/>
        <img src={apeda} alt='apeda-logo' className='cimg' />
        <img src={line} className='breaker'/>
        <img src={spices} alt='spices-india-logo' className='cimg'/>
        <img src={dot} className='breaker' />
            </div>
        </div>
    </div>
  )
}


export default Certificate



