import React from "react";
import { Link, Outlet, useLocation, useParams} from "react-router-dom";

const MovieDetail = () => {
  const location = useLocation()
  const {movieId} = useParams()

  return (
    <>
      <h2>MovieDetail {movieId}</h2>

    <Link to="/movies" state={location.state?.from ?? '/movies'}>Back</Link>

      <ul>
        <li>
          <Link to="reviews" state={location.state?.from ?? '/movies'}>Descriptio</Link>
        </li>
        <li>
          <Link to="cast" state={location.state?.from ?? '/movies'}>Cast</Link>
        </li>

      </ul>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetail;
