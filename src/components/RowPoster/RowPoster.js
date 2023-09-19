import React, { useEffect, useState } from 'react';
import './RowPoster.css';
import YouTube from 'react-youtube';
import { imageUrl, API_KEY } from '../../constants/constants';
import axios from '../../axios';
import Sentiment from 'sentiment';

function RowPoster(props) {
  const [movies, setMovies] = useState([]);
  const [urlid, setUrlId] = useState('');
  const [reviews, setReviews] = useState({}); // Use an object to store reviews for each movie

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  }, [props.url]);

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log(response.data);
        }
      });
  };

  // Function to perform sentiment analysis on movie descriptions
  const performSentimentAnalysis = (overview) => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(overview);
    return result;
  };

  const handleAddReview = (movieId) => {
    const reviewText = prompt('Enter your review:');
    if (reviewText) {
      // Add the reviewText to the reviews object with the movieId as the key
      setReviews((prevReviews) => ({
        ...prevReviews,
        [movieId]: [...(prevReviews[movieId] || []), reviewText],
      }));
    }
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj) => (
          <div key={obj.id}>
            <img
              onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? 'smallposter' : 'posterimg'}
              src={`${imageUrl + obj.backdrop_path}`}
              alt='title'
            />
            <h1 className='title_desgin'>{obj ? obj.original_title : ''}</h1>
            <h1 className='title_desgin1'>{obj ? obj.release_date : ''}</h1>
            
            



            {/* Perform sentiment analysis and display the sentiment score */}
            <div className='sentiment-analysis'>
              <h2 className='rowposter-sentiment-title'>Sentiment Analysis</h2>
              <p className='rowposter-sentiment-score'>Score: {performSentimentAnalysis(obj.overview).score}</p>
            </div>
            <br></br>
            <button  className='review-but' onClick={() => handleAddReview(obj.id)}>Add Review
            </button>
          
             
            {/* Display individual reviews for the current movie */}
            <div className='reviews'>
             
              {reviews[obj.id] && reviews[obj.id].map((review, index) => (
                <div key={index} className='review'>
                  <p>{review}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {urlid && <YouTube opts={opts} videoId={urlid.key} />}
    </div>
  );
}

export default RowPoster;
