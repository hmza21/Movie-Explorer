import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Movies from "./Movies";

const MovieDetails = (props) => {

  const {id} = useParams();
  const [movie, setMovie] = useState({})

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${props.KEY}`)
      .then(response => {
        setMovie(response.data);
        console.log(response.data.genres)
      })
  }, [id, props.KEY]);


  return (
    <div style={{ display: "grid", alignItems: "center" }}>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
      <h1><strong>{movie.title}</strong></h1>
      <p>{movie.overview}</p>
      <h3>Genres:</h3>
      <ul>
        {movie.genres?.map((genre, index) => {
          return (
            <li key={index}>
              {genre.name}
            </li>
          )
        })}
      </ul>
    </div>
  )

}

export default MovieDetails
