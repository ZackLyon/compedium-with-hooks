import React from 'react';
import Pokemon from '../Pokemon/Pokemon';

export default function List({ pokedex }) {
  return (
    <div>
      {pokedex.map((pokemon) => (
        <Pokemon poke={pokemon} key={pokemon.pokemon} />
      ))}
    </div>
  );
}
