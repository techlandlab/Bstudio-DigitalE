import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: 'url(https://picsum.photos/seed/creative/1920/1080)' }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="text-center text-white z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wide leading-tight">
          Freshly Ground Ideas, Perfectly Brewed Results
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light max-w-3xl mx-auto">
          Crafting digital experiences with the precision of a master barista and the creativity of an artist.
        </p>
        <a 
          href="#portfolio"
          className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
        >
          View Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;