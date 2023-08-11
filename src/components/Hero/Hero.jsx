import { HeroContainer, HeroText, HeroTitle, HeroWrapper } from './Hero.styled'

// const images = [
//   { url: '../../img/space-1.jpeg' },
//   { url: '../../img/space-2.jpeg'},
//   { url: '../../img/space-3.jpeg' },
//   { url: '../../img/space-4.jpeg' },
//   { url: '../../img/space-5.jpeg' },
// ];


//   const mainImage = images.map(({url}) => (url))
//   console.log(mainImage)

const Hero = () => {
  return (
    (
        <section>
            <HeroWrapper>
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