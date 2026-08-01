"use client"

import { useContext } from "react";
import FriendCard from "../UI/Card/FriendCard";
import { FdContext } from "@/app/Context/context";

const FriendsList = () => {
    
    const {friends, loading} = useContext(FdContext)
     if (loading) {
        return (
            <div className="my-20 text-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
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