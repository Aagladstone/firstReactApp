import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import schools from './schools.json';
import PictureCard from './components/PictureCard'
import Score from './components/Score'
import Guesses from './components/Guesses'
import Title from './components/Title'

class App extends Component {

  state = {
    schools,
    score: 0,
    topScore: 0

  };

  resetGame(){

    window.location.reload();

  }

  // shuffleSchool(array) {
  //   let i = schools.length - 1;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const show = array[i];
  //     array[i] = array[j];
  //     array[j] = show;
  //   }
  //   return array;
  // }

  guessFunction() {

  }

  setScore = () => {
  
      this.setState({score: this.state.score + 1});

      if (this.state.topScore <= this.state.score) {
        
        this.setState({ topScore: this.state.topScore + 1})

      }
  
  }

  render() {

    // const shuffleSchool = shuffleSchool(this.props.pictureCard);
    
    return (

      <Wrapper> 
        <Header> 

        </Header>   
          <Guesses> </Guesses>
          <Title 
          reset={this.resetGame}
          />
          <Score
            score={this.state.score}
            topScore={this.state.topScore}
            scoring={this.state.scoring}
          />
          
        <Jumbotron> </Jumbotron>

        {this.state.schools.map((s) => (
          <PictureCard
            // shuffleSchool={this.shuffleSchool}
            id={s.id}
            key={s.id}
            image={s.image}
            setScore={this.setScore}
          />
          
        ))}

        <Footer> </Footer>
      </Wrapper>

    );
  }
}


export default App;
