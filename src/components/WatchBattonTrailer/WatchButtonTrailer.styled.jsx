import styled from 'styled-components'

export const Button = styled.a`
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    background-color: transparent;
    background-color: red;
    color: white;
    cursor: pointer;
    opacity: 0.6;
    border-radius: 4px;
    padding: 10px 10px;
    margin-bottom: 10px;
    transition: 250ms linear;

    &:hover {
        transform: scale(1.1);
        opacity: 1;
    }
`