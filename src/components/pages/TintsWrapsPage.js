import { useContext, useEffect, useState } from "react";
import { 
    InfoSection,
    GalleryWaveWrapper,
    TintsWrapsStyled,
    DontKnowWhatToCallThisYetWrapper,
    DontKnowWhatToCallThisYetContainer,
    StyledFlexColumnWrapper,
} from "../../styles/TintsWrapsPageStyles";
import GalleryWave from "../GalleryWave";
import InfoCard from "../InfoCard";

import { ReactComponent as ShieldSVG } from "../../Images/svgs/Shield.svg"
import { ReactComponent as StableSVG } from "../../Images/svgs/Stable.svg"
import { ReactComponent as GradientSVG} from "../../Images/svgs/Gradient.svg"
import { ReactComponent as TearDrop } from "../../Images/svgs/TearDrop.svg"
import { ReactComponent as MagnifyingGlass } from "../../Images/svgs/MagnifyingGlass.svg"
import { ReactComponent as Satellite } from "../../Images/svgs/Satellite.svg"
import { ReactComponent as SunProtectionSVG } from "../../Images/svgs/SunProtection.svg"
import { ReactComponent as SunShieldSVG } from "../../Images/svgs/SunShield.svg"


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
                <GalleryWaveWrapper>
                    <GalleryWave images_arr={images_arr} viewportWidth={viewportWidth}/>
                </GalleryWaveWrapper>
                <InfoCard infoObj={{
                    title: "Tints",
                    text: "Pro-nano is Geoshield's most advanced spectrally selective window film designed for automotive applications. The film is virtually clear and haze free but blocks a significant amount of UV and heat. IR blocking ceramic nano particles, in combination with UV stabilized film provides long lasting protection to your home, office or vehicle."
                }}/>
                <DontKnowWhatToCallThisYetWrapper>
                    <DontKnowWhatToCallThisYetContainer>
                        <StyledFlexColumnWrapper>
                            <span> <ShieldSVG /> Lifetime Warranty</span>
                            <span> <StableSVG /> Color Stable</span>
                            <span> <GradientSVG /> Matches Most Factory Tint</span>
                            <span> <TearDrop /> Deep Dyed + Ceramic Technology</span>
                            <span> <MagnifyingGlass /> High Optical Clarity</span>
                            <span> <Satellite /> No Signal Interferences</span>
                            <span> <SunProtectionSVG /> 99% UV Rejection</span>
                            <span> <SunShieldSVG /> High IR Rejection</span>
                        </StyledFlexColumnWrapper>
                    </DontKnowWhatToCallThisYetContainer>
                </DontKnowWhatToCallThisYetWrapper>
                
            </InfoSection>
                {/* <InfoCard infoObj={{
                    title: "Tints",
                    text: "C2 Carbon is an advanced nano carbon film produced using the latest technology in the industry. Using this technology, we created a film that not only looks great, it performs great too. In addition, this process has allowed us to bring premium looks and performance to you at a mid-range price point."
                }}/> */}
            
        </TintsWrapsStyled>
    );
}
