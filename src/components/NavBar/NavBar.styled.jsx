import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
`
export const NavBarLink = styled(NavLink)`
    display: block;
    font-size: 12px;
    line-height: 1.14;
    padding: 10px 10px;
    align-items: center;
    color: white;
    transition: 250ms linear;

    &:hover,
    &:focus {
        color: gray;
    }

    &:not(:last-child) {
        margin-right: 4px;
    }

    @media screen and (min-width: 480px) {
        font-size: 14px;
        padding: 12px 12px;

        &:not(:last-child) {
            margin-right: 10px;
        }
    }

    @media screen and (min-width: 768px) {
        font-size: 16px;

        &:not(:last-child) {
            margin-right: 30px;
        }
    }

`