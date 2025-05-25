
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
              Hi, I'm <span className="text-primary">John</span>
            </h1>
            <h2 className="font-inter text-xl lg:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Creative Web Developer & Designer
            </h2>
            <p className="font-inter text-lg text-gray-600 mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              I create beautiful, functional websites that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={scrollToAbout}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:transform hover:scale-105 shadow-lg"
              >
                Learn More
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="John Doe"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-primary transition-colors duration-300">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
