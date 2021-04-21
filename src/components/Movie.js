import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ title, year, director, id }) => {
  return (
    <div>
      <h1>
        {title} ({year})
      </h1>
      <p>{director}</p>
      <Link to={`/movies/${id}`}>View details</Link>
    </div>
  );
};

export default Movie;
