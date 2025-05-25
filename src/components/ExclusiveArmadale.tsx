import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fs2 from '../img/product2.png';
import fs3 from '../img/fs1.png';
import f2 from '../img/f2.jpg';

const ExclusiveArmadale = () => {
  const [activeFilter, setActiveFilter] = useState('VIEW ALL');
  const navigate = useNavigate();

  const campaigns = [
    {
      id: 1,
      brand: 'VICTOR CHURCHILL',
      title: 'Free aperitif with reservations for two in April',
      image: '/lovable-uploads/185c05bd-7776-43c8-a4f9-cfe80017c324.png',
      category: 'FOOD & DRINK',
    },
    {
      id: 2,
      brand: 'SCANLAN THEODORE',
      title: 'Attend our AW25 Collection Preview and Win a Trip to Paris!',
      image: fs3,
      category: 'FASHION',
    },
    {
      id: 3,
      brand: 'SKIN ANGEL',
      title: '12 IPL Limelight Full Face Treatments for the price of 9!',
      image: '/lovable-uploads/bc9fc1fc-ec80-4ca1-91eb-cf0c4a2a2b33.png',
      category: 'BEAUTY',
    },
    {
      id: 4,
      brand: "RINA'S CUCINA",
      title: 'Win a set menu and accompanying drinks experience for you and three friends.',
      image: f2,
      category: 'FOOD & DRINK',
    },
    {
      id: 5,
      brand: 'ET AL',
      title: 'Win a $200 Et Al voucher.',
      image: fs2,
      category: 'FASHION',
    },
    {
      id: 6,
      brand: 'JAMES SAID',
      title: '2025 Makeover - Win a consultation for your house',
      image: '/lovable-uploads/02a1179a-1c0a-49ec-a2e1-74678253a0fc.png',
      category: 'SERVICES',
    },
  ];

  const filters = ['VIEW ALL', 'BRIDAL', 'FASHION', 'FOOD & DRINK', 'BEAUTY', 'SERVICES'];

  // Lọc theo category được chọn
  const filteredCampaigns = activeFilter === 'VIEW ALL'
    ? campaigns
    : campaigns.filter((campaign) => campaign.category === activeFilter);

  const handleCampaignClick = (campaignId: number) => {
    navigate(`/campaigns/${campaignId}`);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-8">
        <h2 className="text-2xl font-serif font-bold uppercase tracking-wide text-black">
          Exclusive Armadale
        </h2>
          <hr className="mt-2 border-t-2 border-black w-1" />
          <button
            className="text-black font-medium px-4 py-2 hover:bg-black hover:text-white transition-colors rounded-md"
            onClick={() => setActiveFilter('VIEW ALL')}
          >
            VIEW ALL
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-2 font-motiva text-xs font-normal tracking-widest border rounded-sm transition-colors hover:bg-black hover:text-white transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                  : 'bg-transparent text-[#333333] border-[#e5e5e5] hover:border-[#0a0a0a]'
              } uppercase`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Campaign Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.length > 0 ? (
            filteredCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="cursor-pointer flex flex-col"
                onClick={() => handleCampaignClick(campaign.id)}
              >
                 <div className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 bg-black text-white text-sm font-bold z-10 w-full">
                    <div className="relative pl-6 py-2">
                      <span className="relative z-10">{campaign.brand}</span>
                      <span className="absolute left-0 top-0 h-full w-2 bg-orange-500"></span>
                    </div>
                  </div>
                  <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                      />


                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-lg font-semibold text-black mb-4 line-clamp-2">
                    {campaign.title}
                  </h3>
                </div>
                <div className="p-1 pt-0">
                <button className="px-6 py-2 font-sans text-base font-normal rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition-colors duration-300">
                    Enter
                </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No campaigns found for this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveArmadale;
