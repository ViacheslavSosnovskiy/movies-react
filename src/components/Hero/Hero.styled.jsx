import styled from 'styled-components'

export const HeroContainer = styled.div`
    text-align: center;
    padding: 80px 80px;

    @media screen and (min-width: 480px) {
        padding: 140px 140px;
    }

    @media screen and (min-width: 768px) {
        padding: 200px 200px;
    }

    @media screen and (min-width: 1200px) {
        padding: 240px 240px;
    }
`

export const HeroWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.6;
    max-width: 767px;

    background-image: linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 100%),
        url(${props => props.backgroundImage});

    // @media screen and (max-width: 479px) {
    //     max-width: 479px;
    // }

    // @media screen and (max-width: 767px) {
    //     max-width: 767px;
    // }

    // @media screen and (max-width: 992px) {
    //     max-width: 992px;
    // }
    
    // @media screen and (max-width: 1199px) {
    //     max-width: 1199px;
    // }

    @media screen and (min-width: 768px) {
        max-width: 1199px;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1600px;
    }
`

export const HeroTitle = styled.h1`
    font-size: 34px;
    text-transform uppercase;
    font-weight: bold;
    
    @media screen and (min-width: 768px) {
        font-size: 90px;
    }
`
export const HeroText = styled.p`
    font-size: 14px;   

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 22px;
    }
`