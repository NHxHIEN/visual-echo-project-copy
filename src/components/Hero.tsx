
const Hero = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/bc95a99e-e53b-4cd3-9488-ff2432713df8.png')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 flex justify-start items-end h-full">
        <div className="max-w-7xl px-6 pb-16">
        <h2 className="font-medium font-sans text-white text-5xl md:text-6xl lg:text-7xl tracking-wider">
          FRIENDS OF ARMADALE
        </h2>


        </div>
      </div>

    </section>
  );
};

export default Hero;
