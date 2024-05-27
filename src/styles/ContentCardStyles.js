import styled from "styled-components";

export const CardStyles = styled.div`
  width: 20rem;
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px 20px 0px;
  padding: 10px 0px 10px 0px ;

  &.left {
    margin-right: auto;
    h4, p {
    margin-top: 10px;
    text-align: left;
    padding-left: 15px;
  }
  }

  &.right {
    margin-left: auto;
    h4, p {
    margin-top: 10px;
    text-align: right;
    padding-right: 15px;
  }
  }

  h4, p {
    /* margin: 10px 10px 10px 10px ; */
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  margin: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
