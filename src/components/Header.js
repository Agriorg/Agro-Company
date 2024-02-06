// // // function Header() {
// // //   return (
// // //     <header>
// // //       {/* <video src="./video.mp4" loop autoPlay muted></video>
// // //       <h1>Open Source Website</h1>
// // //       <div className="row">
// // //         <button className="btn" style={{ cursor: "pointer" }}>
// // //           Sign Up
// // //         </button>

// // //         <button className="btn" style={{ cursor: "pointer" }}>
// // //           Log in
// // //         </button>
// // //       </div> */}

// // //       <div className="headerbg"></div>
// // //     </header>
// // //   );
// // // }
// // // export default Header;
// // import albu from "../img/Albumen.png"
// // import ban from "../img/Banana.jpg"
// // import React from 'react';
// // import { Carousel } from 'react-responsive-carousel';
// // import 'react-responsive-carousel/lib/styles/carousel.min.css';

// // function Header() {
// //   const carouselStyle = {
// //     widthidth: '400px', // Adjust the maximum width as needed
// //     height: '400px', // Adjust the maximum height as needed
// //     margin: 'auto', // Center the carousel
// //   };
// //   return (
// //     <header>
// //       {/* Your video and h1 code */}
      
// //       <Carousel
// //         infiniteLoop
// //         autoPlay
// //         showThumbs={false}
// //         interval={5000}
// //         transitionTime={500}
// //         dynamicHeight
// //         className="carousel"
// //         style={carouselStyle}
// //       >
// //         <div>
// //           <img src={albu} alt="Slide 1" />
// //         </div>
// //         <div>
// //           <img src={albu} alt="Slide 2" />
// //         </div>
// //       </Carousel>



// //     </header>
// //   );
// // }

// // export default Header;






// //       {/* <div className="row">
// //       <button className="btn" style={{ cursor: "pointer" }}>
// //           Sign Up
// //         </button>
// //         <button className="btn" style={{ cursor: "pointer" }}>
// //           Log in
// //         </button>
// //       </div> */}
// //         {/* Add more slides as needed */}
// //           {/* <div className="headerbg"></div> */}


// import React from 'react';
// import { motion } from 'framer-motion';
// import poultry from "../img/poultry.avif"
// const Header = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.5 }}
//       className='header'
//     >
//       {/* <h2>Welcome to Our Poultry Farm</h2>
//       <p>
//         Explore our range of fresh and organic poultry products. Our commitment is to provide you with
//         high-quality and healthy options for your culinary needs.
//       </p> */}
//       <motion.img
//         src={poultry} // Replace with your poultry image URL
//         alt="Poultry Farm"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.8 }}
//         transition={{ duration: 0.8 }}
//         style={{height:'100%',top:'20rem',width:'100%'}}
//       />
//     </motion.div>
//   );
// };

// export default Header;




import React from 'react'
import image from "../img/Image.png"
function Header() {
  // const styles = {
  //   imageBox: {
  //     position:'relative',
  //     top:'100px',
  //     height:'80px',
  //     left:'690px',
  //     backgroundColor:'#ffffff',
  //   }
  // }
  return (
    <>
    <div className='header'>

    <div className='headertext'>
      <h1>Discover The Best Agricultural Products</h1>
      <p>Products for your daily Household needs</p>
      <button className='headbtn'>Let's Explore</button>
    </div>
    <div className='headerimg'>
    {/* <h1>hddbfd</h1> */}
    <img src={image} className='farmerimg'  />
    {/* <div style={styles.imageBox}>
    </div> */}
    </div>
    </div>
    </>

  )
}

export default Header;