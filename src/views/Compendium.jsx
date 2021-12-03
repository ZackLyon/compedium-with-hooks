import React, { useEffect, useState } from 'react';
import Choices from '../components/Choices/Choices';
import List from '../components/List/List';
import { fetchPokemon } from '../services/fetch-utils.js';

export default function Compendium() {
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function retrievePokemon() {
      const pokemonList = await fetchPokemon();
      setPokedex(pokemonList);
      setIsLoading(false);
      console.log(pokemonList);
    }

    retrievePokemon();
  }, []);

  return (
    <div>
      <Choices />
      {isLoading ? <div>loading</div> : <List pokedex={pokedex} />}
    </div>
  );
}
