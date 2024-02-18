import React, { useEffect, useRef } from 'react';
import NavBar from '../components/Navbar/NavBar';
import { Link } from 'react-router-dom';

// Define the loadScript function here
function loadScript(src, id) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load the script ${src}`));
    document.head.appendChild(script);
  });
}

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const initVanta = async () => {
      await loadScript('https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js', 'three-script');
      await loadScript('https://www.vantajs.com/dist/vanta.globe.min.js', 'vanta-script');

      // Assuming VANTA is now available globally, initialize it
      if (window.VANTA) {
        window.VANTA.GLOBE({
          el: heroRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.00, // Adjust the height as needed
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xf3096,
          backgroundColor: 0xffffff
        });
      }
    };

    initVanta();

    // Cleanup function to destroy Vanta effect when the component unmounts
    return () => {
      if (window.VANTA) {
        if (window.VANTA.animations) {
          window.VANTA.animations.forEach(anim => anim.destroy());
          window.VANTA.animations = [];
        }
      }
    };
  }, []);

  return (
    <div className="hero" ref={heroRef} id='hero'>
      <NavBar />
      <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-10 lg:pl-20 h-screen md:h-120">
        <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between items-center text-center lg:text-left h-full">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="mb-5 md:text-5xl text-3xl font-bold">
              <span className="gradient-empowering">Empowering</span> Your Business Through Strategic <span className="gradient-distribution">Wholesale Distribution</span>
            </h1>
            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
            We are a company dedicated to sourcing high-quality products from trusted wholesalers worldwide, ensuring premium offerings for our clientele.
            </div>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                Learn more
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex lg:justify-end w-full lg:w-1/2">
            {/* Image or other content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
