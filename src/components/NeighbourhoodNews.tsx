import pixelBossImg from '../img/pixelboss.png';
import product5 from '../img/product5.png';
import nb from '../img/nb3.png';

const NeighbourhoodNews = () => {
  const news = [
    {
      id: 1,
      brand: 'PIXEL BOSS',
      title: 'Pixel Boss launch their new software SWIFT!',
      image: pixelBossImg,
      accent: 'bg-black'
    },
    {
      id: 2,
      brand: 'LUCI DI BELLA',
      title: 'AW25 designs now in store!',
      image: product5,
      accent: 'bg-black'
    },
    {
      id: 3,
      brand: 'ARMADALE CELLARS',
      title: 'Armadale Cellars top wine picks for 2025!',
      image: nb,
      accent: 'bg-black'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-8">
      <h2 className="text-2xl font-serif font-bold uppercase tracking-wide text-black">
      Neighbourhood News</h2>
          <hr className="mt-2 border-t-2 border-black w-1" />
          <button className="text-black font-medium px-4 py-2 hover:bg-black hover:text-white transition-colors rounded-md">VIEW ALL</button>
        </div>
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
            className="bg-white overflow-hidden group cursor-pointer flex flex-col"
          >
     <div className="relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 z-10 flex h-10">
                <div className="w-[6px] bg-green-500"></div>
                <div className="flex-1 bg-black flex items-center px-4 text-white text-sm font-semibold">
                  {item.brand}
                </div>
              </div>

              {/* Ảnh */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>


          
            {/* Nội dung */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-base font-medium text-black mb-6 line-clamp-2">
                {item.title}
              </h3>
             <div className="p-0 pt-0">
                <button className="px-6 py-2 font-sans text-base font-normal rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-colors duration-300">
                    Read More
                </button>
                </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeighbourhoodNews;
