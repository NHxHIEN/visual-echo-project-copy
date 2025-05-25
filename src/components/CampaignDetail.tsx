
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Share } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const CampaignDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isShared, setIsShared] = useState(false);

  // Mock campaign data - in real app this would come from API
  const campaigns = {
    '1': {
      id: 1,
      brand: 'VICTOR CHURCHILL',
      title: 'Free aperitif with reservations for two in April',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'FOOD & DRINK',
      description: "Rina's iconic set menu changes daily to reflect seasonal flavours. Produce is delivered from small farms and local markets to create an exciting and ever-changing menu, paired with an elegantly curated drinks menu. Click ENTER to go into the running to win an exclusive dining experience at Rina's for you and three friends.",
      claimText: "Click CLAIM to book your exclusive dining experience now."
    },
    '2': {
      id: 2,
      brand: 'SCANLAN THEODORE',
      title: 'Attend our AW25 Collection Preview and Win a Trip to Paris!',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'FASHION',
      description: "Join us for an exclusive preview of our Autumn/Winter 2025 collection. Experience the latest designs from Scanlan Theodore while enjoying champagne and canapés. Enter our competition for a chance to win a luxury trip to Paris Fashion Week.",
      claimText: "Click CLAIM to secure your spot at the preview event."
    }
  };

  const campaign = campaigns[id as keyof typeof campaigns];

  if (!campaign) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Campaign not found</h1>
          <button 
            onClick={() => navigate('/campaigns')}
            className="bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors"
          >
            Back to Campaigns
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    setIsShared(true);
    setTimeout(() => setIsShared(false), 2000);
    // In real app, implement actual sharing functionality
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Demo Banner */}
      <div className="bg-black text-white text-center py-3 px-4 text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>
      
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Brand Header */}
        <div className="mb-8">
          <div className="inline-block bg-red-500 text-white px-4 py-2 text-sm font-bold mb-4">
            {campaign.brand}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {campaign.title}
          </h1>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors">
              ENTER
            </button>
            <button 
              onClick={handleShare}
              className="border border-gray-300 text-gray-700 px-6 py-3 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              SHARE
              <Share size={16} />
              {isShared && <span className="text-green-600 text-sm">✓</span>}
            </button>
          </div>
        </div>

        {/* Campaign Image */}
        <div className="mb-8">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Campaign Description */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {campaign.description}
          </p>
          
          <p className="text-black font-medium text-lg">
            {campaign.claimText}
          </p>
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-200">
          <button className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors">
            ENTER
          </button>
          <button 
            onClick={handleShare}
            className="border border-gray-300 text-gray-700 px-6 py-3 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            SHARE
            <Share size={16} />
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CampaignDetail;
