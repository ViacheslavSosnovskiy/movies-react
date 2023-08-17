import styled from 'styled-components'

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, - 50%)
    min-height: 400px;
    max-width: 650px;
    width: 100%;
    padding: 12px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    transition: transform 300ms linear;
`