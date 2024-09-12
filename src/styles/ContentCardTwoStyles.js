import styled from "styled-components";

// have to add media queries so that the size increases along with the screen
export const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    position: relative;
    `;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 32em;
    position: relative;

    &.landscape {
        flex-direction: column;
    }
    &.portrait {
        flex-direction: row;
    }
`;

export const ImageWrapper = styled.div`
    z-index: 2;
    /* background-color: #202020; */
    /* padding: 12px; */
    /* border-radius: 24px; */
`;

export const Imagecontainer = styled.div`
    border-radius: 6px;
    overflow: hidden;
    position: relative;

    &.landscape {
        display: flex;
        align-items: center;
        justify-items: space-between;
        height: 14em;
        max-width: 32em;

        img {
            width: 100%;
            height: auto;
        }
    }
    
    &.portrait {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32em;
        max-width: 12em;

        img {
            height: 100%;
            object-fit: cover;
        }
    }

    @media (min-width: 480px) {
        &.landscape {
            max-width: 36em;
            height: 16em;
        }
        &.portrait {
            max-width: 16em;
        }
    }
`;

export const TextWrapper = styled.div`
    padding: 16px;
    position: relative; 
    z-index: 1;
    `;

export const TextContainer = styled.div`
    display: flex;
    background: rgba(30, 30, 30, .7);
    color: #fff;
    border-radius: 12px;
    flex-direction: column;

    h4{
        font-size: 25px;
    }
    p{
        font-size: 18px;
    }
    
    &.landscape {
        justify-content: center;
        align-items: center;
        height: 14em;
        width: 100%;
        padding: 0em 1em 0em 1em;
        margin: -3em 1.5em 0em 0em;
        p{
            width: 18em;
        }
        
    }
    
    &.portrait {
        height: 100%;
        max-width: 11em;
        width: 100%;
        padding: 2em 1.75em 0em 2.5em;
        margin: 0em 0em 0em -3em;
        align-items: center;
    }

    @media (min-width: 480px) {
        &.landscape {
            height: 16em;
        }
        &.portrait {
            /* width: 16em; */
        }
    }
    
`;
