import styled from 'styled-components'


export const Container = styled.div`
    display:flex;
    flex-direction: column;
    text-align: center;
    padding:165px 45px;
`;

export const Title = styled.h1`
    color:white;
    max-width: 640px;
    font-size:50px; 
    font-weight: 500;
    margin:auto;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;
export const SubTitle = styled.h2`
    color: white;
    font-size:50px;
    font-weight: 500;
    margin: auto;

    @media (max-width: 600px){
        font-size:35px;
    }

`;