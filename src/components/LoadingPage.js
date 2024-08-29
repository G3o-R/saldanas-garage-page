import { 
    LoadingPageStyles,
    LoadingPageContainer,
    LogoWrapper,
    LogoContainer,
    MottoContainer
 } from "../styles/LoadingStyles";

export default function LoadingPage(){

    return(
        <LoadingPageStyles>
            <LoadingPageContainer>
                <LogoWrapper>
                    <LogoContainer>
                        <img src="/saldanas-garage-logo.jpg" alt="logo"/>
                    </LogoContainer>
                </LogoWrapper>
                <MottoContainer>
                    <h3>Keeping your car cool and you looking cooler</h3>
                </MottoContainer>
            </LoadingPageContainer>
        </LoadingPageStyles>
    )
}