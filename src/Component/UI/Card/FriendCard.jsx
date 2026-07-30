import Image from "next/image";

const FriendCard = ({ friend }) => {
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
    } = friend;


    return (
        <div className="w-full h-full text-center items-center space-y-4 p-4 bg-white rounded-xl shadow-sm">
            <div>
                <Image className="w-30 mx-auto rounded-full"
                    src={picture}
                    width={100}
                    height={100}
                    alt="avatar"
                />
            </div>
            <div>
                <h2 className="font-bold text-2xl">{name}</h2>
                <p className="text-slate-600">62 days ago</p>
            </div>
            <div className="flex justify-around gap-2">
                {tags.map((tag, index) =>
                    <h1 className="bg-green-200 rounded-lg px-2 py-1 font-semibold" key={index}>{tag}</h1>
                )}
            </div>
            <div>
                <h1 className={`rounded-2xl p-2 ${status === "ON_TRACK" ? "bg-green-800 text-white" : status === "OVERDUE" ? "bg-red-500 text-white" : "bg-yellow-400"}`}>{status}</h1>
            </div>

        </div>

    );
};

export default FriendCard;