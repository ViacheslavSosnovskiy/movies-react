import styled from 'styled-components'

// export const CastContainer = styled(Container)`
//     padding: 20px 20px;
// `
export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 479px) {
        margin-left: -10px;
        margin-top: -10px;
    }

    @media screen and (min-width: 480px) {
        margin-left: -30px;
        margin-top: -30px;
      }
`
export const CastItem = styled.li`
    @media screen and (max-width: 479px) {
        flex-basis: calc(100% / 2 - 10px);
        margin-left: 10px;
        margin-top: 10px;
    }

    @media screen and (min-width: 480px) {
        flex-basis: calc(100% / 3 - 30px);
        margin-left: 30px;
        margin-top: 30px;
    }

    @media screen and (min-width: 768px) {
        flex-basis: calc(100% / 4 - 30px);
    }
        
    @media screen and (min-width: 1200px) {
        flex-basis: calc(100% / 5 - 30px);
    }
`
export const CastWrapperImage = styled.div`
    margin-bottom: 10px;
`
export const CastImage = styled.img`
    border-radius: 4px; 
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