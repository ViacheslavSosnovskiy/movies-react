import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        font-family: 'DynaPuff', cursive;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 0.03em;
        color: white;
        background-color: #04152d;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0px;
    }

    ul,
    ol,
    li {
        margin: 0px;
        padding: 0px;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: black;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
      }
`;

// export const Container = styled.div`
//     // width: 100%;

//     margin: 0 auto;
//     padding: 0 15px;
      
//         @media screen and (min-width: 480px) {
//           width: 480px;
//         }
      
//         @media screen and (min-width: 768px) {
//           width: 768px;
//         }
      
//         @media screen and (min-width: 1200px) {
//           width: 1200px;
//         //   padding: 0 30px;
//         }
//       }
// `

export default GlobalStyle