import bg from "../img/formbg.png"
function Contact() {
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'fit-contentr', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    zIndex: '10',
    height: '50rem', // Adjust as needed
    // outerWidth:'40rem'
  };

  return (
    // <div>

    // <img src={bg} style={{zIndex:'10', height:'10rem'}} />
    <div className="container contact"  style={containerStyle}>
      <h2 className="main-title text-center">CONTACT</h2>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 mb-1">
            <input name="name" placeholder="Name" className="contact-input" />
          </div>

          <div className="col-md-4 mb-1">
            <input name="email" placeholder="Email" className="contact-input" />
          </div>
          <div className="col-md-4 mb-1">
            <input
              name="subject"
              placeholder="Subject"
              className="contact-input"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-12">
      <textarea
            name="message"
            placeholder="Message"
            className="contact-textarea"
          />
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-12">
          <input className="form-btn" type="submit" value="Send Message" />
        </div>
      </div>
    </div>
    // </div>
  );
}
export default Contact;
