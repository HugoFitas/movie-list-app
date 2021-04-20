import React from "react";

const Movie = ({ title, year, director }) => {
  return (
    <div>
      <h1>
        {title} ({year})
      </h1>
      <p>{director}</p>
    </div>
  );
};

export default Movie;
