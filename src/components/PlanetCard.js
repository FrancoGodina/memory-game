function PlanetCard(props) {
    return (
        <div onClick={() => props.handleClick(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="img-content">
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default PlanetCard;