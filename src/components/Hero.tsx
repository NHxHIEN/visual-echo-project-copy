
const Hero = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 flex items-end h-full">
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider">
            FRIENDS OF ARMADALE
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
