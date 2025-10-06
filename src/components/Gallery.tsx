import React from 'react';

const galleryImages = [
  { id: 1, seed: 'coffee1', alt: 'Filiżanka z latte art' },
  { id: 2, seed: 'coffee2', alt: 'Wnętrze kawiarni z klientami' },
  { id: 3, seed: 'coffee3', alt: 'Barista przygotowujący kawę' },
  { id: 4, seed: 'coffee4', alt: 'Świeżo palone ziarna kawy' },
  { id: 5, seed: 'coffee5', alt: 'Ciasto i kawa na stoliku' },
  { id: 6, seed: 'coffee6', alt: 'Uśmiechnięta obsługa kawiarni' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#f3e9e4]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4a2c2a] text-center mb-12">Galeria Chwil</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={image.id} className={`overflow-hidden rounded-lg shadow-lg ${index === 1 || index === 3 ? 'md:col-span-1 md:row-span-2' : ''}`}>
              <img
                src={`https://picsum.photos/seed/${image.seed}/600/${index === 1 || index === 3 ? '1200' : '600'}`}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;