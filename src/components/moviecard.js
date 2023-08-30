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
      else{
        alert("Sorry this trailer is not available")
       
        
      }
    } catch (error) {
      
      console.error('Error fetching trailer:', error);
    }
  };

  const closeTrailer = () => {
    setTrailerKey('');
  };

  return (
    <div className="movie-card">
    
      <img className='image' onClick={fetchTrailer} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
     {/* <h2>{movie.title}</h2> */}
      {/* <p>{movie.release_date}</p>  */}
      {/* <p>{movie.overview}</p> */}
      {/* <button onClick={fetchTrailer}>Watch Trailer</button> */}
      {trailerKey && (
        <div className="video-overlay">
          <div className="video-container">
            <iframe
              width="800"
              height="405"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          {/* <button className="close-button" onClick={closeTrailer}>
            Close
          </button> */}
          
<button class="noselect" onClick={closeTrailer}><span class="text">Close</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">
  </path></svg></span></button>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
