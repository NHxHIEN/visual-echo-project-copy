
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "john.doe@example.com",
      link: "mailto:john.doe@example.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      content: "San Francisco, CA",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Get In Touch
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Have a project in mind? I'd love to hear from you. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in-left">
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-8">
                Let's Start a Conversation
              </h3>
              <p className="font-inter text-gray-600 mb-8 leading-relaxed">
                Whether you have a question about my work, want to discuss a potential project, 
                or just want to say hello, I'm always happy to connect with fellow creators and innovators.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-800 mb-1">
                        {info.title}
                      </h4>
                      <a 
                        href={info.link}
                        className="font-inter text-gray-600 hover:text-primary transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="font-inter font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-primary hover:bg-primary/10 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span className="text-sm font-medium">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block font-inter font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-inter font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block font-inter font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block font-inter font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
