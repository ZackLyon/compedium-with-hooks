import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import './List.css';

export default function List({ pokedex }) {
  return (
    <div className='list-layout'>
      {pokedex.map((pokemon) => (
        <Pokemon poke={pokemon} key={pokemon.pokemon} />
      ))}
    </div>
  );
}
