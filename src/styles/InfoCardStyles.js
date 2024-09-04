import styled from "styled-components";

export const InfoCardWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
`;

export const InfoContainer = styled.div`
    background: #202020;
    padding: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
`;

export const TitleCardContainer = styled.div`
    margin-bottom: 20px;

    h1 {
        font-size: 2.5rem;
        color: #f7f7f7;
        font-family: 'Roboto', sans-serif;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
`;

export const TextBox = styled.div`
    font-size: 1rem;
    line-height: 1.8;
    color: #f7f7f7;
    font-family: 'Open Sans', sans-serif;

    p {
        text-align: left;
        margin: 0;
    }
`;