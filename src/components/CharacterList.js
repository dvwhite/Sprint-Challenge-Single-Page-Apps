import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import axios from 'axios';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [results, setResults] = useState([]);

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

  if (!characters) return <h2>Loading character data...</h2>

  return (
    <>
      <SearchForm 
        characters={characters}
        setResults={setResults}
      />

      <section className="character-list grid-view">
        {(results.length > 0 ? results : characters).map(character => (
          <CharacterCard 
            key={character.id} 
            character={character} 
          />
        ))}
      </section>
    </>
  );
}
