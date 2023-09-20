import React, { useState, useEffect } from 'react';
import './Recommendation.css';

const API_KEY = '28e555c463da26a254b50ca9b4ee9164'; // Replace with your TMDb API key

const MovieRecommendation = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trailerKey, setTrailerKey] = useState(null);

  // Function to fetch trailer key
  const fetchTrailerKey = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.results.length > 0) {
        setTrailerKey(data.results[0].key);
      }
    } catch (error) {
      console.error('Error fetching trailer key:', error);
    }
  };
  const closeTrailer = () => {
    setTrailerKey(null);
  };


  useEffect(() => {
    // Function to fetch random movies
    const fetchRandomMovies = async () => {
      try {
        const randomPage = Math.floor(Math.random() * 10) + 1; // Random page number
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${randomPage}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setRecommendedMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching random movies:', error);
        setLoading(false);
      }
    };

    // Call the fetchRandomMovies function initially
    fetchRandomMovies();

    // Set up a timer to fetch new recommended movies every 20 seconds
    const movieTimer = setInterval(() => {
      fetchRandomMovies();
    }, 1000000);

    // Clean up the movieTimer when the component unmounts
    return () => clearInterval(movieTimer);
  }, []);

  // Function to display the trailer
  const displayTrailer = (movieId) => {
    fetchTrailerKey(movieId);
  };

  

  return (
    <div className='recommentation-div'>
      <h1 className='recomended-movies-title'>Recommended Movies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : recommendedMovies.length === 0 ? (
        <p>No movies available.</p>
      ) : (
        <div className="movie-list">
          {recommendedMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img className='recommentedimage'
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                onClick={() => displayTrailer(movie.id)}
                style={{ cursor: 'pointer' }}
              />
              <h2 className='recommend-title'>{movie.title}</h2>
              <p className='recommend-overview'>Movie Rating:    {movie.vote_average}</p>
            
            </div>
          ))}
        </div>
      )}
     
      {trailerKey && (
        <div className="trailer">
          
          <button onClick={closeTrailer} class="btn-1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Close Trailer
    </button>
          <iframe
            title="Trailer"
            width="100%"
            height="405"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieRecommendation;
