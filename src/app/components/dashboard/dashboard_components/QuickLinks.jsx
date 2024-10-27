"use client";

import React, { useState } from 'react';
import { FaClipboardList, FaWhatsapp } from "react-icons/fa";
import { PiBookOpenTextLight } from "react-icons/pi";
import Modal from '../../modals/Modal';

const QuickLinks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const links = [
        {
            icon: <PiBookOpenTextLight className="text-4xl" />,
            title: "Canvas LMS",
            description: "Click here to access your LMS portal for assignments, class recordings, and notes",
            bgColor: "bg-blue-800",
        },
        {
            icon: <FaClipboardList className="text-4xl" />,
            title: "Join Live Class",
            description: "Click here to join live class session. Please do not share this link",
            bgColor: "bg-purple-400",
        },
        {
            icon: <FaWhatsapp className="text-4xl" />,
            title: "Contact Teacher",
            description: "Click here to contact your teacher for any doubts or concerns",
            bgColor: "bg-blue-400",
        },
    ];

    const handleLiveClassClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col items-start space-y-4 px-4 max-w-full">
            <h2 className="text-2xl font-bold text-black mt-4 font-outfit">Quick Links</h2>

            {/* Desktop View: Full Links */}
            <div className="hidden lg:flex flex-col space-y-4">
                {links.map((item, index) => (
                    <div
                        key={index}
                        className={`group font-outfit flex flex-col items-center justify-center w-[380px] h-[170px] ${item.bgColor} shadow-lg rounded-3xl p-4 transform transition-transform hover:scale-105 hover:bg-white`}
                        onClick={item.title === "Join Live Class" ? handleLiveClassClick : undefined}
                    >
                        <div className={`mb-3 ${item.title === 'Join Live Class' ? 'group-hover:text-purple-400' : 'group-hover:text-blue-500'}`}>
                            {item.icon}
                        </div>
                        <h3 className={`text-2xl font-semibold text-white text-center mb-2 ${item.title === 'Join Live Class' ? 'group-hover:text-purple-400' : 'group-hover:text-blue-500'}`}>
                            {item.title}
                        </h3>
                        <p className={`text-sm text-center ${item.title === 'Join Live Class' ? 'group-hover:text-purple-400' : 'group-hover:text-blue-500'}`}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Mobile View: Condensed Links */}
            <div className="lg:hidden flex flex-col space-y-4">
                {links.map((item, index) => (
                    <div
                        key={index}
                        className={`group font-outfit flex items-center justify-start w-[320px] h-[64px] ${item.bgColor} shadow-lg rounded-lg p-2 transform transition-transform hover:scale-105 hover:bg-white`}
                        onClick={item.title === "Join Live Class" ? handleLiveClassClick : undefined}
                    >
                        <div className={`flex items-center ${item.title === 'Join Live Class' ? 'group-hover:text-purple-400' : 'group-hover:text-blue-500'}`}>
                            <div className="mr-2">{item.icon}</div>
                            <h3 className={`text-lg font-semibold text-white ${item.title === 'Join Live Class' ? 'group-hover:text-purple-400' : 'group-hover:text-blue-500'}`}>
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>


            {isModalOpen && <Modal closeModal={closeModal} />}
        </div>
    );
};

export default QuickLinks;
