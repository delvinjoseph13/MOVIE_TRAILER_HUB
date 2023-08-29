import React, { useState } from 'react';
import axios from 'axios';
import './moviesstyle.css'

const MovieCard = ({ movie }) => {
  const [trailerKey, setTrailerKey] = useState('');

  const fetchTrailer = async () => {
    const apiKey = '28e555c463da26a254b50ca9b4ee9164';
    const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const trailer = response.data.results.find(video => video.type === 'Trailer');
      if (trailer) {
        setTrailerKey(trailer.key);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  return (
    <div className="movie-card">
    
      <img className='image' onClick={fetchTrailer} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
     {/* <h2>{movie.title}</h2> */}
      {/* <p>{movie.release_date}</p>  */}
      {/* <p>{movie.overview}</p> */}
      <button onClick={fetchTrailer}>Watch Trailer</button>
      {trailerKey && (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
