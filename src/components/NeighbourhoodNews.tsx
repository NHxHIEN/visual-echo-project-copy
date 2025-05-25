const NeighbourhoodNews = () => {
  const news = [
    {
      id: 1,
      brand: 'PIXEL BOSS',
      title: 'Pixel Boss launch their new software SWIFT!',
      image: '/lovable-uploads/bb6d7075-0835-4323-87e8-aae9bf7f4226.png',
      accent: 'bg-black'
    },
    {
      id: 2,
      brand: 'LUCI DI BELLA',
      title: 'AW25 designs now in store!',
      image: '/lovable-uploads/ef82de58-4e67-443d-a3ba-0db752026114.png',
      accent: 'bg-black'
    },
    {
      id: 3,
      brand: 'ARMADALE CELLARS',
      title: 'Armadale Cellars top wine picks for 2025!',
      image: '/lovable-uploads/1efbfdde-4f61-4df3-a1c3-f392921bb7ee.png',
      accent: 'bg-black'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white">NEIGHBOURHOOD NEWS</h2>
          <button className="text-white font-medium px-4 py-2 hover:bg-black hover:text-white transition-colors rounded-md">
            VIEW ALL
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg overflow-hidden group cursor-pointer flex flex-col"
            >
              <div className="relative">
           <div
              className={`absolute top-0 left-0 ${item.accent} text-white text-sm font-bold z-10 w-full`}
            >
              <div className="relative pl-6 py-2">
                <span className="relative z-10">{item.brand}</span>
                <span className="absolute left-0 top-0 h-full w-2 bg-green-500"></span>
              </div>
            </div>


                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-lg font-semibold text-black mb-4 line-clamp-2">
                  {item.title}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <button className="px-6 py-2 font-medium border cursor-pointer text-transform-none bg-transparent text-black border-[#e5e5e5] hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] rounded-[33px]">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeighbourhoodNews;
