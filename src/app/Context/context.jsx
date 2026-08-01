'use client'

import { createContext, useEffect, useState } from "react";

export const FdContext = createContext();
const FdProvider = ({ children }) => {
    // For loader
    const [loading, setLoading] = useState(true)
    // For Timeline page
    const [history, setHistory] = useState([])
    // For Homepage
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                setFriends(data)
                setLoading(false)
            })
    }, [])

    // For Timeline page
    const callCount = history.filter(
        item => item.type === "call"
    ).length;

    const messageCount = history.filter(
        item => item.type === "message"
    ).length;

    const videoCount = history.filter(
        item => item.type === "video"
    ).length;

    const value = {
        friends,
        setFriends,
        history,
        setHistory,
        loading,
        callCount,
        messageCount,
        videoCount
    }

    return (
        <FdContext.Provider value={value}>
            {children}
        </FdContext.Provider>
    );
};

export default FdProvider;