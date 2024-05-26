import styled from "styled-components";

export const CardStyles = styled.div`
    width: 12.5rem;
    background-color: transparent;
    color: white;
`;

export const ImageContainer = styled.div`
    width: 7rem;
    overflow: hidden;
    max-height: 7rem;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
`;