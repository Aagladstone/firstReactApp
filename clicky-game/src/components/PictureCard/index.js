import React from "react";
import "./style.css";

function PictureCard(props) {
  
  return (

    <div className="card" onClick={props.setScore} key={props.key}>

        <img alt={props.name} src={props.image}/> 
        
    </div> 
  );
}

export default PictureCard;