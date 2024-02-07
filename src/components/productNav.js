import { Link } from "react-router-dom";
import React from 'react'

function ProductNav() {
    function navigateToHomepage() {
        window.location.href = "/"; // Redirect to homepage
      }
  return (
    <nav className="navbar">
    <div className="container">
      <div className="row">
        <h1 className="logo">
          <Link to="/" style={{ cursor: "pointer", color: "#db3716", fontWeight: "700" }}>
            Agro Company
          </Link>
        </h1>
        <ul className="bar">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
        </ul>
        <div className="button" onClick={navigateToHomepage}>
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



{/* <li>
  <Link to="/services" className="nav-link">Our Product</Link>
</li>
<li>
  <Link to="/about" className="nav-link">About</Link>
</li>
<li>
  <Link to="/contact" className="nav-link">Contact</Link>
</li> */}