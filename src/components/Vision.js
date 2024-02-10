import right from "../img/right.png"
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
            <div style={{ display: "flex", alignItems: "center", height: "25px", marginBottom: "5px", cursor: "pointer" }}>
                <a href="/mission-vision" style={{ display: "flex", alignItems: "center", paddingBottom: "30px", textDecoration: "none",color:'#e8e1d9' }}>Learn More
                  <img src={right} style={{ height: "15px", marginLeft: "6px" }} alt="Right Arrow" />
                </a>
              </div>
          </div>
            </div>
        </div>
      </div>
    </>
  );
}
export default Vision;
