// // // import about from "../img/about.avif"
// // import about from "../img/veg.png"
// // function About() {
// //   return (
// //     <>
// //       <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

// //       <div className="container about">
// //         <div className="row"  >
// //           <div className="col-md-6 text-center" >
// //             <img alt="about" src={about} className="img-fluid" style={{borderRadius:"25px"}} />
// //           </div>
// //           <div className="col-md-6">
// //             <div  className='customdiv' >

// //             <h2 className="main-title text-center about-h2"><u style={{}}>What we Do?</u></h2>
// //             {/* <p className="main-p">
// //             At Agri Earth Exports Pvt Ltd, we're revolutionizing the agriculture industry by connecting rural Indian farmers directly with consumers. 
// //             Established in 2023, we ensure top-quality agricultural products while minimizing middlemen exploitation. Backed by over five decades of expertise, 
// //             we uphold stringent quality standards set by FSSAI and global regulations. From Maharashtra's finest produce to cutting-edge technology, 
// //             we're committed to excellence and customer satisfaction. Join us in experiencing the best in agricultural innovation and integrity.
// //             </p> */}
// //             <ul>
// //              <li><b>Market-Driven Innovation: </b>We innovate by listening to market needs, ensuring constant improvement.</li>
// //              <li><b>Quality without Compromise: </b>Our products are the result of unwavering commitment to quality at every step of the agricultural process.</li>
// //              <li><b>Farmer Empowerment: </b>We support farmers with soil testing, crop guidance, and sustainable practices for optimal yields.</li>
// //              <li><b>Continuous Quality Monitoring: </b>We maintain high standards by monitoring fruit quality throughout the growing season.</li>
// //              <li><b>Integrity in Agriculture: </b>Quality begins with our rigorous agricultural processes, ensuring only the best goes into our products.</li>
// //              <li><b>Environmental Awareness: </b>We keep farmers informed with government weather forecasts to prepare for climate change.</li>
// //             </ul>
// //             <button>Know More </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// // export default About;



// import about from "../img/veg.png";
// import { useEffect, useRef } from "react";

// function About() {
//   const aboutRef = useRef(null);

//   useEffect(() => {
//     const aboutElement = aboutRef.current;
//     aboutElement.classList.add("fade-in");
//   }, []);

//   return (
//     <>
//       <div
//         style={{ marginTop: "15rem", width: "100%", height: "10px" }}
//         className="about-scroll"
//       ></div>

//       <div className="container about">
//         <div className="row">
//           <div className="col-md-6 text-center">
//             <img
//               alt="about"
//               src={about}
//               className="img-fluid"
//               style={{ borderRadius: "25px" }}
//             />
//           </div>
//           <div className="col-md-6">
//             <div className="customdiv" >
//               <h2 className="main-title text-center about-h2">
//                 <u style={{}}>What we Do?</u>
//               </h2>
//               <ul ref={aboutRef}>
//                 <li>
//                   <b>Market-Driven Innovation: </b>We innovate by listening
//                   to market needs, ensuring constant improvement.
//                 </li>
//                 <li>
//                   <b>Quality without Compromise: </b>Our products are the
//                   result of unwavering commitment to quality at every step of
//                   the agricultural process.
//                 </li>
//                 <li>
//                   <b>Farmer Empowerment: </b>We support farmers with soil
//                   testing, crop guidance, and sustainable practices for optimal
//                   yields.
//                 </li>
//                 <li>
//                   <b>Continuous Quality Monitoring: </b>We maintain high
//                   standards by monitoring fruit quality throughout the growing
//                   season.
//                 </li>
//                 <li>
//                   <b>Integrity in Agriculture: </b>Quality begins with our
//                   rigorous agricultural processes, ensuring only the best goes
//                   into our products.
//                 </li>
//                 <li>
//                   <b>Environmental Awareness: </b>We keep farmers informed
//                   with government weather forecasts to prepare for climate
//                   change.
//                 </li>
//               </ul>
//               <button>Know More</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About;




import about from "../img/veg.png";
import { useEffect, useRef, useState } from "react";

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
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about" >
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              alt="about"
              src={about}
              className="img-fluid"
              style={{ borderRadius: "25px" }}
            />
          </div>
          <div className="col-md-6">
            <div className='customdiv' >
              <h2 className="main-title text-center about-h2">
                <u style={{}}>What we Do?</u>
              </h2>
              <ul   className ={`${isVisible ?  'fade-in' : ''}`}   ref={aboutRef}>
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
              </ul>
              <button>Know More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
