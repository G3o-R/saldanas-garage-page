import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
    const [pageComponents, setPageComponents] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("/.netlify/functions/getResources")
        // fetch("http://localhost:3001/page_components")
            .then((res) => res.json())
            .then((data) => {
                setPageComponents(data);
                // setTimeout(() => {
                    setIsLoading(false);
                // },3000);
            });
    }, []);

    return (
        <Context.Provider value={{ pageComponents, isLoading }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
