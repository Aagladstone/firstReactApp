import React from "react";
import "./style.css";

function Score(props) {
  return (
  <div className="score"> 
     <h2> Score: {props.score} | Top Score: {props.topScore} </h2>
  </div>
  );
}

export default Score;