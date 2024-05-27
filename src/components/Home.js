import { 
    ContentContainer,
    HomePage,
    LogoContainer
} from "../styles/HomeStyles."
import { useEffect, useState } from "react"
import ContentCard from "./ContentCard"

function Home(){
    const [isLoading, setIsLoading] = useState(false)
    const [content, setContent] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/content")
        .then(res => res.json())
        .then(content => setContent(content))
    },[])

    let leftOriented = true

    const contentToDisplay = content.map((content)=>{
        leftOriented = !leftOriented
        return (<ContentCard key={content.id} content={content} leftOriented={leftOriented}/>)
    })

    return(
        <HomePage> 
            <LogoContainer className={isLoading ? "true" : "false"}>
                <img src="/saldanas-garage-logo.jpg" alt="logo"/>
            </LogoContainer>
            <ContentContainer>
                {contentToDisplay}
            </ContentContainer>
        </HomePage>
    )
}

export default Home