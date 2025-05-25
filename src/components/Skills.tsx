
import { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'CSS/SCSS', level: 88 },
    { name: 'Python', level: 70 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            My Skills
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-inter font-medium text-gray-800">{skill.name}</span>
                  <span className="font-inter text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="font-playfair text-3xl font-bold text-primary">50+</div>
                <div className="font-inter text-gray-600">Projects</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.7s' }}>
                <div className="font-playfair text-3xl font-bold text-primary">5+</div>
                <div className="font-inter text-gray-600">Years Experience</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.8s' }}>
                <div className="font-playfair text-3xl font-bold text-primary">30+</div>
                <div className="font-inter text-gray-600">Happy Clients</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.9s' }}>
                <div className="font-playfair text-3xl font-bold text-primary">100%</div>
                <div className="font-inter text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
