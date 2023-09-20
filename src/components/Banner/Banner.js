import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../constants/constants';
import axios from '../../axios';
import './Banner.css';
import Sentiment from 'sentiment';

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results.sort((a, b) => 0.5 - Math.random())[0]);
    });
  }, []);

  // Function to perform sentiment analysis on movie descriptions
  const performSentimentAnalysis = (overview) => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(overview);

    return result;
  };
  


  return (
    <div 
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}
      className='banner'>
      <div className='contents'>
        <h1 className='movie-title'>{movie ? movie.title : ''}</h1>
        <div className='banner_buttons'>
          <button className='button-1'>
            RELEASE DATE <br />
            {movie ? movie.release_date : ''}
          </button>
          <button className='button-2'>
            MOVIE RATING<br />
            {movie ? movie.vote_average : ''}
          </button>
          {/* <button className='button'>
            MOVIE LANGUAGE<br />
            {movie ? movie.original_language : ''}
          </button> */}
          
        </div>
        <h1 className='description'>{movie ? movie.overview : ''}</h1>

        {/* Display sentiment analysis */}
        {/* {movie && (
          <div className='banner-sentiment-analysis'>
            <h2 className='banner-sentiment-title'>Sentiment Analysis :</h2>
            <p className='banner-sentiment-score'>SCORE :  {performSentimentAnalysis(movie.overview).score}</p>
            <p className='banner-sentiment-tokens'>Tokens : {performSentimentAnalysis(movie.overview).tokens.join(', ')}</p>
          </div>
        )} */}
      </div>
      <div className='faded_buttom'></div>
      {movie && (
          <div className='banner-sentiment-analysis'>
            <h2 className='banner-sentiment-title'>Sentiment Analysis :</h2>
            <p className='banner-sentiment-score'>SCORE :  {performSentimentAnalysis(movie.overview).score}</p>
            <p className='banner-sentiment-tokens'>Tokens : {performSentimentAnalysis(movie.overview).tokens.join(', ')}</p>
          </div>
        )}
    </div>
  );
}

export default Banner;
