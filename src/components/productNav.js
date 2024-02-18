import { Link } from "react-router-dom";
import React from 'react'
import logo from "../img/logo.png"
function ProductNav() {
    function navigateToHomepage() {
        window.location.href = "/"; // Redirect to homepage
      }
      function openBar() {
        const bar = document.querySelector(".bar");
    
        bar.classList.toggle("opened");
      }
  return (
    <nav className="navbar">
    <div className="container">
      <div className="row" style={{height:'4rem'}}>
        <Link to='/'>
        <img src={logo} className="logoimg" />
        </Link>
        <ul className="bar">
          <li>
            <Link to="/" className="nav-link" onClick={openBar}>Home</Link>
          </li>
        </ul>
        <div className="button"  onClick={openBar}>
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default ProductNav;
