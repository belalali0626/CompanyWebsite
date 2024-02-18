import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <div className="flex flex-grow justify-center items-center space-x-6">
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/aboutus">
                About Us
            </HashLink>
            {/* Updated link for Products */}
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/get-demo#demo">
                Products
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/contact#contact">
                Contact Us
            </HashLink>
        </div>
    );
}

export default NavLinks;
