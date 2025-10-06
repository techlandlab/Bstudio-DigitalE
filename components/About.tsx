import React from 'react';
import Card from './ui/Card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Card className="p-0">
              <img 
                src="https://picsum.photos/seed/cafeinterior/600/700" 
                alt="Wnętrze kawiarni Bean Studio" 
                className="w-full h-full object-cover rounded-lg" 
              />
            </Card>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4a2c2a] mb-6">O Naszej Kawiarni</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Bean Studio Cafe to miejsce, gdzie miłość do kawy spotyka się z artystyczną duszą. Jesteśmy grupą pasjonatów, baristów i cukierników, którzy każdego dnia wkładają serce w to, co robią, aby dostarczyć Wam niezapomnianych wrażeń smakowych.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Wierzymy, że idealna filiżanka kawy to coś więcej niż tylko napój – to rytuał, chwila dla siebie, okazja do spotkania. Dlatego dbamy o każdy szczegół: od starannie wyselekcjonowanych ziaren z najlepszych palarni, po unikalny wystrój naszego wnętrza, który tworzy przytulną i inspirującą atmosferę.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;