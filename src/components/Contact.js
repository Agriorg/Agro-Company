
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import bg from "../img/formbg.png";
import Footer from "./Footer";
import ProductNav from "./productNav";

function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ypzzj09", "template_0ksj81u", formRef.current, "SHaWvozsjjQqJN68b")
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        formRef.current.reset(); 
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '0px', 
    height:'800px',
    
  };

  const imageStyle = {
    width: '50%', // Adjust as needed
  };

  return (
    <>
      <ProductNav />
      <div className="container contact" style={containerStyle}>
        <div className="contactst" >
          <h2 className="main-title">CONTACT</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="col-md-12">
              <div className="row" style={{width:'90%'}}>
                <div className="col-md-4 mb-1">
                  <input name="from_name" placeholder="Name" className="contact-input" />
                </div>
                <div className="col-md-4 mb-1">
                  <input name="from_email" placeholder="Email" className="contact-input" />
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
                <input className="form-btn" type="submit" value="Send" />
              </div>
            </div>
          </form>
        </div>
        <img src={bg} alt="Background" style={imageStyle} className="mobile-hidden" />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
