import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const AboutUs = () => {
  useDocTitle('Prime Distribution - About Us');

  return (
    <>
      <NavBar />
      <div className="mt-8 bg-gray-100 py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20" data-aos="zoom-in">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">About Prime Distribution</h1>
            <p className="text-gray-700 mb-8">
              Prime Distribution is a leading wholesaler specializing in sourcing top-quality products from trusted suppliers worldwide. With a rich history spanning over a decade, we have established ourselves as a reliable partner for retailers seeking premium merchandise at competitive prices.
            </p>
            <p className="text-gray-700 mb-8">
              Our mission at Prime Distribution is simple: to provide our clients with unparalleled access to an extensive range of goods across various categories. From toys and electronics to beauty items and beyond, we offer a diverse selection tailored to meet the evolving needs of today's market.
            </p>
            <p className="text-gray-700 mb-8">
              What sets us apart is our unwavering commitment to quality and value. We understand the importance of offering products that not only meet but exceed customer expectations. That's why each item in our inventory undergoes rigorous quality control measures to ensure superior craftsmanship and durability.
            </p>
            <p className="text-gray-700 mb-8">
              At Prime Distribution, we take pride in our ability to stay ahead of industry trends. Our team of seasoned professionals keeps a close watch on market developments, enabling us to anticipate shifts in consumer preferences and adjust our product offerings accordingly. This proactive approach allows us to provide our clients with innovative and in-demand merchandise that keeps them ahead of the competition.
            </p>
            <p className="text-gray-700">
              Beyond our commitment to product excellence, we place a strong emphasis on customer satisfaction. We believe that building lasting relationships with our clients is essential to our success. That's why we prioritize open communication, reliability, and transparency in every interaction. Whether you're a small boutique or a large retail chain, you can trust Prime Distribution to deliver exceptional service and support every step of the way.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl mt-8">
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-4">Quality: We are committed to sourcing and delivering only the highest quality products to our clients.</li>
              <li className="mb-4">Integrity: We conduct business with honesty, transparency, and integrity in all our dealings.</li>
              <li className="mb-4">Innovation: We embrace innovation and continually seek new ways to improve our processes and offerings.</li>
              <li className="mb-4">Customer Focus: We prioritize customer satisfaction and strive to exceed expectations in everything we do.</li>
              <li className="mb-4">Partnership: We value collaborative partnerships and work closely with our clients to achieve mutual success.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
