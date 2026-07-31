'use client'

import { createContext, useEffect, useState } from "react";

export const FdContext = createContext();
const FdProvider = ({children}) => {

    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    const value = {
        friends,
        setFriends,
    }
    
    return (
        <FdContext.Provider value={value}>
            {children}
        </FdContext.Provider>
    );
};

export default FdProvider;