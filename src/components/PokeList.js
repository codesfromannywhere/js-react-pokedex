// Infrastructure
import { useState, useEffect } from "react";
// Components
import PokeItem from './PokeItem'
import Menu from './Menu';
// Styling
import '../css/PokeList.css'
import pokemonlogo from '../img/pokemonlogo.svg'
import animatedpokeball from '../img/animatedpokeball.gif'

const PokeList = () => {

  // Different states to store pokemon data, loading state and error state
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch of Pokemon date
  useEffect(() => {

    const getData = async () => {
      try {
        // First fetch to get the amount of Pokemon
        const firstResponse = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
        // Throw error in case of an HTTP error
        if (!firstResponse.ok) {
          throw new Error(`This is an HTTP error: The status is ${firstResponse.status}`);
        }
        // Process the data of the fetch
        // Convert HTTP object in JSON
        const actualData = await firstResponse.json();
        const pokemonResults = actualData.results;
        // Create an empty array to store amount of Pokemon later used to determine the number of loops
        const pokeArray = [];
        // Loop through the results and fetch data of every single Pokemon
        for (let count = 1; count <= pokemonResults.length; count++) {
          // Second fetch to get the Pokemon data
          const secondResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${count}/`);
          // Throw error in case of an HTTP error
          if (!secondResponse.ok) {
            throw new Error(`This is an HTTP error: The status is ${secondResponse.status}`);
          }
          // Process the data of the fetch
          const actualPokemonData = await secondResponse.json();
          pokeArray.push(actualPokemonData);
        }
        // Set the state of the Pokemon data
        setPokemon(pokeArray);
        // Catch errors
      } catch (error) {
        setError(error.message);
        // Finally set loading to false
      } finally {
        setLoading(false);
      }
    }

    getData();

  }, []);

  // Function to handle the submit of the form and extract the values of the checked checkboxes
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const inputs = Array.from(e.target.querySelectorAll('input:checked'))
      .map(input => input.value);
    console.log(inputs);
    console.log(pokemon);
  }

  return (
    <div className="wholePokeList">
      <Menu pokemon={pokemon} />
      <img src={pokemonlogo} alt="pokemon logo" className="pokemonlogo" />
      {loading && <div className="loading"><img src={animatedpokeball} alt="animated pokeball" /></div>}
      {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
      <div className="pokeListGrid">
        {pokemon.map(pokemon => (
          <PokeItem key={pokemon.id}
            pokemonImage={pokemon.sprites.other.dream_world.front_default}
            pokemonId={pokemon.id}
            pokemonName={pokemon.name}
            completePokemon={pokemon}
            type={pokemon.types}
          />
        ))}
      </div>
    </div>
  )
}

export default PokeList;