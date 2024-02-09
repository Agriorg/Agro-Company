import about from "../img/about.avif"
function Vision() {
  return (
    <>

      <div className="container about" style={{marginTop:'120px',marginBottom:'80px'}}>
        <div className="row" style={{justifyContent:'center'}}>
          <div className="col-md-6" style={{borderRadius:'15px'}}>
            <div className="customdiv">
            <h2 className="main-title text-center about-h2">VISION</h2>
            <p className="main-p">
Our aim to to be the largest agro poultry suppplier of india .
            </p>
          </div>
            </div>
          {/* <div className="col-md-6 text-center">
            <img alt="about" src={about} className="img-fluid" style={{borderRadius:'15px'}} />
          </div> */}
        </div>
      </div>
    </>
  );
}
export default Vision;
