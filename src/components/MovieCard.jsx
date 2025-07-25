import React from "react";
import noMovie_img from "../assets/no-movie.png";
import start_img from "../assets/star.svg";

const MovieCard = ({ movie }) => {
  const {
    id,
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
  } = movie;

  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : noMovie_img
        }
        alt={title}
      />

      <div className="mt-4">
        <h3 className="">{title}</h3>

        <div className="content">
          <div className="rating">
            <img src={start_img} alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>

          <span>.</span>
          <p className="lang">{original_language}</p>

          <span>.</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
