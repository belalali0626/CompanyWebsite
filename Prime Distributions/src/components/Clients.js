import React from 'react';
import ebay from '../images/clients/ebaylogo.png';
import amazon from '../images/clients/amazon.png';

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100 flex flex-col items-center">
            <section data-aos="fade-up" className="text-center">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-3xl text-blue-900 uppercase font-bold">Our Clients Sell On</h2>
                    <div className='my-2'>
                        <div className='w-24 mx-auto border-b-4 border-blue-900'></div>
                    </div>
                    {/* Removed "Some of our clients" text */}
                </div>
            </section>

            <div className="pt-8 pb-16" data-aos="fade-in" data-aos-delay="600"> {/* Reduced padding to make layout tighter */}
                <div className="flex justify-center items-center gap-16"> {/* Gap between images */}
                    <img src={ebay} alt="eBay" className="client-img" style={{ height: '12rem', width: '12rem', objectFit: 'contain' }} />
                    <img src={amazon} alt="Amazon" className="client-img" style={{ height: '12rem', width: '12rem', objectFit: 'contain' }} />
                </div>
            </div>

            {/* Adding styles for hover effect */}
            <style jsx>{`
                .client-img:hover {
                    opacity: 0.6; /* Makes the image lighter on hover */
                    transition: opacity 0.3s ease-in-out; /* Smooth transition for the hover effect */
                }
            `}</style>
        </div>
    );
}

export default Clients;
