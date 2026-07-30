import { Plus } from "lucide-react";

const Banner = () => {
    return (
        <div>
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                Friends to keep close in your life
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 text-sm max-w-xl mx-auto mb-8">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>

            {/* Add Friend Button */}
            <button className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-medium px-5 py-2.5 rounded-md mb-12">
                <Plus size={16} />
                <span>Add a Friend</span>
            </button>
        </div>
    );
};

export default Banner;