import React from "react";
import './App.css';
import { useState } from "react";
import PlanetCard from "./components/PlanetCard";
import Header from "./components/Header";

function App() {

  const [planets, setPlanets] = useState("");
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [clicked, setClicked] = useState (false);

  const handleClick = id => {
    shuffleArray();
    handleScore(id);
  }

  const handleScore = id => {
    planets.forEach(element => {
      if(id === element.id && element.clicked === false) {
        element.clicked = true;
        setClicked(false);
        handleIncrement();
      }
      else if (id === element.id && element.clicked === true) {
        if(currentScore > highScore) {
          setHighScore(currentScore);
        }
        setCurrentScore(0);
        setClicked(true);
        planets.forEach(element => (element.clicked = false));
        console.log(planets);
      }
    });
  };

  const shuffleArray = () => {
    const shuffledArr = shuffle(planets);
    setPlanets({shuffledArr});
  }

  const handleIncrement = () => {
    setCurrentScore(currentScore ++);
  }

  const shuffle = array => {
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
    <div>
      <Header currentScore={currentScore} highScore={highScore} />
      {planets.map((planet) => {
        return (
          <PlanetCard
            Clicked={clicked}
            handleClick={handleClick}
            id={planet.id}
            key={planet.id}
            name={planet.name}
            image={planet.image}
          />
        )
      })}
    </div>
  )

}

export default App;
