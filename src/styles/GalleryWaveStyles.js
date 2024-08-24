import styled from "styled-components";

export const GalleryWaveContainer = styled.div`

`;

export const WaveGalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px ,1fr));
    gap: 5px;
    

    .img-wrapper{
        aspect-ratio: 1/1;
        display: content;
        /* width: 120px; */
        background-color: white;

        .img-container{
            display: flex;
            justify-content: center;
        }
    }
`;