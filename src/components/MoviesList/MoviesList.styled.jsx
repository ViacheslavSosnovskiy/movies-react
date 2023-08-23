import styled from 'styled-components'

export const Section = styled.section`
    padding: 80px 80px;

    @media screen and (min-width: 768px) {
        padding: 100px 100px;
    }
`

export const List = styled.ul`
    @media screen and (max-width: 767px) {
        align-items: center;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        margin-left: -30px;
        margin-top: -30px;
    }
`