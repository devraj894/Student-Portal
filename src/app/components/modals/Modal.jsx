import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { FaClipboardList } from "react-icons/fa";

export default function Modal({ closeModal }) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>
            <div className='bg-gray-800 rounded-xl p-8 flex flex-col items-center shadow-lg transition-transform transform hover:scale-105'>
                <button 
                    onClick={closeModal} 
                    className='self-end text-white hover:text-red-400 transition'
                >
                    <RxCross1 size={30} />
                </button>
                <FaClipboardList className="text-5xl text-blue-400 mb-4" />
                <h1 className='text-3xl font-outfit font-extrabold text-white mb-2'>No Live Classes</h1>
                <p className='text-lg font-outfit text-gray-300 text-center max-w-md'>
                    You have no live classes scheduled for today.
                </p>
            </div>
        </div>
    );
}
