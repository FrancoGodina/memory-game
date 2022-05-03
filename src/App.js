import React from "react";
import './App.css';
import { useState } from "react";
import PlanetCard from "./components/PlanetCard";
import Header from "./components/Header";
import planets from "./components/planets";

function App() {

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [planetsArr, setPlanetsArr] = useState( () => shuffleCards(planets));
    const [clicked, setClicked] = useState(false);

    const handleClick = id => {
      shuffleCards(planets);
      handleScore(id);
    }

    const handleScore = id => {
      planets.forEach(element => {
        if(id === element.id && element.clicked === false) {
          element.clicked = true;
          setClicked(false);
          updateScore();
        } else if (id === element.id && element.clicked === true) {
          if(currentScore > highScore) {
            setHighScore(currentScore)
          }
          setCurrentScore(0);
          setClicked(true);
          planets.forEach(element => (element.clicked = false));
        }
      })
    }


    function swap(array, i, j) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
   function shuffleCards(array) {
      for (let i = array.length; i > 0; i--) {
         const randomIndex = Math.floor(Math.random() * i);
         const currentIndex = i - 1;
         swap(array, currentIndex, randomIndex)
      }
      return array;
   }

    const updateScore = () => {
      setCurrentScore(currentScore + 1);
    }

    return (
      <div>
        <Header currentScore={currentScore} highScore={highScore}/>
        <div className="gameContainer">
          {planetsArr.map((planet, index) => (
            <PlanetCard
              handleClick={handleClick}
              id={planet.id}
              key={index}
              index={index}
              name={planet.name}
              image={planet.image}
            />
          ))}
        </div>
      </div>
    )
}
export default App;