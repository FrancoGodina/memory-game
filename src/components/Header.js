import React from "react";

function Header(props) {
    return(
        <header className="gameHeader">
            <div className="row">
                <h1>Planet Memory Game</h1>
                <nav>
                    <p>Score: {props.currentScore}</p>
                    <p>Best Score: {props.highScore}</p>
                </nav>
            </div>
        </header>
    )
}

export default Header;