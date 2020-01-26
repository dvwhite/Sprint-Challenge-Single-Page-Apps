import React from 'react';
import axios from 'axios';

const getCharacters = (setCharacters) => {
  axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacters(response.data.results);
      return response.data.results;
    })
    .catch(error => {
      console.error('Error', error);
    });
}

export default getCharacters;