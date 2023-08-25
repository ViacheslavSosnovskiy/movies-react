import styled from 'styled-components'

export const Form = styled.form`
    text-align: center;
`
export const WrapperInput = styled.div`
    position: relative;
`
export const Input = styled.input`
    padding: 10px 36px;
    width: 60%;
    border: none;
    border-bottom: 2px solid white;
    font-family: 'DynaPuff', cursive;
    font-weight: 400;
    font-size: 20px;
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
    position: absolute;
    top: 16%;
    left: 81%;
    border: none;
    padding: 0px;
    color: white;
    background-color: transparent;
    align-items: center;
    cursor: pointer;
`
export const Title = styled.h2`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    
    @media screen and (min-width: 768px) {
        font-size: 40px;
        margin-bottom: 40px;
    }
`