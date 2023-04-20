import { useEffect, useState } from "react";
import PokeItem from './PokeItem'

const PokeList = () => {

  const [pokemon, setPokemons] = useState([]);

  // Fetch um alle Pokemons als Objekte in einem Array auszugeben
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
      .then(res => res.json())
      .then(json => {
        // Hier werden alle Fetch Daten in der Console ausgegeben
        // console.log(json);

        //leeres Array vor der Schleife
        const array = [];

        for (let count = 1; count <= json.results.length;
          count++) {
          fetch(`https://pokeapi.co/api/v2/pokemon/${count}/`)
            .then(res => res.json())
            .then(json => {

              // jedes Pokemon wird in leeres Array gepusht
              array.push(json)
              // console.log(array);
              // setPokemons([...pokemon, json])
            })
        }
        // nach der Schleife wird "array" an "setPokemons" geschickt
        setPokemons(array)
      })
  }, [])
  console.log(pokemon);



  return (
    <div>
      <h1>PokeList - hier wird gefetcht</h1>
      <PokeItem />

    </div>
  )
}

export default PokeList;


          // pokelist
          // console.log(json.sprites.other.dream_world.front_default)
          // console.log(json.id)
          // console.log(json.name)
          // pokedetail
          // console.log(json.types[0].type.name) // mappen
          // console.log(json.types[1].type.name)
          // console.log(json.moves[0].move.name)