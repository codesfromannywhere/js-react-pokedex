import '../css/PokeItem.css'
import pokeball from '../img/pokeball.png'

const PokeItem = (props) => {
  return (
    <div className='pokeItem'>
      <img src={props.pokemonImage} alt={props.pokemonName} />
      <div className='pokeItemInfo'>
        <div className='pokeID'>
          <img src={pokeball} alt="pokeball" className='pokeball'/>  
          <p>{props.pokemonId}</p>
        </div>
        <p className='pokeName'>{props.pokemonName}</p>
      </div>
    </div>
  )
}

export default PokeItem;