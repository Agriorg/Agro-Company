import React from 'react';

import { Link } from 'react-scroll';
import image from "../img/Image.png";
import design from "../img/Group 20.png"
import bg from "../img/Group 22.png"
function Header() {

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
        {/* <img src={design} className='design1' /> */}
        <img src={bg} alt="Farmer" className='farmerimg' />
      </div>
    </div>
  );
}

export default Header;

