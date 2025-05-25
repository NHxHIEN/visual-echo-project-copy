import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExclusiveArmadale = () => {
  const [activeFilter, setActiveFilter] = useState('VIEW ALL');
  const navigate = useNavigate();

  const campaigns = [
    {
      id: 1,
      brand: 'VICTOR CHURCHILL',
      title: 'Free aperitif with reservations for two in April',
      image: '/lovable-uploads/185c05bd-7776-43c8-a4f9-cfe80017c324.png',
      category: 'FOOD & DRINK'
    },
    {
      id: 2,
      brand: 'SCANLAN THEODORE',
      title: 'Attend our AW25 Collection Preview and Win a Trip to Paris!',
      image: '/lovable-uploads/2821d5f0-c98b-4b60-8462-46fffdd0c806.png',
      category: 'FASHION'
    },
    {
      id: 3,
      brand: 'SKIN ANGEL',
      title: '12 IPL Limelight Full Face Treatments for the price of 9!',
      image: '/lovable-uploads/bc9fc1fc-ec80-4ca1-91eb-cf0c4a2a2b33.png',
      category: 'BEAUTY'
    },
    {
      id: 4,
      brand: "RINA'S CUCINA",
      title: 'Win a set menu and accompanying drinks experience for you and three friends.',
      image: '/lovable-uploads/0c94bc9e-488f-4f8f-8144-4f0c8b16616e.png',
      category: 'FOOD & DRINK'
    },
    {
      id: 5,
      brand: 'ET AL',
      title: 'Win a $200 Et Al voucher.',
      image: '/lovable-uploads/13deb9d5-87ef-4260-b439-7bcf24f3716c.png',
      category: 'FASHION'
    },
    {
      id: 6,
      brand: 'JAMES SAID',
      title: '2025 Makeover - Win a consultation for your house',
      image: '/lovable-uploads/02a1179a-1c0a-49ec-a2e1-74678253a0fc.png',
      category: 'SERVICES'
    }
  ];

  const filters = ['VIEW ALL', 'BRIDAL', 'FASHION', 'FOOD & DRINK', 'BEAUTY', 'SERVICES'];

  const filteredCampaigns = activeFilter === 'VIEW ALL'
    ? campaigns
    : campaigns.filter(campaign => campaign.category === activeFilter);

  const handleCampaignClick = (campaignId: number) => {
    navigate(`/campaigns/${campaignId}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-black">EXCLUSIVE ARMADALE</h2>
          <button className="text-black font-medium px-4 py-2 hover:bg-black hover:text-white transition-colors rounded-md">VIEW ALL</button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-black font-medium px-4 py-2 hover:bg-black hover:text-white transition-colors rounded-md ${
                activeFilter === filter ? 'bg-black text-white' : ''
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Campaign Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => (
            <div 
              key={campaign.id} 
              className="bg-white shadow-lg overflow-hidden group cursor-pointer flex flex-col"
              onClick={() => handleCampaignClick(campaign.id)}
            >
              <div className="relative">
              <div className="absolute top-0 left-0 bg-black text-white text-sm font-bold z-10 w-full">
                <div className="relative pl-6 py-2">
                  <span className="relative z-10">{campaign.brand}</span>
                  <span className="absolute left-0 top-0 h-full w-2 bg-orange-500"></span>
                </div>
              </div>

                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-lg font-semibold text-black mb-4 line-clamp-2">
                  {campaign.title}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <button className="px-6 py-2 font-medium border cursor-pointer text-transform-none bg-transparent text-black border-[#e5e5e5] hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] rounded-[33px]">
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
