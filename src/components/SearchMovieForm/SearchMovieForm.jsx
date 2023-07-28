import { useState } from "react";

const SearchMovieForm = ({ onSubmit }) => {
  const [searchMovie, setSearchMovie] = useState();

  const handleInputChange = (event) => {
    setSearchMovie(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchMovie);
    if (searchMovie.trim() === "") {
      return alert("TRY AGAIN!");
    }
    setSearchMovie("");
  };
  return (
    <div>
      <h2>Search Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search."
          value={searchMovie}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchMovieForm;
