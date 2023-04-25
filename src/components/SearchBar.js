import { useState } from 'react';


const SearchBar = ({ pokemon }) => {
    const [pokemons, setPokemons] = useState('');
    const [details, setDetails] = useState(null);
    // console.log(pokemon);
    // console.log(details);

    const handleClick = async () => {
        try {
            const response = await pokemon.Search(pokemons)
            setDetails(response);
        } catch (err) {
            setDetails({ error: "Pokemon not found" }); // leerer Pokeball als IMG?
        }

    };
    // console.log(details);

    return (
        <section>
            <input value={pokemons} onChange={evt => setPokemons(evt.target.value)} />
            <button onClick={handleClick}>Search</button>

            {details && (
                details.error ? (
                    <h1>{details.error}</h1>
                ) : (
                    <div>
                        <h1>{details.name}</h1>
                        <img src={details.sprites.other.dream_world.front_default} alt="pokemon" />
                    </div>
                ))}
        </section>
    );
}

export default SearchBar;