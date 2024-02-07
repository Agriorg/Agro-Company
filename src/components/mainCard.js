// import card from "../img/card1.png"
import { useNavigate } from "react-router-dom";
function MCard(props) {
    const navigate = useNavigate()
    const handleButtonClick = (route) => {
        navigate(props.route);
      };
    return (
     

 
      <div className="card mcard" style={{ height: "100%", border: "2px solid #db3716" ,justifyContent:'center',backgroundColor: 'rgba(255, 255, 255, 0.5)' , }} >
        <br />
        
        <div className="text-center">
          <img alt="card-img" src={props.img} className="text-center img-fluid"   style={{ height: "200px", objectFit: "cover", borderRadius: "20px" }} />
        </div>
        <div className="text-center">
          <h3 className="card-title">{props.title}</h3>
        </div>
        <div className="p-3">
          <p className="card-text">
             {props.text}
          </p>
          <div  style={{display:'flex' , justifyContent:'center'}}>
          <button onClick={() => handleButtonClick(props.route)} className="btn" >
          Learn More
        </button>
          </div>
        </div>
      </div>

    );
  }
  export default MCard;
  