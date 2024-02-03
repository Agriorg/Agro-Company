import about from "../img/about.avif"
function Vision() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={about} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title text-center about-h2">VISION</h2>
            <p className="main-p">
Our aim to to be the largest agro poultry suppplier of india .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Vision;
