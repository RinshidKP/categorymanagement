import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">Category App</h1>
                <nav>
                    <Link to="/" className="text-white hover:text-gray-200 mx-2">Home</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
