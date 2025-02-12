import { HomePage } from "../../styles/home_page_styles/HomeStyles";
import Content from "../sections/Content";
// import Hero from "../sections/Hero";
// import InstagramDisplay from "../sections/InstagramDisplay";
import Footer from "../sections/Footer";
import HeroVideo from "../sections/HeroVideo";
import CTA from "../sections/CTA";


export default function Home(){
    return(
        <HomePage>
            {/* <Hero /> */}
            <HeroVideo />
            <Content />
            {/* <InstagramDisplay /> */}
            <CTA />
            <Footer />
        </HomePage>
    )
}