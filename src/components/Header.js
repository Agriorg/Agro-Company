import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../img/Image.png";

function Header() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about');
  };

  return (
    <div className='header'>
      <div className='headertext'>
        <h1>Discover The Best Agricultural Products</h1>
        <p>Products for your daily Household needs</p>
        {/* Use onClick to call handleButtonClick */}
        <button className='headbtn' onClick={handleButtonClick}>Let's Explore</button>
      </div>
      <div className='headerimg'>
        <img src={image} alt="Farmer" className='farmerimg' />
      </div>
    </div>
  );
}

export default Header;

