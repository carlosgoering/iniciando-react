import {createGlobalStyle} from 'styled-components'

import background1 from '../assets/Background1.svg'
import background2 from '../assets/Background2.svg'

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        background: url(${background2}) no-repeat 1010px,url(${background1}) no-repeat 931px;
        background-size: cover;
        background-color: #F8FdFF;
        font-family: 'Poppins', sans-serif;
    }
    button {
        background-color: transparent;
        font-family: 'Poppins', sans-serif;
        border: none;
        outline:none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`;

export default globalStyle