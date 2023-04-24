const Menu = ({ pokemon }) => {
  // Create an array of all the types of Pokemon by flattening the array of objects
  const pokemonTypes = pokemon.flatMap(pokemon =>
    pokemon.types.map(type => type.type.name));
  // Filter out the duplicate types
  const filteredTypes = [...new Set(pokemonTypes)];
  console.log(filteredTypes);

  // Function to handle the submit of the form and extract the values of the checked checkboxes
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const inputs = Array.from(e.target.querySelectorAll('input:checked'))
      .map(input => input.value);
    console.log(inputs);
    const filteredPokemon = filterForType(inputs);
    console.log(filteredPokemon);
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
        {filteredTypes.map(type => (
          <div key={type}>
            <input type='checkbox' id={type} value={type} />
            <label htmlFor={type} style={{ textTransform: 'uppercase' }}>{type}</label>
          </div>
        ))}
        <button type='submit'>SEARCH</button>
      </form>
    </div>
  )
}

export default Menu;