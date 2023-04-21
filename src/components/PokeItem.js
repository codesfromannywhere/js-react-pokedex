import { Link } from "react-router-dom";

const PokeItem = (props) => {
    return (
        <Link to={`/${props.pokemonId}`} state={props.completePokemon}>
            <div>
                <img src={props.pokemonImage} alt={props.pokemonName} />
                <p>{props.pokemonId}</p>
                <p>{props.pokemonName}</p>
            </div>
        </Link>
    )
}

export default PokeItem;