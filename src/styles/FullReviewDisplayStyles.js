import styled from "styled-components";

export const ReviewDisplay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0px 0px 5px 10px;
  width: 300px;  /* Adjust width as necessary */
  min-height: 180px;
  background-color: #212930;
  border: 1px solid black;
  box-shadow: 4px 4px #242424;;
  color: white;
  padding: 16px;
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

export const ReviewContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-top: 16px;
  p{
    text-align: left;
    font-size: 1em;
    color: white;
    line-height: 1.5;
  }
`;