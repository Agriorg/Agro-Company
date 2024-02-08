import right from "../img/right.png"
import { useEffect,useState,useRef } from "react";
// import right from "../img/right.png"
// // import about from "../img/veg.png";
// import { useEffect, useRef, useState } from "react";
// // import farm from "../img/farmland.jpg"
// function About() {
//   const aboutRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const aboutElement = aboutRef.current;

//     const handleScroll = () => {
//       const top = aboutElement.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;
//       setIsVisible(top < windowHeight);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className="container about"  >
//         <div className="row">
//           <div className="col-md-6">
//             <div className='customdiv' >
//               <h2 className="main-title text-center about-h2">
//                 <u style={{}}>About Us</u>
//                 <p style={{fontSize:'15px', padding:'15px',fontWeight:'400'}}>Agri Earth Exports PVT LTD connects rural Indian farmers directly to consumers, eliminating middlemen exploitation. 
//                   We prioritize top-quality agriculture products, adhering to global standards. 
//                   Founded in 2023, we operate from Maharashtra, leveraging expertise spanning over five decades in agriculture technology. 
//                   Our commitment to maintaining robust supplier relationships ensures uncompromising quality. 
//                   With stringent quality checks from farm to final product, we deliver excellence in every variant.</p>
//               </h2>
//               {/* <button className="btn">Know More</button> */}
//               <div style={{display:'flex', alignItems:'center', height:'25px',marginBottom:'5px',cursor:'pointer'}}>
//             <a style={{display:'flex',alignItems:'center',paddingBottom:'30px'}}>Learn More
//               <img src={right}  style={{height:'15px' ,marginLeft:'6px'}} />
//             </a>
//             </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About;

              {/* <ul   className ={`${isVisible ?  'fade-in' : ''}`}   ref={aboutRef}>
                <li>
                  <b>Market-Driven Innovation: </b>We innovate by listening
                  to market needs, ensuring constant improvement.
                </li>
                <li>
                  <b>Quality without Compromise: </b>Our products are the
                  result of unwavering commitment to quality at every step of
                  the agricultural process.
                </li>
                <li>
                  <b>Farmer Empowerment: </b>We support farmers with soil
                  testing, crop guidance, and sustainable practices for optimal
                  yields.
                </li>
                <li>
                  <b>Continuous Quality Monitoring: </b>We maintain high
                  standards by monitoring fruit quality throughout the growing
                  season.
                </li>
                <li>
                  <b>Integrity in Agriculture: </b>Quality begins with our
                  rigorous agricultural processes, ensuring only the best goes
                  into our products.
                </li>
                <li>
                  <b>Environmental Awareness: </b>We keep farmers informed
                  with government weather forecasts to prepare for climate
                  change.
                </li>
              </ul> */}






function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const aboutElement = aboutRef.current;

    const handleScroll = () => {
      const top = aboutElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(top < windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container about">
        <div className="row">
          <div className="col-md-6">
            <div className="customdiv">
              <h2 className="main-title text-center about-h2">
                <u>About Us</u>
                <p style={{ fontSize: "15px", padding: "15px", fontWeight: "400" }}>
                  Agri Earth Exports PVT LTD connects rural Indian farmers directly to consumers, eliminating middlemen exploitation. We prioritize top-quality agriculture products, adhering to global standards. Founded in 2023, we operate from Maharashtra, leveraging expertise spanning over five decades in agriculture technology. Our commitment to maintaining robust supplier relationships ensures uncompromising quality. With stringent quality checks from farm to final product, we deliver excellence in every variant.
                </p>
              </h2>
              <div style={{ display: "flex", alignItems: "center", height: "25px", marginBottom: "5px", cursor: "pointer" }}>
                <a href="/about" style={{ display: "flex", alignItems: "center", paddingBottom: "30px", textDecoration: "none" }}>Learn More
                  <img src={right} style={{ height: "15px", marginLeft: "6px" }} alt="Right Arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
