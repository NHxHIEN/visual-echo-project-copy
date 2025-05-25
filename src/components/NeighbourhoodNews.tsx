
const NeighbourhoodNews = () => {
  const news = [
    {
      id: 1,
      brand: 'PIXEL BOSS',
      title: 'Pixel Boss launch their new software SWIFT!',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      accent: 'bg-green-500'
    },
    {
      id: 2,
      brand: 'LUCI DI BELLA',
      title: 'AW25 designs now in store!',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      accent: 'bg-green-500'
    },
    {
      id: 3,
      brand: 'ARMADALE CELLARS',
      title: 'Armadale Cellars top wine picks for 2025!',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      accent: 'bg-green-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-black">NEIGHBOURHOOD NEWS</h2>
          <button className="text-black font-medium hover:underline">VIEW ALL</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item.id} className="bg-white shadow-lg overflow-hidden group cursor-pointer">
              <div className="relative">
                <div className={`absolute top-0 left-0 ${item.accent} text-white px-4 py-2 text-sm font-bold z-10`}>
                  {item.brand}
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-4 line-clamp-2">
                  {item.title}
                </h3>
                <button className="border border-gray-300 px-6 py-2 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
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
