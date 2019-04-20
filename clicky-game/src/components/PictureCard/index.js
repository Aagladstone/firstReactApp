import React from "react";
import "./style.css";

function PictureCard(props) {
  return (

    <div className="card" >

        <img alt={props.name} src={props.image} 
        onClick={() => props.shuffleScool(props.id)}/>
    </div> 
  );
}

export default PictureCard;