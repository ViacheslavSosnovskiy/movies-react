import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Item = styled.li`
    border-radius: 4px;
    overflow: hidden;
    transition: transform 250ms linear;

    &:hover, 
    &:focus {
        transform: scale(1.1)
    }

    @media screen and (max-width: 767px) {       
        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }

    @media screen and (min-width: 768px) {
        flex-basis: calc(100% / 2 - 30px);
        margin-left: 30px;
        margin-top: 30px;
    }

    @media screen and (min-width: 992px) {
        flex-basis: calc(100% / 3 - 30px);
    }
        
    @media screen and (min-width: 1200px) {
        flex-basis: calc(100% / 4 - 30px);
    }
`
export const MovieLink = styled(Link)`
    text-decoration: none
`
export const RatingWrapper = styled.div`
    position: relative;
    top: 20px;
    left: 10px;
`
export const Image = styled.img`
    border-radius: 4px;
`
export const DescriptionWrapper = styled.div`
    position: relative;
    padding-top: 30px;
    padding-bottom: 30px;
`
export const Title = styled.h2`
    text-align: center;
    font-size: 24px;
    line-height: 1.36;
    font-weight: bold;
    color: white;

    @media screen and (min-width: 480px) {
        font-size: 40px;
        line-height: 1.16;
    }

    @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 1.16;
    }
`
export const Text = styled.p`
    position: absolute;
    top: 0px;
    right: 0px;

    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    color: grey;

    @media screen and (min-width: 480px) and (max-width: 767px) {
        font-size: 24px;
    }
`