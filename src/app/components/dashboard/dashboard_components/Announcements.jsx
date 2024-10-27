"use client";

import React, { useState, useEffect } from 'react';
import { GoSun } from "react-icons/go";
import { MdOutlineAssignment } from "react-icons/md";

const Announcements = () => {
    const announcements = [
        {
            icon: <GoSun className="text-2xl text-blue-500" />,
            text: "On account of Independence Day, August 15th will be a holiday."
        },
        {
            icon: <MdOutlineAssignment className="text-2xl text-blue-500" />,
            text: "Reminder to finish your assignments and submit them by Monday."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically switch announcements on mobile
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [announcements.length]);

    return (
        <div className="flex-1 max-w-full px-4 lg:px-0">
            <h2 className="text-2xl font-bold text-black mb-2 mt-6 font-outfit">Announcements</h2>

            {/* Mobile View: Switching Announcements */}
            <div className="block lg:hidden bg-white p-4 shadow-lg rounded-3xl overflow-hidden">
                <div className="flex items-center bg-blue-50 p-3 shadow-md">
                    <div className="mr-3">
                        {announcements[currentIndex].icon}
                    </div>
                    <span className="text-blue-700 font-medium font-outfit">
                        {announcements[currentIndex].text}
                    </span>
                </div>

                {/* Dots for navigation */}
                <div className="flex justify-center mt-2">
                    {announcements.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop View: Show All Announcements */}
            <div className="hidden lg:block bg-white p-3 shadow-lg rounded-3xl">
                <ul className="space-y-2">
                    {announcements.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center bg-blue-50 p-2 shadow-md hover:bg-blue-100 transition duration-200 ease-in-out"
                        >
                            <div className="mr-3">
                                {item.icon}
                            </div>
                            <span className="text-blue-700 font-medium font-outfit">{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Announcements;
