import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="title" > <h2 onClick={props.reset}>Clicky Game</h2> </div>
  )
}

export default Title;