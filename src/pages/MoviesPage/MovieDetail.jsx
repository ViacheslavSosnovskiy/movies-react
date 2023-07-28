import React from "react";
import { Link, Outlet } from "react-router-dom";

const MovieDetail = () => {
  return (
    <>
      <h2>MovieDetail</h2>

      <Link to="reviews">Descriptio</Link>
      <Link to="cast">Cast</Link>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetail;
