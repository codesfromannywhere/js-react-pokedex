const Menu = ({ pokemon, handleOnSubmit }) => {
  // Create an array of all the types of Pokemon by flattening the array of objects
  const pokemonTypes = pokemon.flatMap(pokemon =>
    pokemon.types.map(type => type.type.name));
  // Filter out the duplicate types
  const filteredTypes = [...new Set(pokemonTypes)];
  console.log(filteredTypes);

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