import React from "react";
import axios from "axios";
import moviesData from "./Data";
import Movie from "./Movie";
import { Link } from "react-router-dom";

const MovieDetails = (props) => {
  const id = props.match.params.id;
  /* console.log(id); */

  const [movies, setMovies] = React.useState(moviesData);

  React.useEffect(() => {
    fetchMovies();
  }, [id]);

  const fetchMovies = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
      )
      .then((response) => setMovies(response.data.movies))
      .catch((error) => console.log(error));
  };

  const filteredMoviesId = movies
    .filter((movie) => {
      return movie.id == id;
    })
    .map((movie) => {
      return <Movie key={movie.id} {...movie} />;
    });
  console.log(filteredMoviesId);

  return (
    <div>
      {filteredMoviesId}
      {/* <Link to="/movies">Go back</Link> */}
      <button onClick={() => props.history.push("/movies")}>Go Back</button>
    </div>
  );
};

export default MovieDetails;
