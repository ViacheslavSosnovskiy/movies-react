import { HeroContainer, HeroText, HeroTitle, HeroWrapper } from './Hero.styled'

const Hero = ({movies}) => {

  console.log('movies -->',movies)

  let randomMovie = null
  if(movies.length > 0 ) {
    const randomIndex = Math.floor(Math.random() * movies.length)
    randomMovie = movies[randomIndex]
  }
  console.log('randomMovie -->', randomMovie)


  const imgUrl = "https://image.tmdb.org/t/p/original"

  const backgroundImage = `${imgUrl}${randomMovie.backdrop_path}` 
    ? `${imgUrl}${randomMovie.backdrop_path}`
    : `${imgUrl}${randomMovie.poster_path}`

  console.log("backgroundImage -->", backgroundImage)

  return (
    (
        <section>
            <HeroWrapper backgroundImage={backgroundImage}>
              <HeroContainer>
                <HeroTitle>
                  Welcome
                </HeroTitle>
                <HeroText>
                  Millions of movies, TV shows and people to discover. Explore now.
                </HeroText>
              </HeroContainer>
            </HeroWrapper>
        </section>
    )
  )
}

export default Hero