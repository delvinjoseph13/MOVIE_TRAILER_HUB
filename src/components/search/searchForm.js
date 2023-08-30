import React, { useState } from 'react';
import axios from 'axios';
import './movieStyle2.css'



const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const apiKey = '28e555c463da26a254b50ca9b4ee9164';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    
    try {
      const response = await axios.get(url);
      onSearch(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form className='form'
    onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      
      <button className='searchbutton' type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
