"use client"

import { useEffect, useState } from "react";
import FriendCard from "../UI/Card/FriendCard";

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div className=" my-20">
                <h1 className="text-start text-3xl font-medium">Your Friends</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                {friends.map((friend, index) => <FriendCard key={index} friend={friend}></FriendCard>)}
            </div>
        </div>
    );
};

export default FriendsList;