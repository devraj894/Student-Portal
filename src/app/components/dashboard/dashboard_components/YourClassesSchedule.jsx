import React from 'react';
import { IoVideocamOutline } from "react-icons/io5";

const YourClassesSchedule = () => {
    return (
        <div className="flex-1 max-w-full px-4 lg:px-0">
            <h2 className="text-2xl font-bold text-black mb-3 font-outfit">Your Class Schedule</h2>
            <div className="bg-white p-3 shadow-lg rounded-3xl overflow-hidden">
                <ul className="space-y-2">
                    {[
                        {
                            title: "Class 7, Science | Live Class",
                            time: "Tuesday, 5:00 - 5:50 PM",
                            day: "Yesterday",
                        },
                        {
                            title: "Class 7, Science | Live Class",
                            time: "Tuesday, 6:30 - 7:15 PM",
                            day: "Today",
                        },
                        {
                            title: "Class 7, Science | Live Class",
                            time: "Tuesday, 5:00 - 5:50 PM",
                            day: "Tomorrow",
                        },
                        {
                            title: "Class 7, Science | Live Class",
                            time: "Tuesday, 5:00 - 5:50 PM",
                            day: "23rd Sep. 2024",
                        },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className={`flex items-center gap-3 p-3 shadow-md transition duration-200 ease-in-out ${
                                item.day === 'Today' ? 'bg-purple-400' : 'bg-blue-50 hover:bg-blue-100'
                            }`}
                        >
                            <div className="text-2xl text-blue-500">
                                <IoVideocamOutline />
                            </div>
                            <div className="flex-1 text-blue-700">
                                <span className="font-medium font-outfit">{item.title}</span>
                                <span className="block text-sm text-gray-600 font-outfit font-medium">{item.time}</span>
                            </div>
                            <div className="text-sm text-gray-500 font-outfit font-medium">{item.day}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default YourClassesSchedule;
