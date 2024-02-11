import right from "../img/right.png"
import { useNavigate } from "react-router-dom";
function Vision() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/mission-vision');
  };
  return (
    <>

      <div className=" vision" >
        <div className="row" style={{justifyContent:'center'}}>
          <div className="col-md-6" >
            <div className="customdiv2">
            <h2 className="main-title text-center about-h2" style={{color:'#e8e1d9',fontSize:'48px',fontWeight:'400',margin:'0'}}>VISION</h2>
            <p >
            To emerge as the global leader in agricultural goods, establishing the benchmark for quality, innovation, and sustainability, 
            while fostering a positive and meaningful impact within every community along the value chain worldwide.
                </p>
            <div style={{ display: "flex", alignItems: "center", height: "25px", marginBottom: "25px", cursor: "pointer" }}>
                <button onClick={handleButtonClick} className="vbtn">Learn More</button>
              </div>
          </div>
            </div>
        </div>
      </div>
    </>
  );
}
export default Vision;
