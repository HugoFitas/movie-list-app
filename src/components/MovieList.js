import React from "react";
import axios from "axios";
import Movie from "./Movie";
import moviesData from "./Data.js";

const MovieList = () => {
  const [movies, setMovies] = React.useState(moviesData);

  React.useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
      )
      .then((response) => setMovies(response.data.movies))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {movies.map((movie) => {
        return <Movie {...movie} />;
      })}
    </div>
  );
};

export default MovieList;
