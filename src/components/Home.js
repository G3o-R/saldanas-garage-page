import { 
    HomePage,
    LogoContainer
} from "../styles/HomStyles."
import { useEffect, useState } from "react"
import ContentCard from "./ContentCard"

function Home(){
    const [isLoading, setIsLoading] = useState(true)
    const [content, setContent] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/content")
        .then(res => res.json())
        .then(content => setContent(content))
    },[])

    let leftOriented = true

    const contentToDisplay = content.map((content)=>{
        leftOriented = !leftOriented
        return (<ContentCard content={content} leftOriented={leftOriented}/>)
    })

    console.log(content)

    return(
        <HomePage> 
            <LogoContainer className={isLoading ? "true" : "false"}>
                <img src="/saldanas-garage-logo.jpg" alt="logo"/>
            </LogoContainer>
            {contentToDisplay}
        </HomePage>
    )
}

export default Home