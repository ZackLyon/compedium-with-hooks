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
  const [unorderedList, setUnorderedList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [availableTypes, setAvailableTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('any');

  useEffect(() => {
    async function retrievePokemon() {
      const pokemonList = await fetchPokemon();
      setPokedex(pokemonList);
      setUnorderedList(pokemonList);
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
        setPokedex(unorderedList);
      } else {
        const selectedList = await fetchSelected(selectedType);
        setPokedex(selectedList);
      }
    }

    changeType();
  }, [selectedType, unorderedList]);

  return (
    <div>
      <Choices
        types={availableTypes}
        setType={setSelectedType}
        selectedType={selectedType}
      />
      {isLoading ? <div>loading</div> : <List pokedex={pokedex} />}
    </div>
  );
}
