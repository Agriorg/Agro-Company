import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import image from "../img/Image.png";

function Header() {
  // const navigate = useNavigate();

  // const handleButtonClick = () => {
  //   navigate('about');
  // };

  return (
    <div className='header'>
      <div className='headertext'>
        <h1>Discover The Best Agricultural Products</h1>
        <p>Straight from Indian Farms</p>
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="headbtn"
        >
          Let's Explore
        </Link>
        {/* <button className='headbtn' onClick={handleButtonClick}>Let's Explore</button> */}
      </div>
      <div className='headerimg'>
        <img src={image} alt="Farmer" className='farmerimg' />
      </div>
    </div>
  );
}

export default Header;

