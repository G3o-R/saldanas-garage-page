import styled from "styled-components";

export const GalleryWaveContainer = styled.div`

`;

export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(90px ,1fr));
    gap: 5px;
    

    /* .img-wrapper{ */
        /* aspect-ratio: 1/1; */
        /* display: content; */
        /* width: 120px; */
        /* background-color: white; */

        /* .img-container{ */
            /* display: flex; */
            /* justify-content: center; */
        /* } */
    /* } */
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
