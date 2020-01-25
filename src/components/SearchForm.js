import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  margin-bottom: 2%;
`

export default function SearchForm({characters, setDisplayed}) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }
 
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  useEffect(() => {
    setDisplayed(
      characters
        .filter(character => character.name.toLowerCase().includes(searchTerm))
      )
  }, [searchTerm]);

  return (
    <CenteredDiv className="search-form">
     <label>
       <input
        type="text"
        name="search"
        placeholder="Search for a character..."
        onChange={handleChange}
       />
     </label>
    </CenteredDiv>
  );
}
