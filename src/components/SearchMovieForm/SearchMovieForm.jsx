import { useState } from "react";
import { FaSistrix } from 'react-icons/fa'
import { Button, Input, Section } from "./SearchMovieForm.styled";
import { toast } from "react-hot-toast";

const SearchMovieForm = ({value, onSubmit }) => {
  const [query, setQuery] = useState(value)

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(query.trim() === '') {
      return toast.error('Sorry, enter something in search line.')
    }
    onSubmit(query);
  };
  return (
    <Section>
      <h2>Search your favorite Movie</h2>
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="search."
          value={query}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <Button type="submit">
          <FaSistrix size="2em" />
        </Button>
      </form>
    </Section>
  );
};

export default SearchMovieForm;
