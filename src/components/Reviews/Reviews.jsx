import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/api";
import { Container } from '../../globalStyles'
import { ReviewsItem, ReviewsText, ReviewsTitle } from "./Reviews.styled";
import { toast } from "react-hot-toast";
import Spinner from "../Spinner/Spinner";

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
    <Container>
      {error && toast.error('Sorry, we do not have any reviews for this movie')}
      <Spinner isLoading={isLoading}/>
      <ul>
        {movieReviews.map(({id, author, content, created_at}) => (
          <ReviewsItem key={id}>
            <ReviewsTitle>Author: {author}</ReviewsTitle>
            <ReviewsText>{content}</ReviewsText>
            <ReviewsText>
              <b>Created at: {created_at.slice(0,10)}</b>
            </ReviewsText>
          </ReviewsItem>
        ))}
      </ul>
    </Container>
  );
};

export default Reviews;
