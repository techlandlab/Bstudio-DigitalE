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
                src="https://picsum.photos/seed/designoffice/600/700" 
                alt="Bean Studio team collaborating" 
                className="w-full h-full object-cover rounded-lg" 
              />
            </Card>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Bean Studio</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Bean Studio is a creative digital agency where fresh ideas are brewed daily. We are a collective of designers, developers, and strategists passionate about crafting exceptional digital experiences that captivate and convert.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Like a perfect cup of coffee, we believe the best digital products are a blend of art and science. We combine creative design with robust technology to build websites, apps, and brands that not only look great but also perform flawlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;