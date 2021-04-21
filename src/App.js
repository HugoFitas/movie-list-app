import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <MovieList />
      <Switch>
        <Route exact path="/movies" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Redirect to="/movies" />
      </Switch>
    </div>
  );
}

export default App;
