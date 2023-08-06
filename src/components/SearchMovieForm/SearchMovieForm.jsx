import { useState } from "react";

const SearchMovieForm = ({value, onSubmit }) => {
  const [query, setQuery] = useState(value)

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(query.trim() === '') {
      return alert('Sorry, enter something in search line.')
    }

    onSubmit(query);
  };
  return (
    <div>
      <h2>Search Movie</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="search."
          value={query}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchMovieForm;
