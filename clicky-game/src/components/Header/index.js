import React from "react";
import Guesses from './Guesses'
import Title from './Title'
import Score from './Score'
import "./style.css";

class Header extends React.Component {

  state = {
    score: 0
  };

  render() {
  return (
  <div className="header">
  <Guesses> </Guesses>
  <Title> </Title>
  <Score> </Score>
  </div>
  );

  }
}
export default Header;