
import { useState } from 'react';

const ExclusiveArmadale = () => {
  const [activeFilter, setActiveFilter] = useState('VIEW ALL');

  const campaigns = [
    {
      id: 1,
      brand: 'VICTOR CHURCHILL',
      title: 'Free aperitif with reservations for two in April',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'FOOD & DRINK'
    },
    {
      id: 2,
      brand: 'SCANLAN THEODORE',
      title: 'Attend our AW25 Collection Preview and Win a Trip to Paris!',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'FASHION'
    },
    {
      id: 3,
      brand: 'SKIN ANGEL',
      title: '12 IPL Limelight Full Face Treatments for the price of 9!',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'BEAUTY'
    },
    {
      id: 4,
      brand: 'RINA\'S CUCINA',
      title: 'Win a set menu and accompanying drinks experience for you and three friends.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'FOOD & DRINK'
    },
    {
      id: 5,
      brand: 'ET AL',
      title: 'Win a $200 Et Al voucher.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'FASHION'
    },
    {
      id: 6,
      brand: 'JAMES SAID',
      title: '2025 Makeover - Win a consultation for your house',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'SERVICES'
    }
  ];

  const filters = ['VIEW ALL', 'BRIDAL', 'FASHION', 'FOOD & DRINK', 'BEAUTY', 'SERVICES'];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-black">EXCLUSIVE ARMADALE</h2>
          <button className="text-black font-medium hover:underline">VIEW ALL</button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Campaign Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white shadow-lg overflow-hidden group cursor-pointer">
              <div className="relative">
                <div className="absolute top-0 left-0 bg-orange-500 text-white px-4 py-2 text-sm font-bold z-10">
                  {campaign.brand}
                </div>
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-4 line-clamp-2">
                  {campaign.title}
                </h3>
                <button className="border border-gray-300 px-6 py-2 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  ENTER
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveArmadale;
