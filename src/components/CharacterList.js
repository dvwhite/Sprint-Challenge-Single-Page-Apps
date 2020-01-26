import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import useLocalStorage from 'react-use-localstorage';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', "");

  if (!characters) return <h2>Loading character data...</h2>

  return (
    <>
      <SearchForm 
        characters={characters}
        setResults={setResults}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCharacters={setCharacters}
      />

      <section className="character-list grid-view">
        {(searchTerm.length > 0 ? results : characters).map(character => (
          <CharacterCard 
            key={character.id} 
            character={character} 
          />
        ))}
      </section>
    </>
  );
}
