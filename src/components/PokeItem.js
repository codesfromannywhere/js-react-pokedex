const PokeItem = (props) => {
  return (
    <div>
      <img src={props.pokemonImage} alt={props.pokemonName} />
      <p>{props.pokemonId}</p>
      <p>{props.pokemonName}</p>
    </div>
  )
}

export default PokeItem;