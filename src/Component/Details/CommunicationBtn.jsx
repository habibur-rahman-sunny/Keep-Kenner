import { FdContext } from "@/app/Context/context";
import { MessageSquareText, Phone, Video } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

const CommunicationBtn = ({next_due_date, name}) => {

    const {history, setHistory} = useContext(FdContext)
    const handleCommunicationBtn = (type)=> {
        setHistory(history =>[...history, { name, type, next_due_date}])
        if(type === "call"){
            toast.success(`Calling ${name}...`);
        }else if(type === "message"){
            toast.success(`Opening chat with ${name}...`);
        }else{
            toast.success(`Starting video call with ${name}...`);
        }
    }

    return (
        <div className="grid grid-cols-3 gap-3">
            <button onClick={()=>handleCommunicationBtn("call")} className="btn rounded-lg p-10 text-center hover:bg-gray-100 flex flex-col">
                <div>
                    <Phone />
                </div>
                <p className="mt-2">Call</p>
            </button>
            <button onClick={()=>handleCommunicationBtn("message")} className="btn rounded-lg p-10 text-center hover:bg-gray-100 flex flex-col">
                <div>
                    <MessageSquareText />
                </div>
                <p className="mt-2">Text</p>
            </button>

            <button onClick={()=>handleCommunicationBtn("video")} className="btn rounded-lg p-10 text-center hover:bg-gray-100 flex flex-col">
                <div>
                    <Video />
                </div>
                <p className="mt-2">Video</p>
            </button>
        </div>
    );
};

export default CommunicationBtn;