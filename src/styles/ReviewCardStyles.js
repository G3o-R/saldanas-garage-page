import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  margin-top: auto;
`;

export const Card = styled.div`
  border: 1px solid black;
  background-color: #212930;
  padding: 16px;
  margin: 8px;
  width: 300px;
  aspect-ratio: 5 / 3;
  box-shadow: 4px 4px #242424;;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

export const Reviewer = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: silver;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ReviewContainer = styled.div`
  width: inherit;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    font-size: 1em;
    color: white;
    text-align: center;
    line-height: 1.5;
  }
`;

export const Stars = styled.div`
  color: #ffd700;
  font-size: 1.2em;
`;

export const ReviewLink = styled.p`
  display: block;
  margin-top: 8px;
  font-size: 0.9em;
  color: silver;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
