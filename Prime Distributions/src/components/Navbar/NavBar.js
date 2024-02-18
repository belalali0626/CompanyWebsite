import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    const [top, setTop] = useState(true);
    const [isOpen, setisOpen] = useState(false);
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    useEffect(() => {
        const text = 'Prime Distributions';
        let index = 0;

        const typingInterval = setInterval(() => {
            setTypedText((prevText) => prevText + text[index]);
            index++;

            if (index === text.length) {
                clearInterval(typingInterval);
                setTypedText((prevText) => prevText + '.'); // Add dot immediately after typing
                const blinkInterval = setInterval(() => {
                    setTypedText((prevText) =>
                        prevText.endsWith('.') ? prevText.slice(0, -1) : prevText + '.'
                    );
                }, 500); // Blinking speed: 500ms
                return () => clearInterval(blinkInterval);
            }
        }, 25); // Typing speed: 100ms per character

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <nav className={`navBar fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-2">
                <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <HashLink smooth to="/#hero">
                        <h1 className="font-extrabold text-4xl text-blue-900">
                            {typedText}
                        </h1>
                    </HashLink>
                </div>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={() => setisOpen(!isOpen)}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className={`lg:flex flex-row space-x-6 p-5 ${isOpen ? 'fixed inset-0 bg-white z-50' : 'hidden'}`}>
                        <NavLinks />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
