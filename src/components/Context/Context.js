import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
    const [pageComponents, setPageComponents] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://saldanas-garage-page-json-server.onrender.com/page_components")
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
