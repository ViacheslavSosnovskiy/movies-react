import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import GlobalStyle from "./globalStyles";

import Layout from "./components/Layout/Layout";
import Reviews from "./components/Reviews/Reviews";
import Cast from "./components/Cast/Cast";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('./pages/MoviesPage/MovieDetail'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Toaster toastOptions={{ duration: 3000 }} />
    
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
    </>
  );
};

export default App;
