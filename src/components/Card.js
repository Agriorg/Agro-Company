// import card from "../img/card1.png"
function Card(props) {
  return (
    <div className="card" style={{ height: "100%" }} >
      <br />
      
      <div className="text-center">
        <img alt="card-img" src={props.img} className="text-center img-fluid"   style={{ height: "200px", objectFit: "cover" }} />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">
           {props.text}
        </p>
      </div>
    </div>
  );
}
export default Card;
