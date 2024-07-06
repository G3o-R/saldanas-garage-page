import { 
    FooterContainer,
    FooterLogoWrapper,
    WidgetsContainer,
    FooterLogo,
    SocialsWrapper,
    SocialsIconGrid,
    SocialMediaIconAnchor,
    ContactInformationContainer,
    ContactInfo,
    ContactMethod,
 } from "../styles/FooterStyles";

 import { ReactComponent as FacebookIcon } from "../Images/Facebook.svg"
 import { ReactComponent as InstagramIcon } from "../Images/Instagram.svg"
 import { ReactComponent as TiktokIcon } from "../Images/Tiktok.svg"


export default function Footer(){
    return(
        <FooterContainer>
            <WidgetsContainer>
                <FooterLogoWrapper>
                    <FooterLogo src="/saldanas-garage-logo.jpg" alt="company logo" />
                </FooterLogoWrapper>
                <SocialsWrapper>
                    <SocialsIconGrid>
                        <SocialMediaIconAnchor href="https://www.facebook.com/profile.php?id=100009616453915">
                            <FacebookIcon />
                        </SocialMediaIconAnchor>
                        <SocialMediaIconAnchor href="https://www.instagram.com/saldanas_garage/">
                            <InstagramIcon />
                        </SocialMediaIconAnchor>
                        <SocialMediaIconAnchor href="https://www.tiktok.com/@saldana602?lang=en">
                            <TiktokIcon />
                        </SocialMediaIconAnchor>
                    </SocialsIconGrid>
                </SocialsWrapper>
            </WidgetsContainer>
            <ContactInformationContainer>
                <ContactInfo>
                    Phone: <ContactMethod>603-888-8888</ContactMethod>
                </ContactInfo>
                <ContactInfo>
                    Email: <ContactMethod>LuisSal@gmail.com</ContactMethod>
                </ContactInfo>
            </ContactInformationContainer>
        </FooterContainer>
    )
}