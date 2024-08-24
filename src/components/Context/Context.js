import React ,{useState, useEffect} from "react";

const Context = React.createContext()

function ContextProvider({children}){
    const [content, setContent] = useState([]);
    const [imagesArr, setImagesArr] = useState([])
    const [reviewsArray, setReviewsArray] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/page_components")
        .then(res => res.json())
        .then(content => {
            setContent(content.cards);
            setImagesArr(content.images_arr)
            setReviewsArray(content.reviews)
            setIsLoading(false);
        });
    }, []);
    

    return <Context.Provider value={{ content, isLoading, imagesArr, reviewsArray}}>{children}</Context.Provider>
}

export {Context, ContextProvider}