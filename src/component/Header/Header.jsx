// Header.jsx

import React from 'react';

const Header = () => {
    return (
        <header className="py-4">
            <div className="container mx-auto flex justify-between items-center">
               <div className='flex gap-2'>
               <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" />
                <div className="text-black text-xl font-bold">GeekFoods</div>
               </div>
                <nav className="space-x-4">
                    <a href="#" className="text-black hover:text-gray-500">Home</a>
                    <a href="#" className="text-black hover:text-gray-500">Quote</a>
                    <a href="#" className="text-black hover:text-gray-500">Resturants</a>
                    <a href="#" className="text-black hover:text-gray-500">Foods</a>
                    <a href="#" className="text-black hover:text-gray-500">Contact</a>
                </nav>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Get Started
                </button>
            </div>
        </header>
    );
};

export default Header;
