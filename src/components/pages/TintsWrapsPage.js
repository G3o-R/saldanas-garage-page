import { useContext, useEffect, useState } from "react";
import { 
    InfoContainer,
    InfoSection,
    InfoWrapper,
    TintsWrapsStyled,
    TitleCardContainer,
    TextBox
} from "../../styles/TintsWrapsPageStyles";
import GalleryWave from "../GalleryWave";

export default function TintsWrapsPage({images_arr}) {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <TintsWrapsStyled>
            <InfoSection>
                <GalleryWave images_arr={images_arr} viewportWidth={viewportWidth} text="Tints"/>
                <InfoWrapper>
                    <InfoContainer>
                        <TitleCardContainer>
                            <h1>Tints</h1>
                        </TitleCardContainer>
                        <TextBox>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </TextBox>
                    </InfoContainer>
                </InfoWrapper>
            </InfoSection>
            <InfoSection>
                <GalleryWave images_arr={images_arr} viewportWidth={viewportWidth} text="Wraps"/>
                <InfoWrapper>
                <InfoContainer>
                        <TitleCardContainer>
                            <h1>Tints</h1>
                        </TitleCardContainer>
                        <TextBox>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </TextBox>
                    </InfoContainer>
                </InfoWrapper>
            </InfoSection>
            <InfoSection>
                <GalleryWave images_arr={images_arr} viewportWidth={viewportWidth} text="All"/>
                <InfoWrapper>
                <InfoContainer>
                        <TitleCardContainer>
                            <h1>Tints</h1>
                        </TitleCardContainer>
                        <TextBox>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </TextBox>
                    </InfoContainer>
                </InfoWrapper>
            </InfoSection>
        </TintsWrapsStyled>
    );
}
