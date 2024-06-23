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
                        <SocialMediaIconAnchor>
                            <FacebookIcon />
                        </SocialMediaIconAnchor>
                        <SocialMediaIconAnchor>
                            <InstagramIcon />
                        </SocialMediaIconAnchor>
                        <SocialMediaIconAnchor>
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