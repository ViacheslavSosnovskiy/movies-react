import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetails from "./pages/MoviesPage/MovieDetail";
import Reviews from "./pages/MoviesPage/Reviews/Reviews";
import Cast from "./pages/MoviesPage/Cast/Cast";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
