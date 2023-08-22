import {useEffect, useState} from "react";
import { toast } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import { getTrandingMovies } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {
  const [trandingMovies, setTrandingMovies] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getPopularMovies() 
    
    async function getPopularMovies() {
      setIsLoading(true)
      try {
        const trandingMovies = await getTrandingMovies()
        setTrandingMovies(trandingMovies)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
  }, [])

  return (
    <>
      {isLoading && <RotatingLines strokeColor="white" />}
      {error && toast.error('Not found any movies')}
      <Hero movies={trandingMovies}/> 
      <MoviesList movies={trandingMovies} />
    </>
  );
};

export default HomePage;
