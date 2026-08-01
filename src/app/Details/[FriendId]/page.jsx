'use client'
import { FdContext } from "@/app/Context/context";
import CommunicationBtn from "@/Component/Details/CommunicationBtn";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext } from "react";


const DetailsPage = () => {
    const { FriendId } = useParams() //Must be matched with folder[slag] name

    const { friends } = useContext(FdContext)
    // Check undefined
    if (!friends.length) {
        return <h1>Loading...</h1>
    }
    const expectedFriend = friends.find(friend => Number(FriendId) === friend.id)

    const {
        name,
        picture,
        email,
        days_since_contact,
        status,
        tags,
        bio,
        goal,
        next_due_date,
    } = expectedFriend;



    return (

        <div className="bg-slate-50">
            <div className="grid md:grid-cols-5 max-w-6xl mx-auto gap-4 py-20">

            {/* Left Side */}
            <div className="col-span-2.5 md:col-span-2 grid grid-rows-8 gap-2">
                <div className="row-span-5 bg-white shadow-sm rounded-lg p-5 text-center">
                    <Image
                        className="w-20 h-20 mx-auto rounded-full"
                        src={picture}
                        alt={name}
                        width={80}
                        height={80}
                    />
                    <h2 className="font-bold text-xl mt-3 text-gray-800">{name}</h2>
                    <div className="flex flex-col space-y-2 w-6/12 mx-auto">
                        <span className={`${status === "ON_TRACK" ? "bg-green-800 text-white" : status === "OVERDUE" ? "bg-red-500 text-white" : "bg-yellow-400"} text-sm px-3 py-1 rounded-full mt-2`}>
                            {status}
                        </span>
                        <span className="space-y-2">
                            {
                                tags.map((tag, index) =>
                                    <h1 className="text-xs bg-green-200 rounded-full px-2 py-1 font-semibold" key={index}>{tag}</h1>
                                )}
                        </span>

                    </div>
                    <p className="text-gray-500 italic mt-4">{bio}</p>
                    <p className="text-sm text-gray-400 mt-2">preferred: {email} </p>
                </div>

                <div className="row-span-1">
                    <button className="w-full h-full bg-white rounded-lg hover:bg-gray-100 btn">
                        Snooze 2 weeks
                    </button>
                </div>

                <div className="row-span-1">
                    <button className="w-full h-full bg-white rounded-lg hover:bg-gray-100 btn">
                        Archive
                    </button>
                </div>

                <div className="row-span-1">
                    <button className="w-full h-full bg-white rounded-lg text-red-500 hover:bg-red-100 btn">
                        Delete
                    </button>
                </div>

            </div>


            {/* Right Side */}
            <div className="col-span-2.5 md:col-span-3 grid grid-rows-4 gap-4">

                {/* Top Cards */}
                <div className="grid grid-cols-3 gap-3 row-span-1">
                    <div className="bg-white rounded-lg shadow-sm  py-8 lg:p-6 text-center my-auto">
                        <h2 className="text-sm lg:text-xl font-bold text-green-900">{days_since_contact}</h2>
                        <p className="text-gray-500 text-sm mt-2">Days Since Contact</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm  py-8 lg:p-6 text-center my-auto">
                        <h2 className="text-sm lg:text-xl font-bold text-green-900">{goal}</h2>
                        <p className="text-gray-500 text-sm mt-2">Goal (Days)</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm  py-8 lg:p-6 text-center my-auto">
                        <h2 className="text-sm lg:text-xl font-bold text-green-900">{next_due_date}</h2>
                        <p className="text-gray-500 text-sm mt-2">Next Due</p>
                    </div>
                </div>


                {/* Friend Details */}
                <div className="bg-white rounded-lg shadow-sm p-5 row-span-1">

                    <div className="flex justify-between">
                        <h2 className="font-semibold text-green-900">Relationship Goal</h2>
                        <button className="btn btn-sm">Edit</button>
                    </div>
                    <p className="text-gray-500 mt-4">
                        Connect every <span className="font-bold text-gray-800">{goal} days</span>
                    </p>
                </div>

                {/* Quick Check */}
                <div className="bg-white rounded-lg shadow-sm p-5 row-span-2">
                    <h2 className="font-semibold text-green-900 mb-4">Quick Check-In</h2>
                    <CommunicationBtn name={name} next_due_date={next_due_date}></CommunicationBtn>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DetailsPage;