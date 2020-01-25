import React from "react";

export default function CharacterCard({character}) {
  return (
    <div className="character-card">
      <div>
        <img src={character.image} alt={character.name}/>
      </div>
      <h2>{character.name}</h2>
      <div className="character-info">
        Species: <em>{character.species}</em>
      </div>
      <div className="character-info">
        Origin: <strong>{character.origin.name}</strong>
      </div>
      <div className="character-info">
        Created: <strong>{character.created}</strong>
      </div>
    </div>
  );
}
