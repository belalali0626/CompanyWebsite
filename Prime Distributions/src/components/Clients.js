import React from 'react';
import supplierRelationshipImg from '../images/supplier-relationship.svg';
import customerServiceImg from '../images/customer-service.svg';
import competitivePricingImg from '../images/competitive-pricing.svg';
import productSourcingImg from '../images/product-sourcing.svg';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Supplier Partnerships',
            description: 'We forge robust partnerships with our suppliers, ensuring a foundation of trust and mutual benefit. Through continuous dialogue and collaborative projects, we aim to achieve shared success and growth.',
            imageUrl: supplierRelationshipImg,
        },
        {
            id: 2,
            title: 'Customer Support Excellence',
            description: 'Our dedication to exceptional customer service is unwavering. We promptly address any concerns, offer solutions, and ensure complete satisfaction through every step of your journey with us.',
            imageUrl: customerServiceImg,
        },
        {
            id: 3,
            title: 'Advantageous Pricing',
            description: 'By leveraging our global network of wholesalers, we secure advantageous pricing for our diverse product range, passing on the savings to you for unparalleled value on your investments.',
            imageUrl: competitivePricingImg,
        },
        {
            id: 4,
            title: 'Strategic Product Acquisition',
            description: 'Our strategic approach to product sourcing involves meticulous selection and negotiation with trusted wholesalers. This ensures access to premium products that meet our high standards of quality and reliability.',
            imageUrl: productSourcingImg,
        },
    ];

    return (
        <>
            <div className="max-w-full p-2 md:p-12 bg-gray-100" id='services'>
                <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">SERVICES</h1>
                <div className="container mx-auto">
                    <div className="flex flex-row flex-wrap justify-center md:justify-between" data-aos="fade-up">
                        {services.map((service) => (
                            <div key={service.id} className="w-full md:w-1/4 p-4" data-aos="zoom-in" data-aos-delay="500">
                                <div className="bg-white h-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6 hover:scale-105 transform transition duration-500">
                                    <img src={service.imageUrl} alt={service.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                                    <h5 className="text-xl font-bold mb-2">{service.title}</h5>
                                    <p className="text-gray-700">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
