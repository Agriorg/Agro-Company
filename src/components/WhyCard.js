// import card from "../img/card1.png"
// import next from "../img/next.png"
// import { useNavigate } from "react-router-dom";
function WCard(props) {
    // const navigate = useNavigate()
    // const handleButtonClick = (route) => {
    //     navigate(props.route);
    //   };
    return (
            <div  className =' wcard mcard' style={{justifyContent:'center'}}>
                <br/>
                <div className="text-center">
                    <img alt="card-img" src={props.img} className="text-center img-fluid"   style={{ height: "50px",width:'150px', borderRadius: "20px" }} />
                 </div>
                {/* <div style={{display:'flex',flexDirection:'column'}}> */}
                    <div className="p-3">
                        <p className="card-text">
                            {props.text}
                        </p>
                    </div>
                </div>
            // </div>

 
        
        );
    }
  export default WCard;
  
  {/* <div  style={{display:'flex' , justifyContent:'center'}}>
  <div style={{display:'flex', alignItems:'center', height:'25px',marginBottom:'-5px'}}>
  <a style={{display:'flex',alignItems:'center'}}>Learn More
      <img src={next}  style={{height:'15px' ,marginLeft:'10px'}} />
      </a>
    </div>
    
  </div> */}
    //   <div className=" mcard" style={{ height: "20rem",margin:'5px' ,justifyContent:'center',backgroundColor: 'rgba(255, 255, 255, 0.5)' , }} >
    //     <br />
        
    //     <div className="text-center">
    //       <img alt="card-img" src={props.img} className="text-center img-fluid"   style={{ height: "60px",width:'60px', borderRadius: "20px" }} />
    //     </div>
    //     <div className="text-center">
    //       <h3 className="card-title" style={{fontSize:'18px',fontWeight:'400'}}>{props.title}</h3>
    //     </div>
    //     <div className="p-3">
    //       <p className="card-text" style={{fontSize:'15px',color:'#8b8b8b',fontWeight:'300'}} >
    //          {props.text}
    //       </p>
    //     </div>
    //   </div>