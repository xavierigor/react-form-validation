import { createGlobalStyle, keyframes } from "styled-components";

const animationName = keyframes`
    0% {
        background-position: left;
    }
    100% {
        background-position: right;
    }
`;

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');

    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100vh !important;
        max-height: fit-content !important;
    }

    body {
        @media(max-width: 600px) {
            height: fit-content !important;
        }

        font-family:'Open Sans', sans-serif !important;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        background-size: 400%;
        background-image: linear-gradient(45deg, #5B86E5, #36D1DC);
        background-image: linear-gradient(45deg, #5c258d, #4389a2);
        /* background-image: linear-gradient(45deg, #845ec2, #d65db1, #ff6f91, #ff9671, #ffc75f); */
        animation: ${animationName} 5s infinite alternate;

        @media(max-width: 600px) {
            padding: 30px 0;
        }
    }
`;
