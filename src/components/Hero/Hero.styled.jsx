import styled from 'styled-components'
// import image from '../../img/space.jpg'
// import { Container } from '../../globalStyles';

export const HeroContainer = styled.div`
    text-align: center;
    padding: 120px 60px;

    @media screen and (min-width: 768px) {
        padding: 220px 220px;
      }
`

export const HeroWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.6;

    background-image: linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 100%),
        url(${props => props.backgroundImage});
`;

export const HeroTitle = styled.h1`
    font-size: 90px;
    text-transform uppercase;
    font-weight: bold;
    

`
export const HeroText = styled.p`
    font-size: 24px;
`