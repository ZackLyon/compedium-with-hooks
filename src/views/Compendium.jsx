import React, { useEffect, useState } from 'react';
import Choices from '../components/Choices/Choices';
import List from '../components/List/List';
import {
  fetchPokemon,
  fetchSelected,
  fetchTypes,
} from '../services/fetch-utils.js';

export default function Compendium() {
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [availableTypes, setAvailableTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('any');
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    async function retrievePokemon() {
      const pokemonList = await fetchPokemon('asc');
      setPokedex(pokemonList);

      setIsLoading(false);
    }

    retrievePokemon();
  }, []);

  useEffect(() => {
    async function retrieveTypes() {
      const typesList = await fetchTypes();
      setAvailableTypes(typesList);
    }

    retrieveTypes();
  }, []);

  useEffect(() => {
    async function changeType() {
      if (selectedType === 'any') {
        console.log(sort);
        const anyList = await fetchPokemon(sort);
        setPokedex(anyList);
      } else {
        const selectedList = await fetchSelected(selectedType, sort);
        setPokedex(selectedList);
      }
    }

    changeType();
  }, [selectedType, sort]);

  return (
    <div>
      <Choices
        types={availableTypes}
        setType={setSelectedType}
        selectedType={selectedType}
        sort={sort}
        setSort={setSort}
      />
      {isLoading ? <div>loading</div> : <List pokedex={pokedex} />}
    </div>
  );
}
