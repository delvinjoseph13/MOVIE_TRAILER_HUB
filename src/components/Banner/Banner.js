import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response=>{
      //console.log(response.data.results[0])

      setMovie(response.data.results.sort((a,b)=>{return 0.5-Math.random()})[0])
    }))
  }, [])
  
  return (
    
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    
    className='banner'>
      
              <div className='contents'>
                 <h1 className='title'>{movie ? movie.title :""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>RELEASE DATE <br></br>{movie ? movie.release_date : ""}</button>
                    <button className='button'>MOVIE RATING<br></br>{movie ? movie.vote_average :""}</button>
                    <button className='button'>MOVIE LANGUAGE<br></br>{movie ? movie.original_language :""}</button>

                </div>
                <h1 class="description">{movie ? movie.overview :""}</h1>
              </div>
   <div className="faded_buttom"></div>
    </div>
  )
}

export default Banner

