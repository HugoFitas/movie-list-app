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

  const [
    areOnlyRecentMoviesDisplayed,
    setAreOnlyRecentMoviesDisplayed,
  ] = React.useState(false);

  const recentMoviesHandler = () => {
    setAreOnlyRecentMoviesDisplayed(!areOnlyRecentMoviesDisplayed);
    console.log(areOnlyRecentMoviesDisplayed);
  };

  const filteredMovies = movies
    .filter((movie) => {
      return !areOnlyRecentMoviesDisplayed || movie.year > 2000;
    })
    .map((movie) => {
      return <Movie {...movie} />;
    });

  return (
    <div>
      <button onClick={recentMoviesHandler}>Click me</button>
      {filteredMovies}
    </div>
  );
};

export default MovieList;
