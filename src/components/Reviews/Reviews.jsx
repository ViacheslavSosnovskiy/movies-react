import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/api";

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const {movieId} = useParams();

  useEffect(() => {
    async function getMovieReviewsById() {
      setIsLoading(true)
      try {
        const reviews = await getMovieReviews(movieId)
      setMovieReviews(reviews)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getMovieReviewsById()
  }, [movieId])

  return (
    <>
      {error && <h2>Sorry, we do not have any reviews for this movie.</h2>}
      {isLoading && <div>Loading...</div>}
      <ul>
        {movieReviews.map(({id, author, content, created_at}) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
            <p>Created at: {created_at.slice(0,10)}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
