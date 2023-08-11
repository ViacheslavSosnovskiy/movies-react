import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Item = styled.li`
    border-radius: 4px;
    flex-basis: calc(100% / 2 - 30px);
    margin-left: 30px;
    margin-top: 30px;

        @media screen and (min-width: 768px) {
            flex-basis: calc(100% / 3 - 30px);
            margin-left: 30px;
            margin-top: 30px;
        }
        
        @media screen and (min-width: 1200px) {
            flex-basis: calc(100% / 5 - 30px);
        }


        &:not(:last-child) {
            @media screen and (max-width: 767px) {
                margin-bottom: 30px;
            }
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
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 4px;
`
export const DescriptionWrapper = styled.div`
    position: relative;
    padding-top: 30px;
    padding-bottom: 30px;

    margin-left: auto;
    margin-right: auto;
`

export const Title = styled.h3`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.16;
    color: white;
`
export const Text = styled.p`
    position: absolute;
    top: 0px;
    right: 0px;

    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    color: grey;
`