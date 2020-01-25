import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('Error', error);
        });
    }
    
    getCharacters();
  }, []);
  console.log(characters)

  if (!characters) return <h2>Loading character data...</h2>

  return (
    <section className="character-list">
      {characters.map(character => (
        <CharacterCard 
          key={character.id} 
          character={character} 
        />
      ))}
    </section>
  );
}
