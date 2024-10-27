"use client"; 

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

// Utility function to check if a date is in the current week
const isThisWeek = (dateString) => {
    const [day, month, year] = dateString.split(" ");
    const parsedDate = new Date(`${month} ${day.replace("th", "")}, ${year}`);
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    return parsedDate >= startOfWeek && parsedDate <= endOfWeek;
};

const AccessClassRecordings = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [subjectFilter, setSubjectFilter] = useState('all');
    const [weekFilter, setWeekFilter] = useState('all');

    const classes = [
        {
            id: 1,
            title: "Class 7 Maths",
            subject: "Algebraic Equation",
            date: "24th Oct 2024",
            videoUrl: "https://example.com/video1.mp4",
        },
        {
            id: 2,
            title: "Class 7 Maths",
            subject: "Differential Maths",
            date: "22nd Oct 2024",
            videoUrl: "https://example.com/video2.mp4",
        },
        {
            id: 3,
            title: "Class 7 Science",
            subject: "Fundamentals of Organic Chemistry",
            date: "20th Oct 2024",
            videoUrl: "https://example.com/video3.mp4",
        },
        {
            id: 4,
            title: "Class 7 Maths",
            subject: "Trigonometry 101",
            date: "18th Oct 2024",
            videoUrl: "https://example.com/video4.mp4",
        },
    ];

    const filteredClasses = classes.filter((classItem) => {
        const matchesSearch = classItem.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSubject = subjectFilter === 'all' || classItem.subject.includes(subjectFilter);
        const matchesWeek = weekFilter === 'all' || (weekFilter === 'thisWeek' && isThisWeek(classItem.date));

        return matchesSearch && matchesSubject && matchesWeek;
    });

    return (
        <div className="w-full max-w-md mx-auto p-0 mt-3 lg:mr-4">
            <h2 className="font-outfit text-2xl font-semibold mb-4 text-gray-800">Access Class Recordings</h2>
            <div className="w-full p-4 bg-white shadow-lg rounded-3xl text-black">
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for class recordings"
                        className="flex-1 border border-gray-300 rounded-l-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <button className="bg-blue-500 text-white px-4 rounded-r-md flex items-center transition hover:bg-blue-600">
                        <FaSearch />
                    </button>
                </div>
                <div className="flex items-center justify-start space-x-4 mb-4">
                    <label htmlFor="weekFilter" className="text-gray-700 font-outfit whitespace-nowrap">Filter by:</label>

                    {/* Week Filter */}
                    <select
                        id="weekFilter"
                        value={weekFilter}
                        onChange={(e) => setWeekFilter(e.target.value)}
                        className="font-outfit border border-gray-300 rounded-md p-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                        <option value="all">All Time</option>
                        <option value="thisWeek">This Week</option>
                    </select>

                    {/* Subject Filter */}
                    <select
                        id="subjectFilter"
                        value={subjectFilter}
                        onChange={(e) => setSubjectFilter(e.target.value)}
                        className="font-outfit border border-gray-300 rounded-md p-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                        <option value="all">All Subjects</option>
                        <option value="Algebraic Equation">Algebraic Equation</option>
                        <option value="Differential Maths">Differential Maths</option>
                        <option value="Trigonometry 101">Trigonometry</option>
                    </select>
                </div>

                <ul className="space-y-3">
                    {filteredClasses.map((classItem) => (
                        <li
                            key={classItem.id}
                            className={`group font-outfit flex items-center justify-between p-2 border-b border-gray-200 hover:bg-gray-100 transition`}
                        >
                            <div className="flex-1">
                                <h3
                                    className={`font-semibold text-lg ${classItem.id === 3 ? 'text-purple-500' : 'text-blue-500'}`}
                                >
                                    {classItem.title}
                                </h3>
                                <span className={`${classItem.id === 3 ? 'group-hover:text-purple-500' : 'group-hover:text-blue-500'}`}>{classItem.subject}</span>
                                <div className="text-gray-500 text-sm">{classItem.date}</div>
                            </div>
                            <div className="ml-4">
                                <video
                                    className="rounded-md shadow-lg w-24 h-16" 
                                    controls
                                    src={classItem.videoUrl}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AccessClassRecordings;