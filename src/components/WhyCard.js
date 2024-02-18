
function WCard(props) {
    return (
            <div  className =' wcard mcard' style={{justifyContent:'center'}}>
                <br/>
                <div className="text-center">
                    <img alt="card-img" src={props.img} className="text-center imgw"  />
                 </div>
                {/* <div style={{display:'flex',flexDirection:'column'}}> */}
                    <div className="p-3">
                        <p className="card-text" style={{color:'#ffffff'}}>
                            {props.text}
                        </p>
                    </div>
                </div>
            // </div>

 
        
        );
    }
  export default WCard;
  