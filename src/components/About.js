import about from "../img/about.avif"
function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={about} className="img-fluid" style={{borderRadius:"25px"}} />
          </div>
          <div className="col-md-6">
            <h2 className="main-title text-center about-h2">ABOUT</h2>
            <p className="main-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              quam purus, ullamcorper id risus eu, consectetur consectetur
              purus. Etiam sagittis in eros ac sollicitudin.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
