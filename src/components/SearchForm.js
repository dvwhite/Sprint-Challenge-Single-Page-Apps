import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import getCharacters from './utils';

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  margin-bottom: 2%;
`

export default function SearchForm(props) {
  const {characters, setResults, searchTerm, setSearchTerm, setCharacters} = props;

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    getCharacters(setCharacters);
  }, []);
  
  useEffect(() => {
    setResults(
      characters
        .filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()))
      )
  }, [searchTerm]);

  return (
    <CenteredDiv className="search-form">
     <label>
       <input
        type="text"
        name="search"
        value={searchTerm}
        placeholder="Search for a character..."
        onChange={handleChange}
       />
     </label>
    </CenteredDiv>
  );
}
