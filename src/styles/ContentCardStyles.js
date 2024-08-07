import styled from "styled-components";

export const CardStyles = styled.div`
  display: none;
  aspect-ratio: 5/2;
  max-width: 420px;
  width: 100%;
  color: white;
  align-items: center;
  margin: 20px 0;
  padding: 10px 0;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);


@media screen and (min-width: 650px){
    max-width:500px;
  }

@media screen and (min-width:1850px){
    max-width:700px
}

  &.left {
    background: linear-gradient(130deg, #1D1D1D 65%, #4C5157 35%);
    display: flex;
    flex-direction: row;
    margin-right: auto;

    h4, p {
    width: 100%;
    @media screen and (min-width: 650px) {
      font-size: 20px;
    }
  }
  }

  &.right {
    background: linear-gradient(130deg, #4C5157 45%,  #1D1D1D 20%);
    display: flex;
    flex-direction: row-reverse;
    margin-left: auto;

    h4, p {
    width: 100%;
    @media screen and (min-width: 650px) {
      font-size: 20px;
    }
  }
  }

  h4, p {
    width: 100%;
    @media screen and (min-width: 650px) {
      font-size: 20px;
    }
  }

  &.inactive {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  margin: 0px 10px 0px 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  object-fit:cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
  }

  &.left:after {
    display: none;
  }

  &.right:before {
    display: none;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  margin: 8px;
`;
