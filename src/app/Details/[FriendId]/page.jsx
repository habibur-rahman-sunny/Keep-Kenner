'use client'
import { FdContext } from "@/app/Context/context";
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
    console.log(expectedFriend);

    const {
        id,
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

        <div className="grid grid-cols-5 w-7/12 mx-auto gap-2 my-20">
            <div className="col-span-2 grid grid-rows-8">
                <div className="row-span-5">
                    <div>
                        <Image
                            className="w-30 mx-auto rounded-full"
                            src={picture}
                            alt={name}
                            width={50}
                            height={50}
                        />
                    </div>
                    <h2 className="font-bold text-2xl">{name}</h2>
                    <h3>{status}</h3>
                    <h3>{tags}</h3>
                    <p>{bio}</p>
                    <p>{goal}</p>
                </div>

                <div className="p-2 row-span-1">
                    <button>Snooze 2 weeks</button>
                </div>

                <div className="p-2 row-span-1">
                    <button>Archive</button>
                </div>

                <div className="p-2 row-span-1">
                    <button>Delete</button>
                </div>
            </div>


            <div className="col-span-3 grid grid-rows-3 gap-3">
                <div className="grid grid-cols-3 gap-2 row-span-1">
                    <div className="w-full h-full p-6 border b-1">
                        {days_since_contact}
                    </div>

                    <div className="w-full h-full p-6 border b-1">
                        {email}
                    </div>

                    <div className="w-full h-full p-6 border b-1">
                        {next_due_date}
                    </div>

                </div>

                <div className="border b-2 row-span-1">
                    Friend Details
                </div>


                <div className="border b-2 grid grid-cols-3 row-span-1">

                    <div className="w-full h-full p-6 border b-1">
                        Card
                    </div>

                    <div className="w-full h-full p-6 border b-1">
                        Card
                    </div>

                    <div className="w-full h-full p-6 border b-1">
                        Card
                    </div>
                </div>
            </div>

        </div>


    );
};

export default DetailsPage;