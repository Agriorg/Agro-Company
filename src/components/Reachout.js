import React from 'react'
import { useNavigate } from 'react-router-dom'
import contact from "../img/email.png"
function Reachout() {
  return (
    <div className='container enquiry'>
        {/* <h2 className='main-title text-center'>Enquiry</h2> */}
        <div class="sub-container">
        <div className='reach' >
            <div className='col-md-12' style={{margin:'10px 0',padding:'10px'}}>
                <img src={contact} style={{height:'80px',marginTop:'10px'}} />
            </div>
            <div className='col-md-12'>
                {/* <h2 style={{fontWeight:'500'}}>Enquiry</h2> */}
                <a href='/contact' style={{fontWeight:'500',textDecoration:'none',fontSize:'18px'}}>Enquiry</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Reachout