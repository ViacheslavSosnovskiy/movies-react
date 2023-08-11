import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LogoLink = styled(Link)`
    color: white;
    display: block;
    font-size: 16px;
    line-height: 1.14;
    padding: 12px 12px;

    &:hover,
    &:focus {
        color: yellow;
    }
`