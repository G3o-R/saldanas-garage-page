import styled from "styled-components";

export const CardsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    @media screen and (min-width: 768px) {
        height: 540px;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 768px){
        flex-direction: row;
        width: 100;
        max-width: 100%;
    }

    @media screen and (max-width: 1450px) {
        .image-2{
            display:none;
        }
    }

    @media screen and (max-width: 1150px) {
        .image-1{
            display:none;
        }
    }
`;

export const ImageContainer = styled.div`
    max-width: 21rem;
    object-fit: contain;
    overflow: hidden;
    position: relative;

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to oklab, #0d192b80 5%, #00000000 );
    z-index: 1;
  }

    img{
        width: 100%;
    }
`;

export const StyledFlexColumnWrapper = styled.div`
    /* background-color: #1D242B; */
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