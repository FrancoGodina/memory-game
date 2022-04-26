import React from "react";
import './App.css';
import { useState } from "react";

function App() {

  const [planets, setPlanets] = useState("");
  const [highscore, setHighscore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [clicked, setClicked] = useState (false);

  handleClick = id => {
    shuffleArray();
    handleScore(id);
  }

  handleScore = id => {
    planets.forEach(element => {
      if(id === element.id && element.clicked === false) {
        element.clicked = true;
        setClicked(false);
        handleIncrement();
      }
      else if (id === element.id && element.clicked === true) {
        if(currentScore > highScore) {
          setHighscore(currentScore);
        }
        setCurrentScore(0);
        setClicked(true);
        planets.forEach(element => (element.clicked = false));
        console.log(planets);
      }
      }
    });
  };

  shuffleArray = () => {
    const shuffledArr = shuffle(planets);
    setCharacters({shuffledArr});
  }

  handleIncrement = () => {
    setCurrentScore(currentScore ++);
  }

  shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while(0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex = -1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue
    }

    return array
  }

  return (
    
  )

}

export default App;
