import { 
    BiographySectionContainer,
    BiographySectionWrapper,
    ImageContainer,
    TextBoxContainer,
    TextBoxWrapper,
 } from "../styles/BiographySectionTwoStyles";


export default function BiographySectionTwo(){
    return(
        <BiographySectionWrapper>
            <BiographySectionContainer>
                <ImageContainer>
                    <img src="/Luis.jpg" alt="22 year old ceo" />
                </ImageContainer>
                <TextBoxWrapper>
                    <TextBoxContainer>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </TextBoxContainer>
                </TextBoxWrapper>
            </BiographySectionContainer>
        </BiographySectionWrapper>
    )
}