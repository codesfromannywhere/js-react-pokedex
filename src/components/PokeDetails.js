import { useLocation } from "react-router-dom";
import '../css/PokeDetails.css'
import pokeball from '../img/pokeball.png'
import pokeballtrans from '../img/pokeball_transparent.png'

const PokeDetails = () => {

  const location = useLocation()
  console.log(location)
  return (
    <section className="detailPage">
    <section className="pokemonDetailContainer">
      <div className="pokeImageAndinfo">
          <div className="pokeImage">
            <img src={location.state.sprites.other.dream_world.front_default} alt="" />
          </div>
          <div className="pokeInfo">
            <div className="pokeType">
              <h2><img src={pokeballtrans} />TYPE<img src={pokeballtrans} /></h2>
              <h3>{location.state.types.map((elt) => <p className={elt.type.name}>{elt.type.name}</p>)}</h3>
            </div>
            <div className="pokeInfoWrapper">
              <h2><img src={pokeballtrans} />ATTACKS & MOVES<img src={pokeballtrans} /></h2>
              <div className="pokeAttacks">
                <p>{location.state.moves.map((elt) => <p>{elt.move.name}</p>)}</p>
              </div>
            </div>
          </div>
      </div>
      <div className="detailId-Name">
        <div className="detailBall-Name">
          <img src={pokeball} alt="pokeball" className='pokeball'/>
          <h2>{location.state.id}</h2>
        </div>
        <h2 className="detailPokeName">{location.state.name}</h2>
      </div>
    </section>
    </section>
  )
}

export default PokeDetails;

// const PokeDetails = () => {

//   const location = useLocation()
//   console.log(location)
//   return (
//     <section className="container_details">
//       <article>
//         <img src={location.state.sprites.other.dream_world.front_default} alt="" />

//         <h2>{location.state.id}</h2>
//         <h2>{location.state.name}</h2>
//         <h3>{location.state.types.map((elt) => <p>{elt.type.name}</p>)}</h3>
//       </article >
//       <article>
//         <h2>Attacks and Movements:</h2>
//         <p>{location.state.moves.map((elt) => <p>{elt.move.name}</p>)}</p>
//       </article>

//     </section>
//   )
// }

// export default PokeDetails;

// VON MIR ERSTE BEARBEITUNG

{/* <section className="container_details">
<img src={location.state.sprites.other.dream_world.front_default} alt="" />
<div className="pokeDetailInfo">
  <div className="pokeIDDetails">
  <img src={pokeball} alt="pokeball" className='pokeball'/>
  <h2>{location.state.id}</h2>
  </div>
  <h2>{location.state.name}</h2>
</div>
<div className="pokeTypes">
  <h2>Type:</h2>
  <h3>{location.state.types.map((elt) => <p>{elt.type.name}</p>)}</h3>
</div>
<div>
<h2>Attacks and Movements:</h2>
<p>{location.state.moves.map((elt) => <p>{elt.move.name}</p>)}</p>
</div>

</section> */}