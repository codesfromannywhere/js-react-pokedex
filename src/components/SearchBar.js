import SearchPokemon from '../components/PokeSearch';
import { useState } from 'react';


const SearchBar = () => {
    const [pokemon, setPokemon] = useState('');
    const [details, setDetails] = useState(null);

    const handleClick = async () => {
        try {
            const responce = await SearchPokemon.Search(pokemon)
            setDetails(responce);
        } catch (err) {
            setDetails({ error: "Pokemon not found" }); // leerer Pokeball als IMG?
        }
    };
    return (
        <section>
            <input value={pokemon} onChange={evt => setPokemon(evt.target.value)} />
            <button onClick={handleClick}>Search</button>

            {details && (
                details.error ? (
                    <h1>{details.error}</h1>
                ) : (
                    <div>
                        {/*             // HIER POKE DETAILS oder POKEITEM zurückgeben?
 */}            <h1>{details.name}</h1>
                        <img src={details.sprites.other.dream_world.front_default} alt="pokemon" />
                    </div>
                ))}
        </section>
    );
}

export default SearchBar;