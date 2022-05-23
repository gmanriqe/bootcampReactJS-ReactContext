import { useState, useEffect, createContext } from "react";

const userContext = {
    devToUserName: "gmanriqe",
    articlesFromDevto: []
}

export const UserContext = createContext()

// utilizo el provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(userContext); // enviamos un objeto como parametro del useState()
    // consumir un api produce efecto secundario, por tanto debe ir dentro de un useEffect()
    useEffect(() => {
        async function fetchDevTo() {
            const response = await fetch(`https://dev.to/api/articles?username=${user.devToUserName}`);
            const articles = await response.json()
            
            setUser({...user, articlesFromDevto: articles})
        }
        fetchDevTo()
    }, [user.devToUserName]);

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}