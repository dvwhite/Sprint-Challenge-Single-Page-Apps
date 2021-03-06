import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import useLocalStorage from 'react-use-localstorage';

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  margin-bottom: 2%;
`

export default function SearchForm({characters, setResults}) {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', "");

  const handleChange = (event) => {
    console.log(event.target.value.charCodeAt(0))
    setSearchTerm(event.target.value);
  }
  
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
