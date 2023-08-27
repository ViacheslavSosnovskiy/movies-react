import styled from 'styled-components'

export const WrapperFooter = styled.footer`
    height: 40px;
    display: flex;
    align-items: center;
    border-top: 1px solid gray;
`
export const TitleFooter = styled.h3`
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 8px;
    color: white;

    @media screen and (min-width: 480px) {
        font-size: 10px;
    }

    @media screen and (min-width: 768px) {
        font-size: 12px;
    }
`
export const LinkFooter = styled.a`
    display: flex;
    align-items: center;
    font-size: 8px;
    color: gray;
    cursor: pointer;
    transition: 250ms linear;

    &:hover,
    &:focus {
        color: white;
    }

    @media screen and (min-width: 480px) {
        font-size: 12px;
    }
`