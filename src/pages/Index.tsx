
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="font-inter overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-playfair text-2xl font-bold mb-2">John Doe</h3>
              <p className="font-inter text-gray-400">Creative Web Developer & Designer</p>
            </div>
            <div className="text-center md:text-right">
              <p className="font-inter text-gray-400">
                © 2024 John Doe. All rights reserved.
              </p>
              <p className="font-inter text-gray-400 text-sm mt-2">
                Made with ❤️ and lots of coffee
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
