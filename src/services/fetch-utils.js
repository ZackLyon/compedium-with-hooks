import { typeGroomer } from '../utils/munger-utils.js';

export const fetchPokemon = async (sort) => {
  const pokemonList = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${sort}`
  );

  const parsedList = await pokemonList.json();
  return parsedList.results;
};

export const fetchTypes = async () => {
  const typesList = await fetch(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex/types'
  );
  const parsedTypeList = await typesList.json();
  const typesArr = typeGroomer(parsedTypeList);

  return typesArr;
};

export const fetchSelected = async (type, sort) => {
  const selectedList = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}&sort=pokemon&direction=${sort}`
  );

  const parsedSelectedList = await selectedList.json();
  return parsedSelectedList.results;
};
