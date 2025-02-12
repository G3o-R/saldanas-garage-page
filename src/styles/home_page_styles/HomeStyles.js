import styled from "styled-components";

export const HomePage = styled.div`


h1{
    font-family: Allura-Regular;
    font-weight: 500;
    color: #ffffff;
    height: 100%;

    font-size: 3.5rem;
    @media screen and (min-width:768px){
        font-size: 4.375rem;
    }

    @media screen and (min-width: 1080px){
        font-size:  5.75rem;
    }
}

h2{
    font-family: FiraMono-Bold;
    color: #ffffff;
    text-decoration: underline;
    font-size:  1.75rem;
    @media screen and (min-width: 1080px){
        font-size: 2.25rem;
    }
}

p, li{
    font-family: FiraMono-Medium;
    color: #ffffff;
    font-size: 1.25rem;
    /* @media screen and (min-width: 1080px){
        font-size: 1.25rem;
    } */
    @media screen and (min-width: 1080px){
        font-size: 1.5rem;
    }
}

section {
    color: #ffffff;
}
`;