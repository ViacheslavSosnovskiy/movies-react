import styled from 'styled-components'

export const Container = styled.div`
    padding: 50px 50px;
`
export const Article = styled.article`
    display: flex;
    padding: 20px 20px;
    align-items: center;
    background-color: #212121;
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