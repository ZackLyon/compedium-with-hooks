import React from 'react';

export default function Pokemon({ poke }) {
  const { url_image, pokemon, attack, defense, hp, type_1 } = poke;

  return (
    <div>
      <img src={`${url_image}`} alt={pokemon} />
      <div>{pokemon}</div>
      <div>{type_1}</div>
      <div>Attack: {attack}</div>
      <div>Defense: {defense}</div>
      <div>HP: {hp}</div>
    </div>
  );
}
