import { useState, useEffect, createContext } from "react";

export const UserContext = createContext()

// utilizo el provider
export const UserProvider = ({ children }) => {
    const [articlesFromDevto, setArticlesFromDevto] = useState([]);

    // consumir un api produce efecto secundario, por tanto debe ir dentro de un useEffect()
    useEffect(() => {
        async function fetchDevTo() {
            const response = await fetch('https://dev.to/api/articles?username=uriel_hedz');
            const articles = await response.json()
            
            setArticlesFromDevto(articles)
        }
        fetchDevTo()
    }, []);

    return (
        <UserContext.Provider value={articlesFromDevto}>
            {children}
        </UserContext.Provider>
    )
}