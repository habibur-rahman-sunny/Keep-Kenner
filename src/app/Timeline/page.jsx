'use client'
import React, { useContext } from 'react';
import { FdContext } from '../Context/context';
import { MessageSquareText, PhoneOutgoing, Video } from 'lucide-react';

const TimelinePage = () => {
    const { history } = useContext(FdContext)
    return (
        <div className='bg-slate-50'>
            <div className="max-w-6xl w-full mx-auto px-4 py-26">
                <h1 className="font-bold text-3xl text-gray-900 mb-6">Timeline</h1>

                {/* Direct mapping and parameter destructuring */}
                <div className="flex flex-col gap-3">
                    {history?.map(({ name, type, next_due_date }, index) => (
                        <div key={index} className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className='flex gap-3'>
                                <div className='my-auto'>
                                    {
                                        type === "call" ? <PhoneOutgoing /> :
                                            type === "message" ? <MessageSquareText /> :
                                                <Video />
                                    }
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">
                                        {type} <span className="font-normal text-gray-500">with {name}</span>
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                        {next_due_date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;