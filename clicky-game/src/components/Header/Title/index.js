import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="title" onClick={() => props.resetGame(props.id)}> <h2>Clicky Game</h2> </div>
  )
}

export default Title;