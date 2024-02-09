// import bg from "../img/formbg.png"
// import Footer from "./Footer";
// import ProductNav from "./productNav";
// function Contact() {
//   const containerStyle = {
//     zIndex: '10',
//     height: '50rem',
//     paddingTop:'150px' // Adjust as needed
//     // outerWidth:'40rem'
//   };

//   return (
// <>
// <ProductNav/>
//     <div className="container contact"  style={containerStyle}>
//       <h2 className="main-title ">CONTACT</h2>
//       <div>
//         <img src={bg} style={{height:'100px'}} />


//       <div className="col-md-12">
//         <div className="row" style={{width:'40%',}}>
//           <div className="col-md-4 mb-1">
//             <input name="name" placeholder="Name" className="contact-input" />
//           </div>

//           <div className="col-md-4 mb-1">
//             <input name="email" placeholder="Email" className="contact-input" />
//           </div>
//           <div className="col-md-4 mb-1">
//             <input
//               name="subject"
//               placeholder="Subject"
//               className="contact-input"
//             />
//           </div>
//         </div>
//       </div>
//       <br />
//       <div className="col-md-12">
//       <textarea
//             name="message"
//             placeholder="Message"
//             className="contact-textarea"
//           />
//       </div>

//       <br></br>
//       <div className="row">
//         <div className="col-md-12">
//           <input className="form-btn" type="submit" value="Send Message" />
//         </div>
//       </div>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }
// export default Contact;



import bg from "../img/formbg.png";
import Footer from "./Footer";
import ProductNav from "./productNav";

function Contact() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '150px', // Adjust as needed
  };

  const imageStyle = {
    width: '50%', // Adjust as needed
  };

  return (
    <>
      <ProductNav />
      <div className="container contact" style={containerStyle}>
        <div style={{ width: '50%' }}>
          <h2 className="main-title">CONTACT</h2>
          <div className="col-md-12">
            <div className="row" style={{width:'90%'}}>
              <div className="col-md-4 mb-1">
                <input name="name" placeholder="Name" className="contact-input" />
              </div>
              <div className="col-md-4 mb-1">
                <input name="email" placeholder="Email" className="contact-input" />
              </div>
              <div className="col-md-4 mb-1">
                <input name="subject" placeholder="Subject" className="contact-input" />
              </div>
            </div>
          </div>
          <br />
          <div className="col-md-12">
            <textarea name="message" placeholder="Message" className="contact-textarea" />
          </div>
          <br />
          <div className="row">
            <div className="col-md-12">
              <input className="form-btn" type="submit" value="Send Message" />
            </div>
          </div>
        </div>
        <img src={bg} alt="Background" style={imageStyle} />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
