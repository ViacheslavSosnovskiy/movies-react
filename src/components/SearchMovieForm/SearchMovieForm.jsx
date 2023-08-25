import { useState } from "react";
import { FaSistrix } from 'react-icons/fa'
import { toast } from "react-hot-toast";
import { Container } from '../../globalStyles'
import { Form, Button, Input, Title, WrapperInput } from "./SearchMovieForm.styled";

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
      <Container>
        <Title>Search your favorite Movie</Title>
        <Form onSubmit={handleFormSubmit}>
          <WrapperInput>
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
          </WrapperInput>
        </Form>
      </Container>
  );
};

export default SearchMovieForm;
