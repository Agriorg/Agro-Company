// function Header() {
//   return (
//     <header>
//       {/* <video src="./video.mp4" loop autoPlay muted></video>
//       <h1>Open Source Website</h1>
//       <div className="row">
//         <button className="btn" style={{ cursor: "pointer" }}>
//           Sign Up
//         </button>

//         <button className="btn" style={{ cursor: "pointer" }}>
//           Log in
//         </button>
//       </div> */}

//       <div className="headerbg"></div>
//     </header>
//   );
// }
// export default Header;
import albu from "../img/Albumen.png"
import ban from "../img/Banana.jpg"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Header() {
  return (
    <header>
      {/* Your video and h1 code */}
      
      <Carousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        interval={5000}
        transitionTime={500}
        dynamicHeight
        className="carousel"
      >
        <div>
          <img src={albu} alt="Slide 1" />
        </div>
        <div>
          <img src={albu} alt="Slide 2" />
        </div>
        {/* Add more slides as needed */}
      </Carousel>

      {/* <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>
        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
      </div> */}

      <div className="headerbg"></div>
    </header>
  );
}

export default Header;
