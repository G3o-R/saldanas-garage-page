import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  background-color: black;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 300px;
  aspect-ratio: 5 / 3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Reviewer = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: silver;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Review = styled.p`
  font-size: 1em;
  color: white;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Stars = styled.div`
  color: #ffd700;
  font-size: 1.2em;
`;

export const ReviewLink = styled.a`
  display: block;
  margin-top: 8px;
  font-size: 0.9em;
  color: silver;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
