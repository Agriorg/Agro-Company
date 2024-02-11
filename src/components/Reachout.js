import React from 'react'
import reachout from "../img/reachout.png"
import { useNavigate } from 'react-router-dom'
function Reachout() {
  const navigate = useNavigate();
  const handleButtonClick = () =>{
    navigate('/contact')
  }
  return (
    <div className='container enquiry'>
      <img src={reachout}  className='reachimg'/>
      <div className="button-container" >
        <button className="reachout-button" onClick={handleButtonClick}>Reach Out To Us</button>
      </div>
    </div>
  )
}

export default Reachout


{/* <div class="sub-container">
</div> */}
{/* <div className='reach' >

</div> */}

{/* <div className='col-md-12' style={{margin:'10px 0',padding:'10px'}}>
  <Link to='/contact'>
  </Link>
</div>
<div className='col-md-12'>
    <a href='/contact' style={{fontWeight:'500',textDecoration:'none',fontSize:'18px',color:'#e8e1d9'}}>Reach out to us</a>
</div> */}