import React ,{useState, useEffect} from "react";

const Context = React.createContext()

function ContextProvider({children}){
    const [content, setContent] = useState([]);
    const [carouselContent, setCarouselContent] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/page_components")
        .then(res => res.json())
        .then(content => {
            setContent(content.cards);
            setCarouselContent(content.image_carousel)
            setIsLoading(false);
        });
    }, []);
    

    return <Context.Provider value={{ content, isLoading, carouselContent}}>{children}</Context.Provider>
}

export {Context, ContextProvider}