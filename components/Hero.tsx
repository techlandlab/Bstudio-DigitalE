import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: 'url(https://picsum.photos/seed/cafefront/1920/1080)' }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="text-center text-white z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wide leading-tight">
          Gdzie Każda Kawa Opowiada Historię
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light max-w-3xl mx-auto">
          Odkryj smak prawdziwej pasji w sercu miasta. Nasza kawiarnia to idealne miejsce na poranną kawę, popołudniowy relaks i wieczorne spotkania.
        </p>
        <a 
          href="#menu"
          className="bg-[#d4a373] text-[#4a2c2a] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#c8935e] transition-all duration-300 transform hover:scale-105"
        >
          Zobacz Nasze Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;