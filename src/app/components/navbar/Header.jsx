import React from 'react';

const Navbar = () => {
    const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL;
    
    return (
        <nav className="flex justify-between items-center p-2.5 bg-blue-600 text-white">
            <div className="flex items-center">
                <img src={logoUrl} alt="Logo" className="h-10" />
            </div>
            <div className='text-center'>
                <h1 className='ml-4 text-3xl font-bold font-outfit'>Student Portal</h1>
            </div>
            <div className="text-right font-outfit">
                <p className='text-2xl'>Hello, Gabrisa!</p>
                <p className='text-sm'>Class 7, Math + Science</p>
            </div>
        </nav>
    );
};

export default Navbar;
