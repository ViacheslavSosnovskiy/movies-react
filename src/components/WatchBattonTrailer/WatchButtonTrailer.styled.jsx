import styled from 'styled-components'

export const Button = styled.button`
    // position: absolute;
    // top: 5%;
    // left: 1%;
    // display: flex;
    // align-items: center;
    // background-color: transparent;
    background-color: red;
    color: white;
    border: none;
    opacity: 0.4;
    padding: 12px 12px;
    margin-bottom: 10px;
    // margin-right: 5px;
    // margin-bottom: 5px;
    transition: linear 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: scale(1.15);
        opacity: 1;
    }
`