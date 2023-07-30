import React, { useEffect, useState } from 'react'
import './RowPoster.css'
import YouTube from 'react-youtube';
import {imageUrl,API_KEY} from '../../constants/constants';

import axios  from '../../axios'
function RowPoster(props) {
  const [movies, setMovies] = useState([])
  const [urlid,setUrlId]=useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>
    {
      console.log(response.data)
      setMovies(response.data.results)
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    autoplay:1
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&languge=en-US`).then((response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
      else{
      console.log(response.data)
      }
    }))
  }
 
  return (
    <div className='row'>

        <h2>{props.title}</h2>

        <div className="posters">
        {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'posterimg'} src={`${imageUrl+obj.backdrop_path}`} alt="title" />

   )}

        </div>
       {urlid && <YouTube opts={opts} videoId={urlid.key} /> }
    </div>
  )
}

export default RowPoster