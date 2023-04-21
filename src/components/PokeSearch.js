const PokeApi = "https://pokeapi.co/api/v2/pokemon";

export default {
    Search
}

function Search(pokemon) {
    return fetch(`${PokeApi}/${pokemon}`).then((res) => res.json());
}

