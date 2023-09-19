import React from 'react';
import MovieCard from '../moviecard';
import './movieStyle2.css';

const SearchResults = ({ results, onClose }) => {
  // Check if there are results to determine whether to render the button
  const shouldRenderButton = results.length > 0;

  return (
    <div className="search-results">
      {shouldRenderButton && (
        <button className='firstclose' onClick={onClose}>
          Close Results
          <div id="clip">
            <div id="leftTop" className="corner"></div>
            <div id="rightBottom" className="corner"></div>
            <div id="rightTop" className="corner"></div>
            <div id="leftBottom" className="corner"></div>
          </div>
          <span id="rightArrow" className="arrow"></span>
          <span id="leftArrow" className="arrow"></span>
        </button>
      )}
      {results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default SearchResults;
