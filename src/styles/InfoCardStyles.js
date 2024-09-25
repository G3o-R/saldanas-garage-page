import styled from "styled-components";

export const InfoCardWrapper = styled.div`
    width: 100%;
    max-width: 21rem;
    height: 100%;
    background: #202020;
    border-radius: 15px;
    text-align: center;
    /* margin: 5px; */
    @media screen and (max-width: 800px) {
        padding: 20px;
    }
    `;

export const InfoCardContainer = styled.div`
    padding: 20px;
`;

export const TitleCardContainer = styled.div`
    margin-bottom: 20px;
    
    h1 {
        font-size: 2.5rem;
        text-align: left;
        color: #f7f7f7;
        font-family: SourceSerif4,'Roboto', sans-serif;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        /* padding: 0px 10px 0px 10px; */
    }
    `;

export const TextBox = styled.div`
    /* padding: 20px; */
    font-size: 1rem;
    line-height: 1.8;
    color: #f7f7f7;
    font-family: 'Open Sans', sans-serif;
    
    p {
        font-family: Sanchez;
        text-align: left;
        margin: 0;
    }
`;