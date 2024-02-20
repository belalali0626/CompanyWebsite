import React from 'react';
import { HashLink } from 'react-router-hash-link';
import img from '../images/healthIllu.svg'; 
import img2 from '../images/appliances.svg';
import img3 from '../images/toyIllu.svg';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <HashLink to="/get-demo#demo" className="group">
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-600 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3">
                                <div className="m-2 text-center">
                                    <img alt="card img" className="mx-auto h-60 rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl">Health and Wellness Products</h2>
                                </div>
                            </div>
                        </HashLink>

                        <HashLink to="/get-demo#demo" className="group">
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-600 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3">
                                <div className="m-2 text-center">
                                    <img alt="card img" className="mx-auto h-60 rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl">Electronics and Appliances</h2>
                                </div>
                            </div>
                        </HashLink>

                        <HashLink to="/get-demo#demo" className="group">
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-600 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3">
                                <div className="m-2 text-center">
                                    <img alt="card img" className="mx-auto h-60 rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl">Toys</h2>
                                </div>
                            </div>
                        </HashLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
