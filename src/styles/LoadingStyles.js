import styled, {keyframes} from "styled-components";

const bobble = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;


export const LoadingPageStyles = styled.div`
  position: relative;
  background-color: #202020;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Arial, sans-serif;
  overflow: hidden;
`;

export const LoadingPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

export const LogoWrapper = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  height:500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 8rem;
  background: radial-gradient(circle, rgba(0, 0, 0, .5) 10%, rgba(0, 0, 0, .0) 70%);
`;

export const LogoContainer = styled.div`
  width: 18rem;
  aspect-ratio: 1 / 1;
  border: 10px solid #C0C0C0;
  border-radius: 50%;
  overflow: hidden;
  animation: ${bobble} 2s ease-in-out infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MottoContainer = styled.div`
    position: absolute;
    bottom: 0;
    max-width: 350px;
    padding-bottom: 2em;

    h3{
        font-family: "Brush Script MT", "Lucida Handwriting", "Times New Roman";
        font-size: 40px;
        text-align: center;
        color: #f2f3f4;
    }
`;