// import about from "../img/about.avif"
import about from "../img/veg.png"
function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row"  >
          <div className="col-md-6 text-center" >
            <img alt="about" src={about} className="img-fluid" style={{borderRadius:"25px"}} />
          </div>
          <div className="col-md-6">
            <div  className='customdiv' >

            <h2 className="main-title text-center about-h2">ABOUT</h2>
            <p className="main-p">
            At Agri Earth Exports Pvt Ltd, we're revolutionizing the agriculture industry by connecting rural Indian farmers directly with consumers. 
            Established in 2023, we ensure top-quality agricultural products while minimizing middlemen exploitation. Backed by over five decades of expertise, 
            we uphold stringent quality standards set by FSSAI and global regulations. From Maharashtra's finest produce to cutting-edge technology, 
            we're committed to excellence and customer satisfaction. Join us in experiencing the best in agricultural innovation and integrity.
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
