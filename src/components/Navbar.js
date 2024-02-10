import { Link } from "react-scroll";
import logo from "../img/logo.png"
function Navbar() {
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });
  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row" style={{height:'4rem'}}>
          {/* <h1 className="logo"> */}
            {/* <Link
              spy={true}
              smooth={true}
              duration={1000}
              to='/'
              style={{ cursor: "pointer", color: "#db3716", fontWeight: "700" }}
            > */}
              <img src={logo} alt="logo" className="logoimg" />
              {/* Agri Earth Exports */}
            {/* </Link> */}
          {/* </h1> */}
          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="header"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active-scroll"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Our Product
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="enquiry"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
