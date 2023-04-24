const SearchBar = ({ pokemon, onTypeFilterChange }) => {
    console.log(pokemon);

    // Create an array of all the types of Pokemon by flattening the array of objects
    const pokemonNames = pokemon.map((elt) =>
        elt.name);
    console.log(pokemonNames);

    // Filter out the duplicate types
    const filteredNames = [...new Set(pokemonNames)];
    console.log(filteredNames);

    // Function to handle the submit of the form and extract the values of the checked checkboxes
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const inputs = Array.from(e.target.querySelectorAll('input:checked'))
            .map(input => input.value);
        // Call the filterForType function for filtering pokemon state
        const filteredPokemon = filterForType(inputs)
        // Pass the filtered Pokemon to the PokeList component
        onTypeFilterChange(filteredPokemon);
    }
    // Filter the Pokemon for the types that are checked
    const filterForType = (inputs) => {
        const filteredPokemon = pokemon.filter(pokemon => {
            return pokemon.types.some(type => {
                return inputs.includes(type.type.name);
            })
        });
        return filteredPokemon;
    }

    return (
        <div>
            <h1>Menu</h1>
            <form onSubmit={handleOnSubmit}>
                {filteredNames.map(type => (
                    <div key={type}>
                        <input type='text' placeholder="Search for Pokemons" />
                    </div>
                ))}
                <button type='submit'>Search Pokemons</button>
            </form>
        </div>
    )
}

export default SearchBar;