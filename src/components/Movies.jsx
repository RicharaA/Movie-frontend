import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { loadMovies } from "../services/api";

function Movies() {
  const [mvies, setMovies] = useState([]);

  useEffect(() => {
    const lfilm = async () => {
      try {
        const pFilm = await loadMovies();
        setMovies(pFilm);
      } catch (err) {
        console.log(err);
      }
    };
    lfilm();
  }, []);

  return(
  <div className="movies-grid">
    {mvies.map((movie) => (
      <MovieCard movie={movie} key={movie.id} />
    ))}
  </div>
  );
}

export default Movies;
