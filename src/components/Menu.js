const Menu = (pokemon) => {
  // Convert the object containing an array ob objects into an array of objects
  const pokemonArr = pokemon.pokemon;
  // Create an array of all the types of Pokemon by flattening the array of objects
  const pokemonTypes = pokemonArr.flatMap(pokemon =>
    pokemon.types.map(type => type.type.name));
  // Filter out the duplicate types
  const filteredTypes = [...new Set(pokemonTypes)];
  console.log(filteredTypes);

  return (
    <div>
      <h1>Menu</h1>
      {filteredTypes.map(type => (
        <button key={type} style={{ textTransform: 'uppercase' }}>{type}</button>
      ))}
    </div>
  )
}

export default Menu;