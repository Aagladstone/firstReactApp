import React from "react";
import "./style.css";

function Footer(props) {
  return (
  <div className="footer"> <div className="text"> Clicky Game{props.children}</div>
  </div>
  )
}

export default Footer;