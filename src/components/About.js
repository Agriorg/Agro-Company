import about from "../img/about.avif"
function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row"  >
          <div className="col-md-6 text-center">
            <img alt="about" src={about} className="img-fluid" style={{borderRadius:"25px"}} />
          </div>
          <div className="col-md-6">
            <div  className='customdiv' style={{backgroundColor:'#C1F2B0',borderRadius:'15px'}}>

            <h2 className="main-title text-center about-h2">ABOUT</h2>
            <p className="main-p">
At Agro Company we aim to provide cheap and affordable agriculture and poultry products to indian audience 
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
