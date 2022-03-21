import styled, {createGlobalStyle} from 'styled-components/macro'

export const LockBody = createGlobalStyle`
    body {
        overvlow: hidden;
    }
`;

export const ReleaseBody = createGlobalStyle`
    body {
        overflow: visible;
    }
`;

export const Spinner = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 999;

    :after {
        content: '';
        position:absolute;
        top:50%;
        background-image: url(/images/misc/spinner.png);
        background-size: contain;
        background-repeat: no-repeat;
        margin-top: -150px;
        margin-left: -75px;
        width: 150px;
        height: 150px;
        animation-name: spin;
        animation-duration: 1000ns;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
     @-ms-keyframes spin {
         from {
             -ms-transform: rotate(0deg);
         }
         to {
             -ms-transform: rotate(360deg)
         }
     }
     @-moz-keyframes spin {
         from {
            -moz-transform: rotate(0deg);
         }
         to {
             -moz-transform: rotate(360deg)
         }
     }
     @-webkit-keyframes spin {
         from {
             -webkit-transform: rotate(0deg);
         }
         to {
             -webkit-transform: rotate(360deg)
         }
     }

     @keyframes spin {
         from {
             transform: rotate(0deg);
         }
         to {
             tranform: rotate(360deg);
         }
     }
`;

export const Picture = styled.img``;