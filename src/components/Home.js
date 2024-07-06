import { 
    ContentContainer,
    HomePage,
    LogoContainer,
    ReviewsContainer
} from "../styles/HomeStyles";
import { useContext } from "react";
import { Context } from "./Context/Context";
import ContentCard from "./ContentCard";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BiographySection from "./BiographySection";

function Home() {
    const {isLoading, content, carouselContent} = useContext(Context)

    let leftOriented = true;

    const contentToDisplay = content.map((content) => {
        leftOriented = !leftOriented;
        console.log(content.id)
        return (<ContentCard key={content.id} content={content} className={leftOriented ? "left" : "right" }/>)
    })

    return (
        <HomePage> 
            <ImageCarousel carouselContent={carouselContent}/>
            <Navbar />
            <BiographySection />
            <ContentContainer>
                {contentToDisplay}
            </ContentContainer>
            {/* <ReviewsContainer>
                
            </ReviewsContainer> */}
            <Footer />
        </HomePage>
    );
}

export default Home;
