export const fetchPokemon = async () => {
  const pokemonList = await fetch(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex'
  );

  const parsedList = await pokemonList.json();
  return parsedList.results;
};
