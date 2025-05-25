
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Clean and responsive portfolio website for a creative agency",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "Firebase", "SCSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "Beautiful restaurant website with online reservation system",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Express.js", "MySQL"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "API Integration", "CSS3"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Full-featured blog platform with admin dashboard",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            My Portfolio
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveLink}
                    className="p-3 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubLink}
                    className="p-3 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="font-inter text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:transform hover:scale-105 shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
