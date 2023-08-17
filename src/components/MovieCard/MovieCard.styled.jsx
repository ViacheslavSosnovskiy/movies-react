import styled from 'styled-components'

export const Container = styled.div`
    padding: 50px 50px;
`
export const ArticleWrapper = styled.div`
    background-color: #212121;
     background-image: ${props =>
      props.backdrop
        ? `url('https://image.tmdb.org/t/p/w500/${props.backdrop}')`
        : `url("")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const Article = styled.article`
    display: flex;
    padding: 20px 20px;
    border-radius: 4px;
    align-items: center;
`
export const PosterWrapper = styled.div`
    width: 280px;
    margin-right: 50px;
`
export const Image = styled.img`
    border-radius: 4px;
`
export const MovieTitle = styled.h1`
    font-size: 40px;
    margin-bottom: 40px;
    text-transform uppercase;
    font-weight: bold;
`
export const Title = styled.h2`
    font-size:20px;
    margin-bottom: 10px;
`
export const Text = styled.p`
    max-width: 500px;
    margin-bottom: 16px;
    color: gray;
`
export const List = styled.ul`
    display: flex;
    align-items: center;
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