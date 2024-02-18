
import next from "../img/arrow_downward_alt.png"
import { useNavigate } from "react-router-dom";
function MCard(props) {
  const navigate = useNavigate();
  const handleButtonClick = (route) => {
    navigate(props.route);
  };
  return (
    <div
      className="card mcard"
    >
      <br />

      <div className="text-center ">
        <img alt="card-img" src={props.img} className="text-center  img-fluid" style={{ marginTop:'-80px',height: "280px", width: '340px', borderRadius: "20px"}} />
      </div>
      <div className="card-brk">
      <div className="text-center" >
        <h3 className="card-title" >{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text" >
          {props.text}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '25px' }}>
            <a className="mainlink" >Learn More
              <img src={next} style={{ height: '10px', marginLeft: '10px' }} />
            </a>
          </div>
      </div>
        </div>
      </div>
    </div>
  );
}
export default MCard;