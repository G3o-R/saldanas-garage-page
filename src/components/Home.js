import { 
    ContentContainer,
    HomePage,
    LogoContainer
} from "../styles/HomeStyles";
import { useEffect, useState } from "react";
import ContentCard from "./ContentCard";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0); // Start with no active cards

    useEffect(() => {
        fetch("http://localhost:3001/content")
        .then(res => res.json())
        .then(content => {
            setContent(content);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setActiveIndex(prevIndex => Math.min(prevIndex + 1, content.length - 1)); // Increment active index
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [content]);

    let leftOriented = true;

    const contentToDisplay = content.map((content, index) => {
        leftOriented = !leftOriented;
        const isActive = index <= activeIndex;
        const orientationClass = leftOriented ? "left" : "right";
        const className = isActive ? `${orientationClass} active` : "inactive";
        return (<ContentCard key={content.id} content={content} className={className} />);
    });

    return (
        <HomePage> 
            <LogoContainer className={isLoading ? "true" : "false"}>
                <img src="/saldanas-garage-logo.jpg" alt="logo" />
            </LogoContainer>
            <ContentContainer>
                {contentToDisplay}
            </ContentContainer>
        </HomePage>
    );
}

export default Home;
