import styled from "styled-components";

export const ReviewDisplay = styled.div`
  position: absolute;
  background-color: #212930;
  padding: 16px;
  margin: 0px 0px 8px 10px;
  bottom: 0;
  left: 0;
  width: 300px;
  min-height: 180px;
  box-shadow: 4px 4px #242424;;
  color: white;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
`;

export const Reviewer = styled.h1`
  margin: 0;
  font-size: 1.5em;
  color: silver;
`;

export const Header = styled.div`

`;

export const ReviewContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin: 16px 24px 0px 24px;
  p{
    font-size: 1em;
    color: white;
    line-height: 1.5;
  }
`;