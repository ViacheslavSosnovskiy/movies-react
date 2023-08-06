import {useEffect, useState} from "react";
import { getTrandingMovies } from "../../services/api";
import MoviesList from "../../components/MoviesList/MoviesList";

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
    <h2>Tranding movies this week</h2>
    {isLoading && <div>Loading...</div>}
    {error && alert(`${error.message}`)}
     <MoviesList movies={trandingMovies} />
    </>
  );
};

export default HomePage;
