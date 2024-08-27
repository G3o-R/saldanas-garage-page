import styled from "styled-components";

export const GalleryWaveContainer = styled.div`

`;

export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px ,1fr));
    gap: 2px;
    
    @media (min-width: 430px ) {
    grid-template-columns: repeat(auto-fit, minmax(65px ,1fr));
    }

    @media (min-width: 465px ) {
    grid-template-columns: repeat(auto-fit, minmax(70px ,1fr));
    }

    @media (min-width: 500px ) {
    grid-template-columns: repeat(auto-fit, minmax(75px ,1fr));
    }

    @media (min-width: 535px ) {
    grid-template-columns: repeat(auto-fit, minmax(80px ,1fr));
    }

    @media (min-width: 570px ) {
    grid-template-columns: repeat(auto-fit, minmax(85px ,1fr));
    }

    @media (min-width: 605px ) {
    grid-template-columns: repeat(auto-fit, minmax(90px ,1fr));
    }

    @media (min-width: 730px ) {
    grid-template-columns: repeat(auto-fit, minmax(95px ,1fr));
    }
    @media (min-width: 1760px ) {
    grid-template-columns: repeat(auto-fit, minmax(150px ,1fr));
    }
`;

export const ImgWrapper = styled.div`
    display: contents;
    /* max-width: 120px; */
    `;

export const ImgContainer = styled.div`
    object-fit: cover;
    aspect-ratio: 1/1;
    overflow: hidden;

    img{
        width: 100%;
    }
`;
