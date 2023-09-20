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
        placeholder="  Search for movies..."
      />
      
      {/* <button className='searchbutton' type="submit">Search</button> */}
      <button class="searchButton-2">
  <span>
    <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"></path></svg>
  </span>
</button>
   
    </form>
  );
};

export default SearchForm;
