import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="bg-white text-blue-900">
            <div className="max-w-full mx-auto px-4 sm:px-6 border-t border-b py-30">

                {/* Middle area: Blocks */}
                <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12">
                    {/* Address block */}
                    <div className="col-span-6 md:col-span-4 lg:col-span-4 mx-auto text-center md:text-left">
                        <h6 className="text-xl font-bold mb-4">COMPANY ADDRESS</h6>
                        <p className="text-md">
                            124 City Road<br />
                            London, EC1V 2NX<br />
                            Contact: info@primedistribution.com
                        </p>
                    </div>

                    {/* 2nd block (Adjusted col-span for other blocks) */}
                    <div className="col-span-6 md:col-span-4 lg:col-span-4 mx-auto text-center">
                        <h6 className="text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                            <li className="mb-2">
                                <HashLink to="/aboutus"className="hover:text-blue-900 hover:font-light transition duration-250 ease-in-out">About</HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink to="/get-demo#demo" className="hover:text-blue-900 hover:font-light transition duration-250 ease-in-out">Products</HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink to="/contact#contact" className="hover:text-blue-900 hover:font-light transition duration-250 ease-in-out">Contact</HashLink>
                            </li>
                        </ul>
                    </div>

                    {/* 3rd block (Adjusted col-span for other blocks) */}
                    <div className="col-span-6 md:col-span-4 lg:col-span-4 mx-auto text-center">
                        <h6 className="text-xl font-bold mb-4">OUR PRODUCTS</h6>
                        <ul className="text-md">
                            <li className="mb-2">
                                <HashLink to="/get-demo#demo" className="hover:text-blue-900 hover:font-light transition duration-250 ease-in-out">Health and Wellness Products</HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink to="/get-demo#demo"className="hover:text-blue-900 hover:font-light transition duration-250 ease-in-out">Toys</HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink to="/get-demo#demo" className="hover:text-blue-900 hover:font-light transition duration-250 ease-in-out">Beauty and Skincare</HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink to="/get-demo#demo" className="hover:text-blue-900 hover:font-light transition duration-250 ease-in-out">Electronics and Appliances</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                        <div className="text-sm text-gray-200 font-semibold py-1">
                            Copyright &copy; {new Date().getFullYear()}{" "}
                            <HashLink to="#" className="hover:text-blue-900">
                                Prime Distribution
                            </HashLink>. All rights reserved.
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
