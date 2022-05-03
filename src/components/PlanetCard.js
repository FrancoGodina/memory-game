import React from "react";

function PlanetCard(props) {
    return (
        <div className="card" onClick={() => props.handleClick(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image}/>
            </div>
            {props.name}
        </div>
    )
}

export default PlanetCard;