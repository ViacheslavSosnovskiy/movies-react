import styled from 'styled-components'

export const Section = styled.div`
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
`
export const Input = styled.input`
    padding: 10px;
    width: 60%;
    border: none;
    border-bottom: 2px solid #ffffff;
    font-family: 'DynaPuff', cursive;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.03em;
    line-height: 1.14;
    color: white;
    background-color: transparent;

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        font-family: 'DynaPuff', cursive;
        letter-spacing: 0.03em;
        line-height: 1.14;
        opacity: 0.6;
    }

    &:focus {
        outline: none;
    }
`
export const Button = styled.button`
    border: none;
    padding: 6px 6px;
    // outline: 1px solid orange;
    color: white;
    background-color: transparent;
    align-items: center;
    cursor: pointer;
`