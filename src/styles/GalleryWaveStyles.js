import styled from "styled-components";

export const GalleryWaveContainer = styled.div`


`;

export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.numofimagesperrow}, 1fr);
    gap: 2px;
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

    &.active{
        img{
            transform: scale(1.1)
        }
    }

    /* &.animation_id-14{
            width: 120%;
    } */
`;
