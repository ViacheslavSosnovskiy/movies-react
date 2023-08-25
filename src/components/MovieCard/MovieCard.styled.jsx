import styled from 'styled-components'

export const ArticleWrapper = styled.div`
    border-radius: 4px;

    @media screen and (max-width: 767px) {
        text-align: center;
        margin-bottom: 20px;
    }
    
    @media screen and (min-width: 768px) {
        background-image: linear-gradient(180deg, rgba(4, 21, 45, 0.5) 0%, #04152d 100%), 
        url(${props => props.backdrop});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin-bottom: 40px;
    }
`

export const Article = styled.article`
    padding: 20px 20px;
    border-radius: 4px;
    align-items: center;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`
export const PosterWrapper = styled.div`
    @media screen and (max-width: 767px) {
        max-width: 680px;
        margin-bottom: 20px;
    }
    @media screen and (min-width: 768px) {
        max-width: 280px;
        margin-right: 50px; 
    }
`
export const Image = styled.img`
    border-radius: 4px;
`
export const MovieTitle = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
    text-transform uppercase;
    font-weight: bold;

    @media screen and (max-width: 420px) {
        font-size: 28px;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 10px;
    }
`
export const Title = styled.h2`
    @media screen and (max-width: 767px) {
        font-size: 24px;
        margin-bottom: 20px;
    }

    @media screen and (min-width: 768px) {
        font-size:20px;
        margin-bottom: 10px;
    }
`
export const Text = styled.p`
        max-width: 600px;
        margin-bottom: 16px;
        color: gray;
`
export const List = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (max-width: 767px) {
        justify-content: center;
    }
`
export const Item = styled.li`
    border: none;
    border-radius: 4px;
    padding: 10px 10px;
    background-color: white;
    color: #04152d;

    &:not(:last-child) {
        margin-right: 30px;
    }
`