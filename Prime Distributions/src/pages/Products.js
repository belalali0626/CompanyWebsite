import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import healthSVG from '../images/health.svg';
import toysSVG from '../images/toys.svg';
import beautySVG from '../images/beauty.svg';
import electronicsSVG from '../images/electronics.svg';

const Products = () => {
  useDocTitle('Prime Distribution - Products');

  const demoProducts = [
    {
      id: 1,
      name: 'Health and Wellness Products',
      description: 'At Prime Distributions, we specialize in offering a comprehensive selection of health and wellness products sourced directly from trusted wholesalers worldwide. Dive into our extensive range, where you\'ll find everything from essential pharmaceuticals and over-the-counter medications to vitamins, supplements, and various healthcare products. Additionally, our collection of fitness equipment caters to fitness enthusiasts of all levels, featuring high-quality exercise machines, weights, yoga mats, and fitness accessories to support your wellness journey. To further promote holistic well-being, explore our wellness products, including herbal remedies, aromatherapy products, and natural supplements carefully curated to enhance your overall health and vitality.',
      imageUrl: healthSVG, // Replace with imported SVG
    },
    {
      id: 2,
      name: 'Toys',
      description: 'Embark on a journey of imagination and fun with our diverse range of toys at Prime Distributions. Our expansive collection includes an array of children\'s toys designed to inspire creativity and delight. From classic dolls and action figures to engaging board games, challenging puzzles, and cuddly plush toys, we offer something for every child\'s preference and age group. Explore the great outdoors with our selection of outdoor play equipment, featuring sturdy swing sets, imaginative playhouses, exhilarating trampolines, and a variety of sports equipment to encourage active play and exploration. For hobbyists and collectors, discover our hobby and collectible items, including model kits, remote-control vehicles, gaming accessories, and intricately crafted collectible figurines.',
      imageUrl: toysSVG, // Replace with imported SVG
    },
    {
      id: 3,
      name: 'Beauty and Skincare',
      description: 'Indulge in the ultimate beauty experience with Prime Distributions\' premium collection of skincare, cosmetics, and beauty accessories. Elevate your skincare routine with our luxurious moisturizers, revitalizing serums, and gentle cleansers formulated to nourish and rejuvenate your skin. Enhance your natural beauty with our exquisite range of cosmetics, featuring an array of lipsticks, eyeshadows, foundations, and more in vibrant shades and luxurious textures. Complete your makeup look with our selection of high-quality beauty accessories, including soft makeup brushes, versatile sponges, and professional-grade hair styling tools designed to help you achieve flawless results with ease.',
      imageUrl: beautySVG, // Replace with imported SVG
    },
    {
      id: 4,
      name: 'Electronics and Appliances',
      description: 'Experience cutting-edge technology and innovation with Prime Distributions\' extensive collection of consumer electronics and home appliances. Stay connected and entertained with our range of smartphones, tablets, laptops, cameras, and accessories from leading brands. Transform your living space with our selection of home appliances, including essential kitchen appliances, state-of-the-art televisions, energy-efficient refrigerators, convenient washing machines, and powerful air conditioners designed to enhance your comfort and convenience. For tech enthusiasts and professionals, explore our electronic components, featuring essential circuit boards, reliable semiconductors, precision resistors, and versatile capacitors to support your electronic projects and endeavors.',
      imageUrl: electronicsSVG, // Replace with imported SVG
    },
  ];

  return (
    <>
      <NavBar />
      <div className="mt-8 w-full bg-gray-100 py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {demoProducts.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <div className="p-4">
                  <h5 className="text-xl font-bold mb-2">{product.name}</h5>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
