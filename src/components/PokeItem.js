import { useState } from "react";

const PokeItem = (props) => {

    // const [pokemon, setPokemons] = useState([]);

    console.log(props.name)
    return (
        <div>
            <h1>Hallo</h1>
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.id}</p>
        </div>
    )
}

export default PokeItem;