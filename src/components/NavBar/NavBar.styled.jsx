import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
`

export const NavBarLink = styled(NavLink)`
    color: white;
    display: block;
    font-size: 14px;
    line-height: 1.14;
    padding: 12px 12px;
    align-items: center;
    transition: 250ms linear;

    &:hover,
    &:focus {
        color: gray;
    }

    &:not(:last-child) {
        @media screen and (min-width: 768px) {
            margin-right: 30px;
        }
    }

`