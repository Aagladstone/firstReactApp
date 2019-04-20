import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import schools from './schools.json';
import PictureCard from './components/PictureCard'

class App extends Component {

  state = {
    schools
  };
  resetGame() {

  }
  shuffleSchool() {

  }

  guessFunction() {

  }

  scoreFunction() {
    
  }

  render() {
    return (

      <Wrapper> 
        <Header> </Header>
        <Jumbotron> </Jumbotron>

        {this.state.schools.map(s => (
          <PictureCard
            // shuffleSchool={this.shuffleSchool}
            id={s.id}
            key={s.id}
            image={s.image}
          />
          
        ))}

        <Footer> </Footer>
      </Wrapper>

    );
  }
}

export default App;
