import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard"

const Movies = (props) => {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://api.themoviedb.org/3/movie/popular?api_key=" + props.KEY)
      .then(response => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if(loading)  return <p>Loading Movies...</p>;
  if(error)  return <p>{error}</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>

      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie, index) => {
          return (
            <li key={index} style={{ listStyle: "none", display: "inline-block", padding: "10px"}}>
              <MovieCard movie={movie} />
            </li>
          )
        })
        }
      </ul>

    </div>
  )
}

export default Movies;
