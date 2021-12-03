import React from 'react';

export default function Pokemon({ poke }) {
  console.log(poke);
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

// pokemon,
//   type_1,
//   attack,
//   defense,
//   hp,
//   url_image,
