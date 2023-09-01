import {useEffect, useState} from "react";
import { toast } from "react-hot-toast";
import { getTrandingMovies } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import Hero from "../../components/Hero/Hero";
import Spinner from "../../components/Spinner/Spinner";

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
      {error && toast.error('Not found any movies')}
      <Spinner isLoading={isLoading}/>
      <Hero movies={trandingMovies}/> 
      <MoviesList movies={trandingMovies} />
    </>
  );
};

export default HomePage;
