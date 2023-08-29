import React from 'react';
import MovieCard from '../moviecard';
import './movieStyle2.css'

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default SearchResults;
