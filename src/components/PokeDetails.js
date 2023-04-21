import { useLocation } from "react-router-dom";

const PokeDetails = () => {

  const location = useLocation()
  console.log(location)
  return (
    <section className="container_details">
      <article>
        <img src={location.state.sprites.other.dream_world.front_default} alt="" />

        <h2>{location.state.id}</h2>
        <h2>{location.state.name}</h2>
        <h3>{location.state.types.map((elt) => <p>{elt.type.name}</p>)}</h3>
      </article >
      <article>
        <h2>Attacks and Movements:</h2>
        <p>{location.state.moves.map((elt) => <p>{elt.move.name}</p>)}</p>
      </article>

    </section>
  )
}

export default PokeDetails;