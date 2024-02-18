
function Card(props) {
  return (
    <div className="card" style={{backgroundColor:'#fbfada'}}>
      <br />
      
      <div className="text-center">
        <img alt="card-img" src={props.img} className="text-center img-fluid"   style={{ height: "150px", width:'230px', borderRadius: "20px" }} />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text" style={{color:'#1a3129'}}>
           {props.text}
        </p>
      </div>
    </div>
  );
}
export default Card;
