import styled from "styled-components";

export const CardsWrapper = styled.div`
    width: 100%;
    height: 540px;
  /* margin-top: 20px; */
    display: flex;
    justify-content: center;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    /* padding: 30px; */
    /* border-radius: 15px; */
    /* box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4); */
    max-width: 400px;
    width: 100%;

    @media screen and (min-width: 800px){
        flex-direction: row;
        width: 100;
        max-width: 100%;
    }
`;

export const StyledFlexColumnWrapper = styled.div`
    background-color: #1D242B;
    width: 100%;
    max-width: 21rem;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    text-align: left;

    span {
        font-family: Sanchez;
        color: #f7f7f7;
        line-height: 2;
        font-size: 1rem;
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        svg {
            margin-right: 10px;
            /* width: 24px; */
            height: 52px;
            fill: #f7f7f7;
            font-weight: 700;
        }
    }
`;