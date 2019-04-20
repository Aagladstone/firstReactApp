import React from "react";
import "./style.css";

function Score(props) {
  return <div className="score"><h2>Score: 0{} | Top Score: {props.children}12 </h2></div>;
}

export default Score;