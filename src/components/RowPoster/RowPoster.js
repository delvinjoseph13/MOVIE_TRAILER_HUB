import React, { useEffect, useState } from 'react'
import './RowPoster.css'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios  from '../../axios'
function RowPoster(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>
    {
      console.log(response.data)
      setMovies(response.data.results)
    })
  }, [])
  
  return (
    <div className='row'>

        <h2>{props.title}</h2>

        <div className="posters">
        {movies.map((obj)=>
            <img className='posterimg' src={`${imageUrl+obj.backdrop_path}`} alt="title" />

   )}

        </div>

    </div>
  )
}

export default RowPoster