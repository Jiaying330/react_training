import { useState, useEffect } from "react";

import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";
export default function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=starwars&apikey=263d22d8")
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.Search);
      });
  }, []);
  return (
    <div className="movie__list">
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
}
