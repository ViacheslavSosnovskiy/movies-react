import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchMovieForm from "../../components/SearchMovieForm/SearchMovieForm";

const Movies = () => {
  const [userQuery, setUserQuery] = useState("");

  const handleQuery = (newQuery) => {
    if (newQuery === userQuery) {
      return;
    }
    setUserQuery(newQuery);
  };

  return (
    <>
      <h2>Movies</h2>
      <Link to="/movies/:movieId">MovieDetails</Link>

      <SearchMovieForm onSubmit={handleQuery} />
    </>
  );
};

export default Movies;
