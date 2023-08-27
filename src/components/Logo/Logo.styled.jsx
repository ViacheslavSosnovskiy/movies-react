import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LogoLink = styled(Link)`
    display: block;
    font-size: 12px;
    line-height: 1.14;
    padding: 10px 10px;
    color: white;
    transition: 250ms linear;

    &:hover,
    &:focus {
        color: gray;
    }

    @media screen and (min-width: 480px) {
        font-size: 14px;
        padding: 12px 12px;
    }

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`
export const LogoWrapper = styled.span`
    color: gray;
`