import React from 'react';
import MovieCard from '../moviecard';
import './movieStyle2.css'

const SearchResults = ({ results ,onClose}) => {
  return (
    <div className="search-results">
      {/* <button className="close-button" onClick={onClose}>
        Close Results
      </button> */}
      <button className='firstclose' onClick={onClose}>
    Close Results
    <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
    </div>
    <span id="rightArrow" class="arrow"></span>
    <span id="leftArrow" class="arrow"></span>
</button>
      {results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default SearchResults;
