import {useEffect, useState} from "react";
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
    {isLoading && <div>Loading...</div>}
    {error && alert(`${error.message}`)}
    {/* // {trandingMovies[Math.floor(Math.random() * 20)] => 
    //   <Hero movie={movie}/>
    // )}
     */}
      <Hero movies={trandingMovies}/> 

      <MoviesList movies={trandingMovies} />
    </>
  );
};

export default HomePage;
