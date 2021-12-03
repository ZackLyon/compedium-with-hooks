import React from 'react';
import './Pokemon.css';

export default function Pokemon({ poke }) {
  const { url_image, pokemon, attack, defense, hp, type_1, type_2 } = poke;

  return (
    <div className='pokemon-card'>
      <img src={`${url_image}`} alt={pokemon} />
      <h1 className='name'>{pokemon}</h1>
      <section className='stats'>
        <div>
          {type_1}
          {type_2 !== 'NA' ? `/${type_2}` : ''}
        </div>
        <div>Attack: {attack}</div>
        <div>Defense: {defense}</div>
        <div>HP: {hp}</div>
      </section>
    </div>
  );
}
