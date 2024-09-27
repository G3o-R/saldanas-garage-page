import styled from "styled-components";

export const NavWrapper = styled.div`
    margin-left: 20px;
    height: 540px;
    
    @media screen and (max-width: 1650px) {
        width: 100%;
        height: fit-content;
        margin-left: 5rem;
    }
    `;

export const NavContainer = styled.div`
    width: max-content;
    margin-top: 45px;

`;

export const Navigator = styled.section`
    h2{
        cursor: pointer;
        text-align: left;
        font-weight: 700px;
        color: #adadad;
        transition: color 0.3s ease-in-out;
        &:hover{
            color: #f7f7f7;
        }
    }
`;