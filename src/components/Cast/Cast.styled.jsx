import styled from 'styled-components'

export const CastContainer = styled.div`
    padding: 20px 20px;
`

export const CastList = styled.ul`
    @media screen and (min-width: 551px) {
        display: flex;
        flex-wrap: wrap;

        margin-left: -30px;
        margin-top: -30px;
      }
`
export const CastItem = styled.li`
    margin-left: 30px;
    margin-top: 30px;

    @media screen and (max-width: 550px) {
        margin-bottom: 30px;

        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }

    @media screen and (min-width: 551px) and (max-width: 767px) {
        flex-basis: calc(100% / 2 - 30px);
        // margin-left: 30px;
        // margin-top: 30px;
    }

    @media screen and (min-width: 768px) and (max-width: 899px) {
        flex-basis: calc(100% / 3 - 30px);
        // margin-left: 30px;
        // margin-top: 30px;
    }

    @media screen and (min-width: 900px) and (max-width: 1100px) {
        flex-basis: calc(100% / 4 - 30px);
        // margin-left: 30px;
        // margin-top: 30px;
    }
        
    @media screen and (min-width: 1200px) {
        flex-basis: calc(100% / 5 - 30px);
    }
`
export const CastImage = styled.img`
    height: 100%;
    object-fit: cover;	
    border-radius: 4px; 
    width: 190px;
    height: 250px;
`
export const CastTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    line-height: 1.16;
    margin-bottom: 4px;
`

export const CastText = styled.p`
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: gray;
`