
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices"
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Creative Design",
      description: "Crafting beautiful, user-friendly interfaces that engage users"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Fast Performance",
      description: "Optimizing websites for speed and excellent user experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="lg:w-1/2 animate-fade-in-left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Workspace"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 animate-fade-in-right">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              I'm a passionate web developer with over 5 years of experience in creating 
              digital experiences that make a difference. I specialize in modern web 
              technologies and love bringing ideas to life through code.
            </p>
            <p className="font-inter text-lg text-gray-600 mb-12 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or enjoying a good cup of coffee 
              while planning my next creative venture.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
