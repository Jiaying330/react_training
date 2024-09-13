/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./MovieCard.css";
export default function MovieCard({ movie }) {
  const { Title, Year, Poster } = movie;
  const [rating, setRating] = useState("");
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?t=${Title}&apikey=263d22d8`)
      .then((res) => res.json())
      .then((res) => setRating(res.imdbRating));
  }, []);
  return (
    <>
      <div className="movie__card">
        <div className="movie__image">
          <img className="movie__image" src={Poster} alt="movie moster" />
        </div>
        <div className="movie__info">
          <h2 className="movie__title">{Title}</h2>
          <p className="movie__infos">
            {Year} <span>{rating}</span>
          </p>
        </div>
      </div>
    </>
  );
}
