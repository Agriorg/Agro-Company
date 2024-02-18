import React from 'react'
import mail from "../img/mark_email_unread.png"
import { useNavigate } from 'react-router-dom'
function Reachout() {
  const navigate = useNavigate();
  const handleButtonClick = () =>{
    navigate('/contact')
  }
  return (
    <div className='container enquiry'>
      <img src={mail}  className='reachimg'/>
      <div className="button-container" >
        <button className="reachout-button" onClick={handleButtonClick}>Reach Out To Us</button>
      </div>
    </div>
  )
}

export default Reachout


