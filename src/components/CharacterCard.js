import React from 'react';

export default function CharacterCard({character}) {
  return (
    <div className='character-card'>
      <div className='character-header'>
        <img src={character.image} alt={character.name} className='portrait' />
        <h3>{character.name}</h3>
      </div>
      <div className='character-info'>
        Species: <em><strong>{character.species}</strong></em>
      </div>
      <div className='character-info'>
        Origin: <strong>{character.origin.name}</strong>
      </div>
      <div className='character-info'>
        Created: <strong>{character.created}</strong>
      </div>
    </div>
  );
}
