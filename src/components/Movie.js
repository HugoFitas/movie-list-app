import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ title, year, director, id }) => {
  return (
    <div>
      <Link to={`/movies/${id}`}>View details</Link>
      <h1>
        {title} ({year})
      </h1>
      <p>{director}</p>
    </div>
  );
};

export default Movie;
